import axios from "axios";

const axiosConfig = {
  baseURL: `http://127.0.0.1:8080/api/`,
  endpoints: [`painting`, `journey`, `comment`, `exhibition`, `theme`],
};

const ApiService = (() => {
  const postFormData = async (data, endpoint) => {
    try {
      return await axios.post(`${axiosConfig.baseURL}${endpoint}`, data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const getById = async (id, endpoint) => {
    try {
      return await axios.get(`${axiosConfig.baseURL}${endpoint}/${id}`);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const getAll = async endpoint => {
    try {
      return await axios.get(`${axiosConfig.baseURL}${endpoint}/`);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return { postFormData, getById, getAll };
})();

export default ApiService;
