import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  MenuItem,
  Button,
  Input,
  InputAdornment,
} from "@mui/material";

import Banner from "./Banner";
import Address from "./Address";
const validationSchema = yup.object({
  source: yup.string("Enter your email").required("Email is required"),
});
const AddBidAmmount = (props) => {
  const formik = useFormik({
    initialValues: props.data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.next(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Banner step={props.currentStep + 1} />
        <div className="bid-amt-address">
          <Address
            source={formik.values.source}
            destination={formik.values.destination}
            passengers={formik.values.passengers}
            cartype={formik.values.carType}
          />
          <button className="edit-btn">Edit</button>
        </div>
        <hr />
        <div className="add-amount">
          <span>₹</span>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="bidPrice"
            name="bidPrice"
            placeholder="0"
            InputProps={{
              // startAdornment: (
              //   <InputAdornment id="currency" position="start">
              //     ₹
              //   </InputAdornment>
              // ),
              disableUnderline: true,
              style: { fontSize: 50 },
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default AddBidAmmount;
