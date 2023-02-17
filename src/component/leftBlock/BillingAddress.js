import { MenuItem, TextField } from "@mui/material";
// import clsx from 'clsx';
import React from "react";
import "../../style/LeftBlock.css";
export const BillingAddress = () => {
  // style object for mui component of textfield
  const TextFieldsStyle = {
    bigTextFields: {
      width: "526px",
      height: "44px",
      marginTop: "30px"
    },
    smallTextFields: {
      width: "255px",
      height: "44px",
      marginTop: "30px"
    },
    marginRight:{
      marginRight:"16px"
    }
  };
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
          sx={{ width: "255px", height: "44px", marginRight: "16px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Last Name"
          value="Driver"
          sx={{ width: "255px", height: "44px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Email"
          value="useranme@gmail.com"
          sx={TextFieldsStyle.bigTextFields}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Street Address"
          value=" "
          sx={TextFieldsStyle.bigTextFields}
        />
        <TextField
          id="outlined-uncontrolled"
          value=" "
          sx={TextFieldsStyle.bigTextFields}
        />
        {/*-------------state province----------------- */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value="California"
          sx={{
            height: "44px",
            width: "255px",
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
          sx={TextFieldsStyle.smallTextFields}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Zip/Postal code"
          value="22434"
          sx={{
            width: "255px",
            height: "44px",
            marginTop: "30px",
            marginRight: "16px",
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Phone"
          value="+ 123 456 789 111 "
          sx={TextFieldsStyle.smallTextFields}
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
