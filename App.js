import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <AppHeader />
      <AppBody />
    </div>
  );
};

const AppHeader = () => {
  return <div className="app-header">here the AppHeader</div>;
};

const SearchResultCardHolder = () => {
  return (
    <div className="search-result">
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
      <HourlyCard />
    </div>
  );
};

const HourlyCard = () => {
  return <div className="hour-card">This is a single hour card.</div>;
};

const AppBody = () => {
  return (
    <div className="app-body">
      <SearchBar />
      <SearchResultCardHolder />
    </div>
  );
};

const SearchBar = () => {
  return (
    <input
      type="text"
      id="search-bar"
      className="search-bar"
      placeholder="Client ID"
    ></input>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
