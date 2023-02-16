import { MenuItem, TextField } from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles'
import React from "react";
import "../style/LeftBlock.css";
// const useStyles = makeStyles({
//   bigTextFields: {
//     width: "256px",
//     height: "44px",
//     marginTop: "30px",
//   },
// });
export const BillingAddress = () => {
  //   const classes = useStyles();
  const currencies = [
    {
      value: "New York",
      label: "New York",
    },
  ];

  return (
    <div className="card shadow left-card-block" style={{ height: "567px" }}>
      <p className="left-card-block__heading">Billing Address</p>
      <div className="left-formWrapper" style={{ marginTop: "20px" }}>
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
          // className={classes.bigTextFields}
          sx={{ width: "526px", height: "44px", marginTop: "30px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Street Address"
          value=" "
          sx={{ width: "526px", height: "44px", marginTop: "30px" }}
        />
        <TextField
          id="outlined-uncontrolled"
          value=" "
          sx={{ width: "526px", height: "44px", marginTop: "20px" }}
        />
        {/* state province */}
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
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
          sx={{ width: "255px", height: "44px", marginTop: "30px" }}
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
          sx={{ width: "255px", height: "44px", marginTop: "30px" }}
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
