import Constants from "../components/Constants";

const useJobChecker = (requestId) => {
  return new Promise((resolve, reject) => {
    let jobIntervalId;
    let result;
    let counter = 0;
    jobIntervalId = setInterval(() => {
      result = getJobStatus(requestId);
    }, 30000);
    function getJobStatus(requestId) {
      const jobStatus = fetch(
        `${Constants.BACKEND_ENDPOINT}getFetchCallResult?requestId=${requestId}`
      )
        .then((data) => {
          return data.json();
        })
        .then((response) => {
          counter++;
          if (response.responseType === "Fetch" || counter > 19) {
            clearInterval(jobIntervalId);
            resolve(response);
          }
        })
        .catch((error) => {
          clearInterval(jobIntervalId);
          reject(error);
        });
    }
  });
};

export default useJobChecker;
