import Constants from "../components/Constants";

const useClientData = async (clientId) => {
  const fetchData = await fetch(
    `${Constants.BACKEND_ENDPOINT}getClientDetails?clientId=${clientId}`
  );
  const clientData = await fetchData.json();
  return clientData.isSuccess ? clientData.data : {};
};

export default useClientData;
