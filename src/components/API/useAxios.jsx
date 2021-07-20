import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendRequest = async (method, url, data) => {

    const config = {
      baseURL: process.env.REACT_APP_SERVER,
      url,
      method,
      data,
    };

    try {
      await axios(config);
    } catch (e) {
      console.log("an error occured while sending the data", e);
    }
  };

  return { isSuccess, response, sendRequest };
};

export default useAxios;
