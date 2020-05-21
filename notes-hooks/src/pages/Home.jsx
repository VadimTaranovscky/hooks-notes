import React from "react";
import Form from "../components/Form";
import ListNotes from "../components/ListNotes";
import Alert from "../components/Alert";
import { useContext } from "react";
import { FireBaseContext } from "../context/FireBase/FireBaseContext";
import { useEffect } from "react";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(
    FireBaseContext
  );
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <main>
      <Alert />
      <Form />
      <hr />
      {loading ? <Loader /> : <ListNotes notes={notes} onRemove={removeNote} />}
    </main>
  );
};

export default Home;
