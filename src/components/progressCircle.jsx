import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProgressCircle(props) {
  return (
    <div
      className={
        "ProgressCircle " +
        (props.completed == true
          ? "completed"
          : props.error == true
          ? "error"
          : props.current == true
          ? "current"
          : "")
      }
    >
      <div className="circle">
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </div>
      <h5>{props.name}</h5>
    </div>
  );
}
