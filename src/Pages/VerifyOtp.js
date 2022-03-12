import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

import Banner from "../Components/Banner";
import Address from "../Components/Address";

const validationSchema = yup.object({
  source: yup.string("Enter your email").required("Email is required"),
});

const VerifyOtp = (props) => {
  const formik = useFormik({
    initialValues: props.data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.otp === "1234" ? props.next(values) : alert("Enter valid OTP");
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Banner step={props.currentStep + 1} />
        <div className="bid-amt-address min-width">
          <Address
            labelValue="JOURNEY DETAILS"
            firstValue={`${formik.values.source} - ${formik.values.destination}`}
            secondValue={`${formik.values.passengers} persons,${formik.values.carType}`}
          />
          <button
            onClick={() => props.prev(formik.values)}
            className="edit-btn"
          >
            Edit
          </button>
        </div>
        <hr />
        <div className="bid-amt-address min-width">
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
            We've sent OTP to your mobile number.Please enter it below to submit
            your bid <b>{formik.values.phoneNo}</b>{" "}
            <button
              onClick={() => props.prev(formik.values)}
              className="edit-btn"
            >
              Edit
            </button>
          </span>
        </div>
        <div className="add-otp min-width">
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            id="otp"
            name="otp"
            placeholder="0000"
            value={formik.values.otp}
            onChange={formik.handleChange}
            InputProps={{
              disableUnderline: true,
              style: { fontSize: 50 },
            }}
          />
        </div>
        <div className="min-width">
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

export default VerifyOtp;
