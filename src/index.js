import React from "react";
import "./index.css";
import App from "./App";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import stores from "./stores";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
