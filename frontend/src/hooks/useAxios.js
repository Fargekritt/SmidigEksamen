import axios from "axios";
import { useState, useEffect } from "react";

const axiosConfig = {
  baseURL: ``,
  endpoint: ``,
};

export const useAxios = formData => {
  const [data, setData] = useState();

  const getAxiosResponse = async formData => {
    try {
      return await axios
        .post(`${axiosConfig.baseURL}${axiosConfig.endpoint}${formData}`)
        .then(res => res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    getAxiosResponse(formData).then(res => setData(res));
  });

  const getData = () => {
    getAxiosResponse(formData).then(res => setData(res));
  };

  return { data, getData };
};
