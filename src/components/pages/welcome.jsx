import React from "react";
import Page from "../page";
export default function WelcomePage(props) {
  return (
    <Page>
      <h1 className="title">Thanks for downloading!</h1>
      <h5 className="subtitle">
        To make sure your instance is set up correctly, this setup wizard will
        take you through some steps.
      </h5>
      <p>Changes won't be saved until having completely finished setup.</p>
      <p>Click continue to continue setting up.</p>
      <br />
      <button className="button is-success" onClick={props.cb}>
        Continue
      </button>
    </Page>
  );
}
