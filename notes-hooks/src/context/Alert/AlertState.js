import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";
import { HIDE_ALERT, SHOW_ALERT } from "../types";

export default function AlertState({ children }) {
  const [state, dispatch] = useReducer(alertReducer, { visible: false });

  const hide = () => dispatch({ type: HIDE_ALERT });

  const show = (text, type = "warning") =>
    dispatch({ type: SHOW_ALERT, payload: { text, type } });
  
  return (
    <AlertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
}
