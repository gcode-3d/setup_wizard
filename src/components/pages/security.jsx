import React, { useState } from "react";
import Page from "../page";
export default function SecurityPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordsVisible, setPasswordsVisible] = useState(false);
  return (
    <Page>
      <h1 className="title">Configure the admin account.</h1>
      <h1 className="subtitle">
        The account created here will have the administrator permission.
        <br /> You can configure the rest of the interface later.
      </h1>
      <div className="columns">
        <div className="column is-desktop is-half">
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value.trim())}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password (8 chars min)</label>
            <div className="control">
              <input
                className="input"
                type={passwordsVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value.trim())}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control ">
              <input
                className="input"
                type={passwordsVisible ? "text" : "password"}
                placeholder="Confirm password"
                value={passwordConfirmation}
                onChange={(e) =>
                  setPasswordConfirmation(e.currentTarget.value.trim())
                }
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                disabled={
                  username == "" ||
                  password.length < 8 ||
                  passwordConfirmation.length < 8 ||
                  password != passwordConfirmation
                }
                className="button is-success"
                onClick={() => {
                  props.cb({
                    account: {
                      username,
                      password,
                    },
                  });
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
