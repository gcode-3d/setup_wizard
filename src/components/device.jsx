import { faUsb } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Device({ device, cb }) {
  console.log(device);

  return (
    <div className="deviceBox column is-half">
      <div className="icon">
        <FontAwesomeIcon size="lg" icon={faUsb} rotation={270} />
      </div>
      <h1 className="title">{device.path}</h1>
      <h5 className="subtitle">
        {device.manufacturer || "manufacturer unknown"}
      </h5>
      <p>
        <b>Pnp id: </b>
        {device.pnpId || "Unknown"}
      </p>
      <p>
        <b>Product id: </b>
        {device.productId || "Unknown"}
      </p>
      <p>
        <b>Location id: </b>
        {device.locationId || "Unknown"}
      </p>
      <p>
        <b>Vendor id: </b>
        {device.vendorId || "Unknown"}
      </p>
      <p>
        <b>Serialnr: </b>
        {device.serialNumber || "Unknown"}
      </p>
      <button
        className="button is-success"
        onClick={() => {
          cb({
            device,
          });
        }}
      >
        Select
      </button>
    </div>
  );
}
