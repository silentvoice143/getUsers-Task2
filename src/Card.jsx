import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="cards">
      <div className="img">
        <img src={props.avatar} alt="" srcset="" />
      </div>
      <div className="detail">
        <h2>
          {props.fname} {props.lname}
        </h2>
        <div className="email">{props.email}</div>
      </div>
    </div>
  );
}
