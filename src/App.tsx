import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import {Heading} from "./Heading";

const container = document.getElementById("app-root");

if (container != null) {
  const root = ReactDOMClient.createRoot(container);
  root.render(<Heading text="And I am React"/>);
}
