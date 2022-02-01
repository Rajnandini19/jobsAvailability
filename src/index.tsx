import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import Card from "./components/cards"

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Card/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
