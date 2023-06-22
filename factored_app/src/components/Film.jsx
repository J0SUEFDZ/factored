import { useEffect, useState } from "react";
import axios_api from "../api/axios_api";
import CardInfo from "./CardInfo";
const Film = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios_api
      .get("/films")
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

export default Film;
