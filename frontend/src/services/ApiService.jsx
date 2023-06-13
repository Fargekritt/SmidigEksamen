import axios from "axios";

const axiosConfig = {
    baseURL: `https://munchmoment-win.azurewebsites.net/api/`,
};

function getApiUrl() {
    if (window.location.hostname === "munchmoment-win.azurewebsites.net") {
        return axiosConfig.baseURL;
    } else {
        return "http://localhost:8080/api/";
    }
}

const ApiService = (() => {
    // let [baseURL, setBaseURL] = useState(getApiUrl());
    let baseURL = getApiUrl();
    const postFormData = async (data, endpoint) => {
        try {
            return await axios.post(`${baseURL}${endpoint}`, data);
        } catch (err) {
            return Promise.reject(err);
        }
    };

    const getById = async (endpoint, id) => {
        try {
            return await axios.get(`${baseURL}${endpoint}/${id}`);
        } catch (err) {
            return Promise.reject(err);
        }
    };

    const getAll = async endpoint => {
        try {
            return await axios.get(`${baseURL}${endpoint}/`);
        } catch (err) {
            return Promise.reject(err);
        }
    };

    return {postFormData, getById, getAll};
})();

export default ApiService;
