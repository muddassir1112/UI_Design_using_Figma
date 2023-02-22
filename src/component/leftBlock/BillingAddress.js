import { MenuItem, TextField } from "@mui/material";
// import clsx from 'clsx';
import React from "react";
import "../../style/LeftBlock.css";
export const BillingAddress = () => {
  //array for select box to display
  const currencies = [
    {
      value: "New York",
      label: "New York",
    },
  ];

  return (
    <div className="card shadow-card left-card-block">
      <p className="left-card-block__heading">Billing Address</p>
      <div className="left-formWrapper" style={{ marginTop: "20px" }}>
        {/* textfields of form */}
        <TextField
          id="outlined-controlled"
          label="First Name"
          value="Alex"
          className="smallTextFields"
          sx={{ marginRight: "16px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Last Name"
          value="Driver"
          className="smallTextFields"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Email"
          value="useranme@gmail.com"
          className="bigTextFields"
          sx={{ marginTop: "30px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Street Address"
          value=" "
          className="bigTextFields"
          sx={{ marginTop: "30px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          value=" "
          className="bigTextFields"
          sx={{ marginTop: "30px" }}
        />
        {/*-------------state province----------------- */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value="California"
          className="smallTextFields"
          sx={{
            marginTop: "30px",
            marginRight: "16px",
          }}
        >
          <MenuItem value="California">California</MenuItem>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-uncontrolled"
          label="City"
          value=" "
          className="smallTextFields"
          sx={{ marginTop: "30px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Zip/Postal code"
          value="22434"
          className="smallTextFields"
          sx={{
            marginTop: "30px",
            marginRight: "16px",
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Phone"
          value="+ 123 456 789 111 "
          className="smallTextFields"
          sx={{ marginTop: "30px" }}
        />
        {/* Check Radios */}
        <div
          style={{
            margin: "22px 0px 23px 0px",
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          <p>
            <input type="checkbox" style={{ marginRight: "8px" }} />
            My billing and shipping address are the same
          </p>
          <p>
            <input type="checkbox" style={{ marginRight: "8px" }} />
            Create and account for later use
          </p>
        </div>
      </div>
    </div>
  );
};
