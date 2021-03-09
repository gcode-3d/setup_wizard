import React, { useEffect, useState } from "react";
import GETURL from "../../tools/geturl";
import Page from "../page";
export default function FinishPage(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setLoading(true);
    var raw = JSON.stringify(props.data);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };

    fetch(GETURL() + "/api/submitSetup", requestOptions)
      .then(async (response) => {
        if (response.ok) {
          setLoading(false);
          props.cb();
        } else {
          try {
          } catch (e) {
            console.error(e);
            setError(true);
            props.reportError();
          }
          let json = await response.json();
          setError(true);
          setErrorMessage(json.message);
          props.reportError();
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        props.reportError();
      });
  }, []);
  let errorMsgElement = (
    <h1 className="subtitle">
      <b>Error message returned by the server:</b>
      <br /> {errorMessage}
    </h1>
  );
  if (error) {
    return (
      <Page>
        <h1 className="title">An error occurred</h1>
        <h1 className="subtitle">Try again by reloading the page</h1>
        {errorMessage && errorMsgElement}
        <button
          className="button is-danger"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload page
        </button>
      </Page>
    );
  }
  return (
    <Page>
      <h1 className="title">Setting up your instance</h1>
      <h3 className="subtitle">This will take a few moments</h3>

      <button
        className={"button " + (loading ? "is-warning" : "is-success")}
        disabled={loading}
        onClick={() => {
          window.location.reload();
        }}
      >
        {loading ? "Still setting up" : "Ready! Click here to reload"}{" "}
      </button>
    </Page>
  );
}
