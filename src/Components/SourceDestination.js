import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, MenuItem, Button } from "@mui/material";

import Banner from "./Banner";

const validationSchema = yup.object({
  source: yup.string("Enter your email").required("Email is required"),
});

const SourceDestination = (props) => {
  const formik = useFormik({
    initialValues: props.data,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      props.next(values);
    },
  });

  //   const handleChange = (event) => {
  //     event.preventDefault();
  //     setCarTypeSelected(event.target.value);
  //     if (event.target.value === "SUV") {
  //       setPassengerCount(6);
  //     } else {
  //       setPassengerCount(5);
  //     }
  //   };
  //   const handleSubmit = (values) => {
  //     alert(values);
  //     console.log(values);
  //     props.next(values);
  //   };

  const carOptions = [
    {
      value: "HatchBack",
      label: "HatchBack",
    },
    {
      value: "Sedan",
      label: "Sedan",
    },
    {
      value: "SUV",
      label: "SUV",
    },
  ];
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Banner step={props.currentStep + 1} />
        <div className="bid1">
          <div className="location">
            <TextField
              fullWidth
              id="source"
              name="source"
              label="Source Location*"
              value={formik.values.source}
              onChange={formik.handleChange}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              fullWidth
              id="destination"
              name="destination"
              label="Source Destination*"
              value={formik.values.destination}
              onChange={formik.handleChange}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="car-Type">
            <TextField
              name="carType"
              fullWidth
              id="carType"
              select
              label="Enter Car Type"
              value={formik.values.carType}
              onChange={formik.handleChange}
            >
              {carOptions.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="no-of-travellers">
            <TextField
              fullWidth
              id="passengers"
              name="passengers"
              label="Number of Travellers*"
              value={formik.values.passengers}
              onChange={formik.handleChange}
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="btn">
            <Button
              id="btn-bid"
              type="submit"
              variant="contained"
              fullWidth={true}
            >
              Enter Bid Details
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SourceDestination;
