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
  console.log(dateOfOverSpend);
  const fetchData = fetch(
    `${Constants.BACKEND_ENDPOINT}postFetchCall?clientId=${clientId}&marketplaceClientId=${marketplaceClientId}&sellerId=${sellerId}&fromDate="${dateOfOverSpend}"&timezone="${timezone}"`
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
      return useProcessAndGetEvents(response);
    });
  return fetchData;
};

export default useAllEvents;
