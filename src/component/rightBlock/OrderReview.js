import React from "react";
import downArrow from "../../assets/DownArrow.png";

export const OrderReview = () => {
  return (
    <div
      className="card shadow-card"
      style={{ 
        height: "85px", marginTop: "19px" }}
    >
      <span
        className="fw-bold"
        style={{ marginTop: "19px", marginLeft: "20px", fontSize: "16px" }}
      >
        Order Review
        <img
          className="float-end arrow-btn" 
          src={downArrow}
          alt="..."
        />
      </span>
      <span style={{ margin: "4px 0px 22px 20px", fontSize: "12px" }}>
        3 items in card
      </span>
    </div>
  );
};
