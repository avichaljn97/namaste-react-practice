import Constants from "../components/Constants";
import useJobChecker from "./useJobChecker";
import useProcessAndGetEvents from "./useProcessAndGetEvents";
function getJobId(fetchRequestResponse) {
  return fetchRequestResponse.requestId;
}

const useAllEvents = (
  clientData,
  dateOfOverSpend,
  currencyConversionFactor
) => {
  const { clientId, sellerId, marketplaceClientId, timezone } = clientData;
  console.log(currencyConversionFactor);
  const fetchData = fetch(
    `${Constants.BACKEND_ENDPOINT}postFetchCall?jsonQuery={"clientId":${clientId},"marketplaceClientId":${marketplaceClientId},"sellerId":"${sellerId}","fromDate":"${dateOfOverSpend}","timezone":"${timezone}"}`
  )
    .then((response) => {
      return response.json();
    })
    .then((requestBody) => {
      return getJobId(requestBody);
    })
    .then((requestId) => {
      return useJobChecker(requestId);
    })
    .then((response) => {
      return useProcessAndGetEvents(response.requestId,currencyConversionFactor,timezone);
    })
    .catch((exception)=>{
      return exception.message;
    });
  return fetchData;
};

export default useAllEvents;
