import React from "react";
import { useFormikContext, Formik, Form, Field } from "formik";
import VerifyOtp from "./VerifyOtp";

const AutoSubmitToken = ({ data }) => {
  // Grab values and submitForm from context
  console.log(data);
  const { values, submitForm } = useFormikContext({ data });
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    if (values.token.length === 6) {
      console.log("llllll", values);
      submitForm();
    }
  }, [values, submitForm]);
  return null;
};

const VerifyOtp1 = (props) => (
  <div>
    <h1>2-step Verification</h1>
    <p>Please enter the 6 digit code sent to your device</p>
    <Formik
      initialValues={props.data}
      validate={(values) => {
        const errors = {};
        if (values.token.length < 5) {
          errors.token = "Invalid code. Too short.";
        }

        return errors;
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Field name="otp" type="text" />
        <AutoSubmitToken data={props.data} />
      </Form>
    </Formik>
  </div>
);

export default VerifyOtp1;
