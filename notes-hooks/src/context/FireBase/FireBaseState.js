import React, { useReducer } from "react";
import { fireBaseReducer } from "./FireBaseReducer";
import { FireBaseContext } from "./FireBaseContext";
import axios from "axios";
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from "../types";

const url = "https://react-notes-3a1bc.firebaseio.com";

const FireBaseState = ({ children }) => {
  const initailState = { notes: [], loading: false };
  const [state, dispatch] = useReducer(fireBaseReducer, initailState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const fetchNotes = async () => {
    showLoader();
    const response = await axios.get(`${url}/notes.json`);
    const payload = Object.keys(response.data).map((key) => {
      return { ...response.data[key], id: key };
    });
    dispatch({ type: FETCH_NOTES, payload });
  };
  const addNote = async (title) => {
    const note = { title, date: new Date().toJSON() };
    try {
      const res = await axios.post(`${url}/notes.json`, note);
      const payload = { ...note, id: res.data.name };
      dispatch({ type: ADD_NOTE, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({ type: REMOVE_NOTE, payload: id });
  };
  return (
    <FireBaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FireBaseContext.Provider>
  );
};

export default FireBaseState;
