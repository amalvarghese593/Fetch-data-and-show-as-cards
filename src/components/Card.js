import React, { useState } from "react";
import "./card.css";
import { MoreInfo } from "./MoreInfo";

export const Card = (props) => {
  const item = props.item;
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <button
          className="opn-btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Click for More info
        </button>
        <MoreInfo
          item={item}
          open={isopen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
};
