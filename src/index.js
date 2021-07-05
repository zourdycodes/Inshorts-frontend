import React from "react";
import { render } from "react-dom";
import { App } from "./app";
import { Global } from "./global/global-styles";

render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById("root")
);
