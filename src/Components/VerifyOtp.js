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

const VerifyOtp = (props) => {
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
        <div className="bid-amt-address">
          <Address
            labelValue="BID Details"
            firstValue={formik.values.phoneNo}
            secondValue={formik.values.name}
            thirdValue={formik.values.remarks}
          />
          <div id="priceId" className="edit-btn">
            ₹{formik.values.bidPrice}
          </div>
        </div>
        <hr />
        <div className="otp-div min-width">
          <span>
            We've sent OTP to your mobile number.Pkease enter it below to submit
            your bid <b>{formik.values.phoneNo}</b>{" "}
            <button
              onClick={() => props.prev(formik.values)}
              className="edit-btn"
            >
              Edit
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;
