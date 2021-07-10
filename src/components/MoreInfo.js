import React from "react";
import "./moreinfo.css";

export const MoreInfo = ({ open, onClose, item }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="pop-up">
        <h3>
          Product No: {item.id} belongs to the category {item.userId}
        </h3>
        <br />
        <button className="cls-btn" onClick={onClose}>
          close
        </button>
      </div>
    </>
  );
};
