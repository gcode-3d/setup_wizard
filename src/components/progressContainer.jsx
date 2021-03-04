import React, { useState } from "react";
import "../styles/progress.scss";
import ProgressCircle from "./progressCircle";
import {
  faDoorOpen,
  faFlag,
  faPrint,
  faLock,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
export default function ProgressContainer(props) {
  console.log(props);
  return (
    <div className="ProgressContainer">
      <div>
        <ProgressCircle
          name="Welcome"
          icon={faDoorOpen}
          completed={props.current > 0}
          current={props.current == 0}
        />
        <ProgressCircle
          name="Select printer"
          icon={faPrint}
          completed={props.current > 1}
          current={props.current == 1}
        />
        <ProgressCircle
          name="Print Config"
          icon={faWrench}
          completed={props.current > 2}
          current={props.current == 2}
        />
        <ProgressCircle
          name="Security"
          icon={faLock}
          completed={props.current > 3}
          current={props.current == 3}
        />
        <ProgressCircle
          name="Finish"
          icon={faFlag}
          completed={false}
          error={props.finishError}
          current={props.current == 4}
          completed={props.current > 4}
        />
      </div>
    </div>
  );
}
