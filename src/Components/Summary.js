import React, { useState } from "react";
import { useFormik, useFormikContext, Field } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";

import Banner from "./Banner";
import Address from "./Address";

const validationSchema = yup.object({
  source: yup.string("Enter your email").required("Email is required"),
});

const Summary = (props) => {
  const formik = useFormik({
    initialValues: props.data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.next(values, true);
      alert("Bid Placed Sucessfully");
      // alert(JSON.stringify(values, null, 2));
      window.location.href = "/";
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
        <div className="min-width">
          <Button
            id="btn-verify"
            type="submit"
            variant="contained"
            fullWidth={true}
          >
            Submit Bid
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
