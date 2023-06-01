import { useState, useEffect } from "react";

import axios from "axios";

// import { RAPID_API_KEY } from "@env";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "ec669dcc3dmshaad86556479e67dp1a06d9jsna429bdcf36ca",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, error, refetch };
};

export { useFetch };
