import React from "react";
import "./card.css";

export const Card = (props) => {
  const item = props.item;

  return (
    <div className="container">
      <div className="card">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    </div>
  );
};
