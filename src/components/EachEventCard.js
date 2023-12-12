const EachEventCard = (props) => {
  const {
    overSpendDataRow,
    remainingWalletBalance,
    costOfEvent,
    displayCostFilter,
  } = props;
  return (
    <div className="each-event-card">
      {
        /*
        {
    "event_time": "2023-11-06 21:29:28",
    "event_request_time": "2023-11-06 20:59:17",
    "event": "click",
    "campaign_id": "94443",
    "sclid": "V2arUV7BeQr3A8BK2Vv4hDSIdifT1LlT",
    "event_count": "1",
    "cost": 32.51792180917893,
    "bidding_type": "AUTO_CPC",
    "sku_id": "365963",
    "ubid": "5153c208ddc2f432",
    "tracking_id": "REVX_TAG",
    "keyword_id": "92442",
    "cost_usd": 0.44000000000000006,
    "hour_part": 21
} */
        /* Object.keys(overSpendDataRow).map((event_key) => {
          if (["cost", "cost_usd"].includes(event_key)) {
            return (
              <div key={event_key} className="each-element">
                {parseFloat(overSpendDataRow[event_key].toFixed(4))}
              </div>
            );
          } else if (
            ![
              "campaign_id",
              "sclid",
              "sku_id",
              "ubid",
              "seller_id",
              "event_request_time",
              "event_count",
              "tracking_id",
            ].includes(event_key)
          ) {
            return (
              <div key={event_key} className="each-element">
                {overSpendDataRow[event_key]}
              </div>
            );
          }
        }) */

        <>
          {overSpendDataRow.event_count > 1 ? (
            <div className="each-element event-count">
              {overSpendDataRow.event_count}
            </div>
          ) : (
            <></>
          )}

          <div className="each-element timestamp">
            {overSpendDataRow.event_time}
          </div>
          <div className="event-tags">
            <div className="event">{overSpendDataRow.event}</div>
            {/* <div className="each-element campaign">{overSpendDataRow.campaign_id}</div> */}
            <div className="bidding-type">{overSpendDataRow.bidding_type}</div>
            {overSpendDataRow.keyword_id !== "na" ? (
              <div className="keyword-id">{overSpendDataRow.keyword_id}</div>
            ) : (
              <></>
            )}
          </div>

          <div className="each-element cost">
            {costOfEvent.toFixed(3) + " " + displayCostFilter}
          </div>
          <div className="each-element cost">
            {remainingWalletBalance.toFixed(3) + " " + displayCostFilter}
          </div>
        </>
      }
    </div>
  );
};

export default EachEventCard;
