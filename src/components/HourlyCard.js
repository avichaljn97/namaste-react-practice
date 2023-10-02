const HourlyCard = (props) => {
  const { overSpendDataRow } = props;
  return (
    <div className="hour-card">
      {
        /* <div className="each-element">{overSpendDataRow.datePart}</div>
        <div className="each-element">{overSpendDataRow.hourpart}</div>
        <div className="each-element">
          {overSpendDataRow.eventName}
        </div>
        <div className="each-element">
          {overSpendDataRow.eventCount}
        </div>
        <div className="each-element">{overSpendDataRow.costType}</div>
        <div className="each-element">{overSpendDataRow.minCost}</div>
        <div className="each-element">{overSpendDataRow.maxCost}</div>
        <div className="-element">
          {overSpendDataRow.totalCost}
        </div>
        <div className="each-element">
          {overSpendDataRow.remainingBudget}
        </div> */
        Object.keys(overSpendDataRow).map((ek) => {
          if (
            !["campaign_id", "sclid", "sku_id", "ubid", "seller_id"].includes(
              ek
            )
          ) {
            return (
              <div key={ek} className="each-element">
                {overSpendDataRow[ek]}
              </div>
            );
          }
        })
      }
    </div>
  );
};

export default HourlyCard;
