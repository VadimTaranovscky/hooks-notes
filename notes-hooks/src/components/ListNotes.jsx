import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const ListNotes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map((item) => (
      <CSSTransition key={item.id} classNames={"note"} timeout={800}>
        <li className="list-group-item note">
          <div>
            <strong className="noteName">{item.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="btn btn-outline-danger btn-sm"
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ListNotes;
