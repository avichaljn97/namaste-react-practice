import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <AppHeader />
      <AppBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
