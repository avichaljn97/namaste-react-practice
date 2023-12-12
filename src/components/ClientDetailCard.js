import Constants from "./Constants";
import Shimmer from "./Shimmer";

const ClientDetailCard = (props) => {
  let { clientDetail, isSearchInititated } = props;
  //console.log(isSearchInititated, clientDetail.clientId)
  if (
    isSearchInititated.flag &&
    isSearchInititated.clientId != clientDetail.clientId
  ) {
    return <Shimmer />;
  }
  return (
    <div className={"client-detail-container"}>
      {Object.keys(clientDetail).map((ek) => {
        if (
          ![
            "merchantType",
            "currencyCode",
            "timezone",
            "marketplaceClientId",
            "statusType",
          ].includes(ek)
        ) {
          return (
            <div key={ek} className="client-details">
              {Constants[ek]}: {clientDetail[ek]}
            </div>
          );
        }
      })}
    </div>
  );
};

export default ClientDetailCard;
