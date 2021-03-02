import React, { useEffect, useState } from "react";
import GETURL from "../../tools/geturl";
import Page from "../page";
export default function FinishPage(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    var raw = JSON.stringify(props.data);

    var requestOptions = {
      method: "POST",
      body: raw,
    };

    fetch(GETURL() + "/api/submitSetup", requestOptions)
      .then((response) => {
        if (response.ok) {
          setLoading(false);
        } else {
          setError(true);
          props.reportError();
        }
      })
      .catch((error) => {
        console.log("error", error);
        setError(true);
        props.reportError();
      });
  }, []);

  if (error) {
    return (
      <Page>
        <h1 className="title">An error occurred</h1>
        <h1 className="subtitle">Try again by reloading the page</h1>
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
      >
        {loading ? "Still setting up" : "Ready! Click here to reload"}{" "}
      </button>
    </Page>
  );
}
