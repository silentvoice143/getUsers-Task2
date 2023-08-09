import "./App.css";
import "./Loader.css";
import "./Navbar.css";
import React, { useState } from "react";
import Card from "./Card";

export default function App() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("");

  const url = "https://reqres.in/api/users?page=1";
  const getUsers = () => {
    setActive(false);
    fetch(url)
      .then((res) => res.json({ message: "received" }))
      .then((data) => {
        // console.log(data);
        setData(data.data);
        setActive(true);
      });
  };

  const createcard = (userdata) => {
    return (
      <Card
        email={userdata.email}
        fname={userdata.first_name}
        lname={userdata.last_name}
        avatar={userdata.avatar}
      />
    );
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="brand">satyam</div>
        <button className="getuser" onClick={getUsers}>
          Get Users
        </button>
      </div>
      <div className="container">
        <div
          class="loader"
          style={{ display: active === false ? "block" : "none" }}
        ></div>
        <div
          className="cards-container"
          style={{ display: active === true ? "grid" : "none" }}
        >
          {data.map(createcard)}
        </div>
      </div>
    </div>
  );
}
