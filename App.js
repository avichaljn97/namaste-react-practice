import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1 id="heading">This is react heading with jsx.</h1>;
const variable = "here";
const ReactComponent = () => (
  <div id="container">
    {variable}{jsxElement}
    
    <h1 id="heading">This is react heading with jsx, ReactComponent.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);
