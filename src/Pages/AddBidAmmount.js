import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

import Banner from "../Components/Banner";
import Address from "../Components/Address";
const validationSchema = yup.object({
  bidPrice: yup.number("Enter Valid Price").required("Please enter Bid Price"),
  phoneNo: yup
    .string()
    .required("Please enter phone no")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10)
    .max(10, "Please enter only 10 digits"),
  name: yup.string().required("Please enter name"),
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
        <div className="bid-amt-address min-width">
          <Address
            labelValue="JOURNEY DETAILS"
            firstValue={`${formik.values.source} - ${formik.values.destination}`}
            secondValue={`${formik.values.passengers} Persons, ${formik.values.carType}`}
          />
          <button
            onClick={() => props.prev(formik.values)}
            className="edit-btn"
          >
            <b>Edit</b>
          </button>
        </div>
        <hr />
        <div className="add-amount min-width">
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
            error={formik.touched.bidPrice && Boolean(formik.errors.bidPrice)}
            helperText={formik.touched.bidPrice && formik.errors.bidPrice}
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
              error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
              helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              size="small"
              error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
              helperText={formik.touched.phoneNo && formik.errors.phoneNo}
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
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
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
