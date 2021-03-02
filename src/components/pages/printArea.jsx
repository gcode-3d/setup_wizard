import React, { useState } from "react";
import Page from "../page";

export default function PrintArea(props) {
  const [xValue, setXValue] = useState(200);
  const [yValue, setYValue] = useState(200);
  const [zValue, setZValue] = useState(200);
  const [origin, setOrigin] = useState("lower-left");
  const [heatedBed, setHeatedBed] = useState(false);
  const [heatedChamber, setHeatedChamber] = useState(false);
  return (
    <Page>
      <h1 className="title">Temperature</h1>
      <h1 className="subtitle">Temperature related settings </h1>
      <div className="columns">
        <div className="column is-half">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={heatedBed}
              onChange={() => {
                setHeatedBed(!heatedBed);
              }}
            />{" "}
            Heated Bed
          </label>
        </div>
        <div className="column is-one-third is-desktop">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={heatedChamber}
              onChange={() => {
                setHeatedChamber(!heatedBed);
              }}
            />{" "}
            Heated Chamber
          </label>
        </div>
      </div>
      <h1 className="title">Bounding box</h1>
      <h1 className="subtitle">Set the inner area for the printer </h1>
      <div className="columns">
        <div className="column is-half is-desktop">
          <div className="field">
            <label className="label">x value (width) </label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="size in mm"
                onChange={(e) => {
                  if (checkNrInput(e.currentTarget.value)) {
                    setXValue(e.currentTarget.value.trim());
                  }
                  if (e.currentTarget.value == "") {
                    setXValue("0");
                  }
                }}
                value={xValue}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">y value (depth) </label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="size in mm"
                onChange={(e) => {
                  if (checkNrInput(e.currentTarget.value)) {
                    setYValue(e.currentTarget.value.trim());
                  }
                  if (e.currentTarget.value == "") {
                    setYValue("0");
                  }
                }}
                value={yValue}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">z value (height) </label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="size in mm"
                onChange={(e) => {
                  if (checkNrInput(e.currentTarget.value)) {
                    setZValue(e.currentTarget.value.trim());
                  }
                  if (e.currentTarget.value == "") {
                    setZValue("0");
                  }
                }}
                value={zValue}
              />
            </div>
          </div>
        </div>
      </div>
      <label className="label">Origin </label>
      <div className="select">
        <select
          value={origin}
          onChange={(e) => {
            setOrigin(e.currentTarget.value);
          }}
        >
          <option value="lower-left">Lower left</option>
          <option value="center">Center</option>
        </select>
      </div>
      <div className="field">
        <button className="button is-success" onClick={validateInput}>
          Continue
        </button>
      </div>
    </Page>
  );

  function validateInput() {
    if (xValue == 0 || yValue == 0 || zValue == 0) {
      return;
    }
    props.cb({
      printInfo: {
        xValue: parseInt(xValue),
        yValue: parseInt(yValue),
        zValue: parseInt(zValue),
        origin,
        heatedBed,
        heatedChamber,
      },
    });
  }

  function checkNrInput(value) {
    if (isNaN(value) || parseInt(value) < 0) {
      return false;
    }
    return true;
  }
}
