import React, { cloneElement } from "react";
import "../styles/page.scss";
export default function Page(props) {
  return (
    <div className="page">
      {cloneElement(<>{props.children}</>, { ...props })}
    </div>
  );
}
