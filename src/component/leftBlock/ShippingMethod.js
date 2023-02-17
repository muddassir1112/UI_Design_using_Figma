import React from "react";
import card from "../../assets/image 36.png";
import cardFaster from "../../assets/imageFaster.png";
import "../../style/LeftBlock.css";

export const ShippingMethod = () => {
  return (
    <div className="card shadow-card left-card-block">
      <p className="left-card-block__heading">Shipping Method</p>
      <div
        className="tracking-div"
        style={{ background: "#e8f0fb", border: "1px solid #1660CF" }}
      >
        <input className="input-radio" type="radio" />
        <span
          className="fw-bold"
          style={{ fontSize: "16px", marginTop: "15px" }}
        >
          $2.99
        </span>
        <div className="tracking-div-content">
          <span className="text-muted">USPS 1st Class With Tracking</span>
          <p className="text-muted">(5-13)days COVID 19 Delay</p>
        </div>
        <img
          src={card}
          alt="..."
          style={{ marginRight: "16px", marginTop: "8px" }}
        />
      </div>
      {/* ------------------- */}
      <div
        className="tracking-div"
        style={{ border: "1px solid #B2BCCA", margin: "15px 0px 30px 0px" }}
      >
        <input type="radio" className="input-radio" />
        <span
          className="fw-bold"
          style={{ fontSize: "16px", marginTop: "15px" }}
        >
          $9.00
        </span>
        <div className="tracking-div-content">
          <span className="text-muted">USPS PRIORITY With Tracking</span>
          <p className="text-muted">(5-13)days COVID 19 Delay</p>
        </div>
        <img
          src={cardFaster}
          alt="..."
          style={{
            height: "50px",
            width: "50px",
            marginRight: "16px",
            marginTop: "8px",
          }}
        />
      </div>
    </div>
  );
};
