import { useEffect, useState } from "react";
import axios_api from "../api/axios_api";
import CardInfo from "./CardInfo";
const People = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios_api
      .get("/people")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <CardInfo data={data} />;
};

export default People;
