import { useState } from "react";
import Constants from "./Constants";
import Shimmer from "./Shimmer";

const Option = (props) => {
  const { displayCostFilter, clientCurrency, showOption, isSearchInititated } =
    props;
  const [costOption, setCostOption] = useState("USD");

  function settingCurrencyFilter(currency) {
    setCostOption(currency);
    displayCostFilter(currency);
  }

  if (
    (isSearchInititated.flag && !showOption.flag) ||
    (showOption.clientId !== undefined &&
      showOption.clientId != isSearchInititated.clientId)
  ) {
    return <Shimmer />;
  }

  if (showOption.flag && showOption.cleintId == isSearchInititated.cleintId) {
    return (
      <div className="options-container">
        <div
          className={
            "currency-option client-currency-button " +
            (costOption !== "USD" ? "clicked-currency-button" : "")
          }
          onClick={() => settingCurrencyFilter(clientCurrency)}
        >
          {clientCurrency}
        </div>
        <div
          className={
            "currency-option usd-button " +
            (costOption === "USD" ? "clicked-currency-button" : "")
          }
          onClick={() => settingCurrencyFilter("USD")}
        >
          USD
        </div>
      </div>
    );
  }
};

export default Option;
