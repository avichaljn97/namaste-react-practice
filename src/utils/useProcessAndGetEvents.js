import Constants from "../components/Constants";

const useProcessAndGetEvents = (requestId,currencyConversionFactor,clientTimezone) => {
  console.log(
    `${Constants.BACKEND_ENDPOINT}getEvents?requestId=${requestId}&currencyConversionFactor=${currencyConversionFactor}&clientTimezone=${clientTimezone}`
  );
  const allEvents = fetch(
    `${Constants.BACKEND_ENDPOINT}getEvents?requestId=${requestId}&currencyConversionFactor=${currencyConversionFactor}&clientTimezone=${clientTimezone}`
  ).then((data) => {
    return data.json();
  });
  return allEvents;
};

export default useProcessAndGetEvents;
