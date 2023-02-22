import React from "react";
import downArrow from "../../assets/DownArrow.png";

export const DiscountCode = () => {
  return (
    <div
      className="card shadow-card"
      style={{
        height: "60px",
        marginTop: "20px",
      }}
    >
      <span
        className="fw-bold"
        style={{ margin: "19px 0px 21px 20px", fontSize: "16px" }}
      >
        Discount Codes
        <img className="float-end arrow-btn" src={downArrow} alt="..." />
      </span>
    </div>
  );
};
