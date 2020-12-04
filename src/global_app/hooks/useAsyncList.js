import { useState, useEffect } from "react";
import Axios from "axios";

function useAsyncList(url, default_data) {
  const [data, setData] = useState(default_data);
  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return [data, setData];
}

export default useAsyncList;
