import { useState, useEffect } from "react";
import useClientData from "../utils/useClientData";
function isDateValid(dateStr) {
  return !isNaN(new Date(dateStr));
}

const SearchBar = ({ getClientDetails, getDateOfOverSpend }) => {
  const [dateSearchText, setDateSearchText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [errorCSS, setErrorCSS] = useState("");
  const [getResources, setGetResources] = useState(null);
  useEffect(() => {
    console.log(getResources);
    console.log("Searching...");
    async function caller() {
      if (getResources != null) {
        const clientData = await useClientData(getResources.clientId);
        getClientDetails(clientData);
      }
    }
    caller();
  }, [JSON.stringify(getResources)]);
  return (
    <div className="search-bar">
      <div className="clientid-box-container">
        <input
          type="text"
          id="client-id-search-bar"
          className="client-id-search-bar"
          placeholder="Client ID"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
      </div>
      <div className="overspend-date-container">
        <div className="label-search-bar">Date of overspend *</div>
        <input
          type="text"
          id="end-date-search-bar"
          className={"end-date-search-bar " + errorCSS}
          placeholder="yyyy-mm-dd"
          value={dateSearchText}
          onChange={(event) => {
            setErrorCSS("");
            setDateSearchText(event.target.value);
            getDateOfOverSpend(event.target.value);
          }}
        ></input>
      </div>
      <div className="button-container">
        <button
          onClick={async () => {
            let inputClientId = searchText;
            inputClientId = inputClientId.trim();
            if (!isDateValid(dateSearchText)) {
              setErrorCSS("highlight-error");
            } else {
              if (inputClientId !== undefined && isDateValid(dateSearchText)) {
                setGetResources({
                  clientId: inputClientId,
                  dateSearchText: dateSearchText,
                });
              } else if (searchText !== "") {
                getClientDetails({ message: "Not a valid client id." });
              } else {
                getClientDetails({});
              }
            }
          }}
        >
          Search
        </button>
      </div>
      {/* <ClientDetailCard clientDetail={clientDataList} /> */}
    </div>
  );
};

export default SearchBar;
