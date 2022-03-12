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
  const handle = (formik) => {
    props.prev(formik);
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Banner step={props.currentStep + 1} />
        <div className="bid-amt-address">
          <Address
            labelValue="JOURNEY DETAILS"
            firstValue={`${formik.values.source} - ${formik.values.destination}`}
            secondValue={`${formik.values.passengers} persons,${formik.values.cartype}`}
          />
          <button
            onClick={() => props.prev(formik.values)}
            className="edit-btn"
          >
            Edit
          </button>
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
            value={formik.values.bidPrice}
            onChange={formik.handleChange}
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
        <div className="add-address min-width">
          <div>
            <TextField
              fullWidth
              id="phoneNo"
              name="phoneNo"
              label="Enter your 10 digits Mobile number"
              value={formik.values.phoneNo}
              onChange={formik.handleChange}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Enter your Name*"
              value={formik.values.name}
              onChange={formik.handleChange}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="remarks"
              name="remarks"
              label="Enter Remarks(optional)"
              value={formik.values.remarks}
              onChange={formik.handleChange}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <Button
            id="btn-verify"
            type="submit"
            variant="contained"
            fullWidth={true}
          >
            Verify via OTP
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddBidAmmount;
