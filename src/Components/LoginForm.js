import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

function LoginForm() {
  const initialValues = {
    userName: "",
    userEmail: "",
    password: "",
  };
  const validationSchema = yup.object({
    userName: yup.string().required("Required!"),
    userEmail: yup.string().email("Invalid Format").required("Required"),
    password: yup.string().required("Required!"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div>
              <Field
                name="userName"
                type="text"
                placeholder="User Name"
                className="border-2 rounded-md px-2 py-2"
              />
            </div>
            <ErrorMessage name="userName" />
            <br />

            <div>
              <Field
                name="userEmail"
                type="email"
                placeholder="User Email"
                className="border-2 rounded-md px-2 py-2"
              />
            </div>
            <ErrorMessage name="userEmail">
                {(props) => <div className="text-red-700">{props}</div>}
            </ErrorMessage>
            
            <br />

            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="border-2 rounded-md px-2 py-2"
              />
            </div>
            <ErrorMessage name="password" />
            <br />
            <button
              type="submit"
              disabled={!formik.isValid}
              className="border bg-purple-500 px-2 py-2 rounded-md text-white"
            >
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
