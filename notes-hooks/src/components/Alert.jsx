import React from "react";
import { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../context/Alert/alertContext";

const Alert = () => {
  const { hide, alert } = useContext(AlertContext);
  return (
    <CSSTransition 
      in={alert.visible}
      timeout={{
        enter:500,
        exit:350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type} alert-dismissible`}>
        <strong>Внимание!</strong>
        &nbsp;
        {alert.text !== null
          ? `Заметка с текстом "${alert.text}" была успешно добавлена`
          : "Введите название заметки"}
        <button
          type="button"
          onClick={hide}
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};

export default Alert;
