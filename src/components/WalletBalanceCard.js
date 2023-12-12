import Shimmer from "./Shimmer";
const WalletBalanceCard = (props) => {
  const { walletBalanceDisplayDetails, displayCostFilter, isSearchInititated } =
    props;
 // console.log(props);

  if (!walletBalanceDisplayDetails.isActive && isSearchInititated.flag)
    return <Shimmer />;
  const walletBalance =
    displayCostFilter === "USD"
      ? walletBalanceDisplayDetails.walletBalanceUSD
      : walletBalanceDisplayDetails.walletBalance;
  return (
    <div
      className={
        "wallet-balance-card " +
        (walletBalanceDisplayDetails.isActive ? "show-card" : "")
      }
    >
      <div className="currency-card">
        Wallet balance: {walletBalance.toFixed(3) + " " + displayCostFilter}
      </div>
    </div>
  );
};

export default WalletBalanceCard;
