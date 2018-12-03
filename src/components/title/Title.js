import React from "react";
import "./Title.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faMusic);

export default function Title(props) {
  return (
    <div className="row display-3">
      <div className="col-1">
        <FontAwesomeIcon icon="music" className="fa-lg logo" />
      </div>
      <div className="col">
        <span className="title">{props.text}</span>
      </div>
    </div>
  );
}
