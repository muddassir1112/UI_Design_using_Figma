import React from "react";
import PayPal from "../assets/PayPal.png";
import cards from "../assets/cards.png";
import { TextField } from "@mui/material";
import lock from "../assets/Frame 1507.png";

export const PaymentMethod = () => {
  return (
    <div className="card shadow left-card-block" style={{ height: "454px",marginBottom:"15px" }}>
      <p className="left-card-block__heading">Payment Method</p>
      {/* ------- */}
      <div
        className="tracking-div"
        style={{ border: "1px solid #B2BCCA", margin: "15px 0px 15px 0px" }}
      >
        <input
          type="radio"
          style={{
            marginRight: "8px",
            marginLeft: "19px",
            marginTop: "18px",
            height: "14px",
            width: "14px",
          }}
        />
        <span
          className="fw-bold"
          style={{ fontSize: "16px", marginTop: "15px" }}
        >
          PayPal
        </span>
        <div className="tracking-div-content">
          <span className="text-muted">
            You will be redirected to the PayPal website after
          </span>
          <p className="text-muted">submitting your order</p>
        </div>
        <img
          src={PayPal}
          alt="..."
          style={{
            height: "30px",
            width: "42.5px",
            marginRight: "16px",
            marginTop: "8px",
          }}
        />
      </div>
      {/* ----------------------- */}
      <div
        className="pay-with-credit-div"
        // style={{
        //   background: "#e8f0fb",
        //   border: "1px solid #1660CF",
        //   margin: "15px 0px 30px 0px",
        // }}
      >
        <input
          type="radio"
          style={{
            margin: "18px 8px 0px 19px",
            height: "14px",
            width: "14px",
          }}
        />
        <span
          className="fw-bold"
          style={{ fontSize: "16px", marginTop: "15px" }}
        >
          Pay With Credit Card
        </span>
        <span className="float-end">
          <img
            src={cards}
            alt="..."
            style={{
              marginLeft: "131px",
              marginRight: "16px",
              marginTop: "8px",
            }}
          />
        </span>
        <div style={{ margin: "35px 19px 0px 23px" }}>
          <TextField
            id="outlined-controlled"
            label="Card Number"
            value="1234 5678 9101 3556"
            sx={{ width: "255px", height: "44px", marginRight: "16px" }}
          />
          <TextField
            id="outlined-uncontrolled"
            label="Expiration Date"
            value="MM//YY"
            sx={{ width: "213px", height: "44px" }}
          />
          <TextField
            id="outlined-uncontrolled"
            label="Card Security Code"
            value="***"
            sx={{
              width: "255px",
              height: "44px",
              marginTop: "30px",
              marginRight: "16px",
            }}
          />
          <div style={{ marginTop: "42px", display: "inline-flex" }}>
            <span className="text-primary" style={{ fontSize: "12px" }}>
              What is this?
            </span>
          </div>
        </div>
      </div>
      <div style={{marginTop:"20px"}}>
            <img src={lock} alt="..." style={{marginRight:"10px"}}></img>
            <span className="text-muted" style={{fontSize:"12px"}}>We protect your payment information using encryption to provide bank-level security.</span>
          </div>
    </div>
  );
};
