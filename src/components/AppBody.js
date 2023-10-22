import SearchBar from "./SearchBar";
import { useState } from "react";
import ClientDetailCard from "./ClientDetailCard";
import Constants from "./Constants";
import WalletBalanceCard from "./WalletBalanceCard";
import useWalletBalance from "../utils/useWalletBalance";
import useAllEvents from "../utils/useAllEvents";
import SearchResultCardHolder from "./SearchResultCardHolder";

const AppBody = () => {
  const [clientDataFromSearchBar, setClientDataFromSearchBar] = useState({});
  const [walletBalanceDisplay, setWalletBalanceDisplay] = useState({
    walletBalance: 0,
    walletBalanceUSD: 0,
    isActive: false,
  });
  const [dateOfOverSpend, setDateOfOverSpend] = useState("");

  const clientDataHandler = async (clientData) => {
    setClientDataFromSearchBar(clientData);
    const { walletBalance, walletBalanceUSD, currencyConversionFactor } =
      await useWalletBalance(clientData, dateOfOverSpend);

    const res = await useAllEvents(
      clientData,
      dateOfOverSpend,
      currencyConversionFactor
    );

    //console.log(requestId);
    // setWalletBalanceDisplay({
    //   walletBalance: walletBalance,
    //   walletBalanceUSD: walletBalanceUSD,
    //   isActive: true,
    // });
  };

  return (
    <div className="app-body">
      <SearchBar
        getClientDetails={clientDataHandler}
        getDateOfOverSpend={setDateOfOverSpend}
      />
      <ClientDetailCard clientDetail={clientDataFromSearchBar} />
      <WalletBalanceCard walletBalanceDisplayDetails={walletBalanceDisplay} />
    </div>
  );
};

export default AppBody;
