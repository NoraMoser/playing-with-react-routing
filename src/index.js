import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Wow from "./Wow";
import ToolBar from "./Toolbar";

import { BrowserRouter } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <BrowserRouter>
    <div style={styles}>
      <ToolBar />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
