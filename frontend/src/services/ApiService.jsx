import axios from "axios";

const axiosConfig = {
  baseURL: `http://127.0.0.1:8080/api/`,
  endpoints: `journey`,
};

const ApiService = (() => {
  const postFormData = async data => {
    try {
      return await axios.post(
        `${axiosConfig.baseURL}${axiosConfig.endpoints}/new`,
        data
      );
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const getJourneyById = async data => {
    try {
      return await axios.get(
        `${axiosConfig.baseURL}${axiosConfig.endpoints}/${data}`
      );
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const apiGetTest = async data => {
    try {
      return await axios.get(`${axiosConfig.baseURL}greeting/1`);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return { postFormData, getJourneyById, apiGetTest };
})();

export default ApiService;
