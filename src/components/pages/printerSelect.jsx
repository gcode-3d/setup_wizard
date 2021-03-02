import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import GETURL from "../../tools/geturl";
import Device from "../device";
import Page from "../page";

import "../../styles/device.scss";

export default function PrinterSelectPage(props) {
  let unmounted = false;
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    reloadDevices();
    return () => {
      unmounted = true;
    };
  }, []);
  if (loading) {
    return (
      <Page>
        <div className="has-text-centered">
          <span>
            <h1 className="title">
              <FontAwesomeIcon icon={faSyncAlt} spin={true} /> Loading detected
              devices
            </h1>
          </span>
        </div>
      </Page>
    );
  }
  if (devices.length == 0) {
    return (
      <Page>
        <h1 className="title">No devices found</h1>
        <h1 className="subtitle">
          Make sure your device is plugged in and turned on.
        </h1>
        <button className="button is-info" onClick={reloadDevices}>
          Reload devices
        </button>
      </Page>
    );
  } else {
    return (
      <Page>
        <div className="columns deviceContainer">
          {devices.map((device) => (
            <Device key={device.path} device={device} cb={props.cb} />
          ))}
        </div>
        <h1 className="title">Is your device missing?</h1>
        <h1 className="subtitle">
          Make sure your device is plugged in and turned on.
        </h1>
        <button className="button is-info" onClick={reloadDevices}>
          Reload devices
        </button>
      </Page>
    );
  }

  function reloadDevices() {
    setLoading(true);
    fetch(GETURL() + "/api/fetchDevices", { method: "GET" })
      .then(async (response) => {
        let json = await response.json();
        if (!unmounted) {
          setDevices(json);
          console.log(json);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        if (!unmounted) {
          setLoading(false);
        }
      });
  }
}
