import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import { ToastContainer } from 'react-toastify';
import {RegistrationRequest} from '../apiServices/Api-services'
import { useNavigate } from "react-router-dom";
import { successsToast } from "../helperClass/FormHelper";



function ItemTwo() {
  const navigate = useNavigate()
  const initialValues = {
    name: "",
    brand: "",
    qty: "",
  };
  
  const onSubmit =async (values, onSubmitProps) => {
    console.log(values);
    const {name, brand, qty}= values;
    onSubmitProps.resetForm();
    await RegistrationRequest(name, brand, qty)
    .then((result)=>{
      if(result==true){
       navigate('/')
       successsToast('Success')
      }
    })
  };
  
  const validationSchema = yup.object({
    name: yup.string().required("Required!"),
    brand: yup.string().required("Required"),
    qty: yup.number(),
  });
  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="border-2 px-2 py-2 rounded-md"
            />
            <ErrorMessage name="name">
              {(rcvErrorParam) => (
                <div className="text-red-600">{rcvErrorParam}</div>
              )}
            </ErrorMessage>
          </div>
          <br />
          
          <div>
            <Field
              type="text"
              name="brand"
              placeholder="Brand"
              className="border-2 px-2 py-2 rounded-md"
            />
          </div>
          <ErrorMessage name="brand"  />
          <br />
          <div>
            <Field
              type="text"
              name="qty"
              placeholder="Qty"
              className="border-2 px-2 py-2 rounded-md"
            />
          </div>
          <ErrorMessage name="qty"  />
          <br /> <br />
          <button
            type="submit"
            className="bg-purple-800 border-2 rounded-md px-2 py-2 text-white"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </Fragment>
  );
}

export default ItemTwo;
