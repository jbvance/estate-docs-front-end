import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import sendDoc from "./sendDoc";
import WizardForm from "./WizardForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Durable Power of Attorney</h2>
      <WizardForm onSubmit={sendDoc} />
      <Values form="wizard" />
    </div>
  </Provider>,
  rootEl
);
