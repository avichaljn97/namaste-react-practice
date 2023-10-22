import Constants from "../components/Constants";

const useProcessAndGetEvents = (request) => {
  const allEvents = fetch(
    `${Constants.BACKEND_ENDPOINT}getEvents?requestId=${request.requestId}`
  ).then((data) => {
    return data.json();
  });
  return allEvents;
};

export default useProcessAndGetEvents;
