import EachEventCard from "./EachEventCard";
import Shimmer from "./Shimmer";
import dataInCard from "./mockdata";

const SearchResultCardHolder = ({
  dataInCard,
  displayCostFilter,
  displayEventData,
  isSearchInititated,
  walletBalanceData,
}) => {
  let remainingWalletBalance =
    displayCostFilter === "USD"
      ? walletBalanceData.walletBalanceUSD
      : walletBalanceData.walletBalance;
  if (!displayEventData.flag === true && isSearchInititated.flag === true) {
    return <Shimmer />;
  }
  if (dataInCard !== null)
    return (
      <div className="search-result">
        {dataInCard.map((eachCard, index) => {
          const costOfEvent = displayCostFilter === "USD"
              ? eachCard["cost_usd"]
              : eachCard["cost"];
          remainingWalletBalance =
            remainingWalletBalance - costOfEvent;
          return (
            <EachEventCard
              key={index}
              overSpendDataRow={eachCard}
              remainingWalletBalance={remainingWalletBalance}
              costOfEvent={costOfEvent}
              displayCostFilter={displayCostFilter}
            />
          );
        })}
      </div>
    );
};

export default SearchResultCardHolder;
