import { useState, useEffect } from "react";
import axios from "axios";

const useApiFetch = (initialUrl) => {
  const [data, setData] = useState({});
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoad(false);
        const response = await axios.get(initialUrl);
        setData(response.data);
        setIsLoad(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return {
    isLoad,
    data,
  };
};

export default useApiFetch;
