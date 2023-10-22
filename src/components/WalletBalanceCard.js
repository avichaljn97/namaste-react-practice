const WalletBalanceCard = ({ walletBalanceDisplayDetails }) => {
  return (
    <div
      className={
        "wallet-balance-card " +
        (walletBalanceDisplayDetails.isActive ? "show-card"
          : "")
      }
    >
      <div className="client-currency-card">
        Wallet balance (in client currency):{" "}
        {walletBalanceDisplayDetails.walletBalance.toFixed(3)}
      </div>

      <div className="usd-card">
        Wallet balance (in USD):{" "}
        {walletBalanceDisplayDetails.walletBalanceUSD.toFixed(3)}
      </div>
    </div>
  );
};

export default WalletBalanceCard;
