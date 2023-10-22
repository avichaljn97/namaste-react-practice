import Constants from "./Constants";

const ClientDetailCard = (props) => {
  const { clientDetail } = props;
  return (
    <div className="client-detail-container">
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
