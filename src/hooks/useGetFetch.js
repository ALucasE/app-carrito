import { useEffect, useState } from "react";


export const useGetFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [ok, setOk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      console.log(response)
      const data = await response.json();
      console.log(data)
      setData(data)
      setOk(true)
      setIsLoading(false)
    } catch (error) {
      setData(null)
      setOk(false)
      setIsLoading(false)
    }
  };



  useEffect(() => {
    if (!url) return;
    getData();
  }, [url]);

  return {
    data, ok, isLoading
  };
};
