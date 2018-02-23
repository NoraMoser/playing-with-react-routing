import React from "react";
import { Route, Link } from "react-router-dom";

import Hello from "./Hello";
import Wow from "./Wow";

import "../styles.css";

const toolBar = () => (
  <div>
    <ul className="Toolbar">
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/other">other</Link>
      </li>
    </ul>
    <Route path="/" exact component={Hello} />
    <Route path="/other" component={Wow} />
  </div>
);

export default toolBar;
