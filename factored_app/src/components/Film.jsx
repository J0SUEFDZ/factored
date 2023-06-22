import { useEffect, useState } from "react";
import axios_api from "../api/axios_api";
import CardInfo from "./CardInfo";
import useLocation from "wouter/use-location";
const Film = () => {
  const [data, setData] = useState([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    axios_api
      .get("/films")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setLocation("/login");
        }
      });
  }, [setLocation]);

  return <CardInfo data={data} />;
};

export default Film;
