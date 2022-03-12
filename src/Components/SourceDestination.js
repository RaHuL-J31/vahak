import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, MenuItem, Button } from "@mui/material";

import Banner from "./Banner";

const validationSchema = yup.object({
  source: yup.string().required("Please enter Source"),
  destination: yup.string().required("Please enter Destination"),
  carType: yup.string().required("Please select Cartype"),
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
  useEffect(() => {
    formik.values.carType == "SUV"
      ? (formik.values.passengers = 6)
      : (formik.values.passengers = 5);
  }, [formik.values.carType]);

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
        <div className="bid1 min-width">
          <div className="location">
            <TextField
              fullWidth
              id="source"
              name="source"
              label="Source Location*"
              value={formik.values.source}
              onChange={formik.handleChange}
              size="small"
              error={formik.touched.source && Boolean(formik.errors.source)}
              helperText={formik.touched.source && formik.errors.source}
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
              error={
                formik.touched.destination && Boolean(formik.errors.destination)
              }
              helperText={
                formik.touched.destination && formik.errors.destination
              }
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
              error={formik.touched.carType && Boolean(formik.errors.carType)}
              helperText={formik.touched.carType && formik.errors.carType}
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
              label="Number of Travellers"
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
