import SearchBar from "./SearchBar";
import { useState } from "react";
import ClientDetailCard from "./ClientDetailCard";
import Constants from "./Constants";
import WalletBalanceCard from "./WalletBalanceCard";
import useWalletBalance from "../utils/useWalletBalance";
import useAllEvents from "../utils/useAllEvents";
import SearchResultCardHolder from "./SearchResultCardHolder";
import Option from "./Option";

const AppBody = () => {
  const [searchInitiated, setSearchInitiated] = useState({
    flag: false,
    clientId: "",
  });
  const [clientDataFromSearchBar, setClientDataFromSearchBar] = useState({});
  const [walletBalanceDisplay, setWalletBalanceDisplay] = useState({
    walletBalance: 0,
    walletBalanceUSD: 0,
    isActive: false,
  });
  const [dateOfOverSpend, setDateOfOverSpend] = useState("");
  const [spendEvents, setSpendEvents] = useState(null);
  const [costFilter, setCostFilter] = useState("USD");
  const [displayCurrencyFilter, setDisplayCurrencyFilter] = useState({
    flag: false,
  });
  const [displayEventData, setDisplayEventData] = useState({
    flag: false,
  });

  const clientDataHandler = async (clientData) => {
    if (clientData.clientId !== undefined) {
      setClientDataFromSearchBar(clientData);

      const { walletBalance, walletBalanceUSD, currencyConversionFactor } =
        await useWalletBalance(clientData, dateOfOverSpend);

      setDisplayCurrencyFilter({ flag: true, clientId: clientData.clientId });

      setWalletBalanceDisplay({
        walletBalance: walletBalance,
        walletBalanceUSD: walletBalanceUSD,
        isActive: true,
      });

      const res = await useAllEvents(
        clientData,
        dateOfOverSpend,
        currencyConversionFactor
      );

      setDisplayEventData({ flag: true });

      console.log(res);
      setSpendEvents(res?.result);
    }
  };

  return (
    <div className="app-body">
      <SearchBar
        getClientDetails={clientDataHandler}
        getDateOfOverSpend={setDateOfOverSpend}
        isSearchInititated={setSearchInitiated}
        setWalletBalanceDisplay={setWalletBalanceDisplay}
        setDisplayEventData={setDisplayEventData}
      />
      <ClientDetailCard
        clientDetail={clientDataFromSearchBar}
        isSearchInititated={searchInitiated}
      />
      <Option
        displayCostFilter={setCostFilter}
        clientCurrency={clientDataFromSearchBar.currencyCode}
        showOption={displayCurrencyFilter}
        isSearchInititated={searchInitiated}
      />
      <WalletBalanceCard
        walletBalanceDisplayDetails={walletBalanceDisplay}
        displayCostFilter={costFilter}
        isSearchInititated={searchInitiated}
      />
      <SearchResultCardHolder
        dataInCard={spendEvents}
        displayCostFilter={costFilter}
        displayEventData={displayEventData}
        isSearchInititated={searchInitiated}
        walletBalanceData={walletBalanceDisplay}
      />
    </div>
  );
};

export default AppBody;
