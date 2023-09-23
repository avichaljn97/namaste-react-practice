import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1 id="heading">This is react heading with jsx.</h1>;

const JsxComponent = () => (
  <div id="component">
    <ReactComponent />
    <h2>We are inside jsxComponent</h2>
  </div>
);

let ReactComponent = () => (
  <div id="container">
    {variable}
    {jsxElement}
    <h1 id="heading">This is react heading with jsx, ReactComponent.</h1>
  </div>
);
const variable = "here";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxComponent />);
