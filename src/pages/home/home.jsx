import React from "react";
import { request } from "../../config/confog";
import Cookies from "js-cookie";
export const Home = () => {
  const [data, setData] = React.useState([]);
  request
    .get("/users", `Bearer ${Cookies.get("server-token")}`)
    .then((res) => setData(res.data.user));
  return (
    <>
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.Surname}</h2>
        </div>
      ))}
    </>
  );
};

export default Home;
