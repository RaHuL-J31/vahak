import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// const StepOneValidationSchema = Yup.object({
//   firstName: Yup.string().required().label("This is Req"),
//   lastName: Yup.string().required(),
// });
const StepTwoValidationSchema = Yup.object({
  email: Yup.string().required().email().label("This is Req"),
  password: Yup.string().required(),
});
const SourceDestination = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <Formik
      validationSchema={StepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <p>Emailk</p>
          <Field name="email" />
          <ErrorMessage name="email" />

          <p>Password</p>
          <Field name="password" />
          <ErrorMessage name="password" />

          <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SourceDestination;
