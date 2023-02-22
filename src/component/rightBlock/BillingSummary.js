import { TextField } from "@mui/material";
import React from "react";
import upArrow from "../../assets/Polygon 2.png";
import norton from "../../assets/Norton Icon.png";
import "../../style/RightBlock.css";

export const BillingSummary = () => {
  return (
    <div
      className="card shadow-card billing-summary-card"
      style={{ height: "auto", marginTop: "20px" }}
    >
      <span
        className="fw-bold"
        style={{ margin: "19px 0px 21px 20px", fontSize: "16px" }}
      >
        Billing Summary
        <img className="float-end arrow-btn" src={upArrow} alt="..." />
      </span>
      <span className="billTitle">
        Subtotal
        <span className="float-end billTitleAmount">$3720,27</span>
      </span>
      <span className="billTitle">
        Discount
        <span className="float-end billTitleAmount">$-749.99</span>
      </span>
      <span className="billTitle">
        Warranty(Platinum)
        <span className="float-end billTitleAmount">$259.99</span>
        <br></br>
        <span className="text-primary" style={{ fontSize: "12px" }}>
          Remove
        </span>
      </span>

      <span className="billTitle">
        Shipping
        <span className="float-end billTitleAmount">$0.00</span>
      </span>
      <span className="billTitle">
        Tax
        <span className="float-end billTitleAmount">$228.72</span>
      </span>
      <span className="billTitle">
        <hr></hr>
      </span>
      {/* ------------------------------------------------------------------ */}
      <div className="grand-total">
        <span className="fw-bold" style={{ fontSize: "16px" }}>
          Grand total
          <span className="float-end fw-bold" style={{ fontSize: "16px" }}>
            $3439.00
          </span>
        </span>
        <TextField
          id="outlined-controlled"
          label="Order Comment"
          value="Type here.."
          sx={{ marginTop: "33px", width: "328px", height: "65px" }}
        />
        <span className="text-muted" style={{ fontSize: "14px" }}>
          <input
            type="checkbox"
            style={{ marginRight: "11px", marginTop: "15px" }}
          />
          Please check to acknowledge our{" "}
          <a href="#0" style={{ textDecoration: "none" }}>
            Privacy and <span style={{ marginLeft: "25px" }}>TermsPolicy</span>
          </a>
        </span>
        <button className="pay-btn">Pay $3439.00</button>
        <div
          style={{
            textAlign: "center",
            margin: "18.77px 0px 18.77px 0px",
          }}
        >
          <img src={norton} alt="..."></img>
        </div>
      </div>
    </div>
  );
};
