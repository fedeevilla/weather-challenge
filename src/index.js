import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import "./index.css";
import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore();
require("dotenv").config();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
