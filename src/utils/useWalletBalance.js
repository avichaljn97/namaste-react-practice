import Constants from "../components/Constants";

const useWalletBalance = async (clientData, dateOfOverSpend) => {
  const { clientId, currencyCode } = clientData;
  const fetchData = await fetch(
    `${Constants.BACKEND_ENDPOINT}getWalletBalance?jsonQuery={"clientId":${clientId},"clientCurrency":"${currencyCode}","endDate":"${dateOfOverSpend}"}`
  );
  const clientWalletData = await fetchData.json();
  return clientWalletData.isSuccess
    ? {
        walletBalance: clientWalletData.data.amount,
        walletBalanceUSD: clientWalletData.data.amountUSD,
        currencyConversionFactor: clientWalletData.currencyConversionFactor,
      }
    : {};
};

export default useWalletBalance;
