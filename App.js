import React from "react";
import ReactDOM from "react-dom/client";

const jsxElement = <h1 id="heading">This is react heading with jsx.</h1>;

const ReactComponent = () => {
    return <h1 id="heading">This is react heading with jsx, ReactComponent.</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);
