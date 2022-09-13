import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twiter: "",
  },
  phoneNumber: ["", ""],
  items: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.resetForm();
};

const validationSchema = yup.object({
  name: yup.string().required("Required!"),
  email: yup.string().email("Invalid Format").required("Required"),
  channel: yup.string().required("Required"),
});
function ItemOne() {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {
          (formikProps) =>{
            console.log('formikProps', formikProps )
            return (
              <Form>
          <h4> Type your Youtube channel</h4>

          <div>
            <Field
              type="text"
              name="name"
              placeholder="Type your Name"
              className="form-control"
            />
            <ErrorMessage name="name">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Type your email"
              className="form-control"
            />
            <ErrorMessage name="email" />
          </div>

          <div>
            <Field
              type="text"
              name="channel"
              placeholder="Type your channel"
              className="form-control"
            />
            <ErrorMessage name="channel" />
          </div>

          {/* ....textarea..... */}
          <div>
            <Field
              as="textarea"
              name="comments"
              placeholder="Type your Comments:"
              className="form-control"
            />
          </div>

          {/* ....Nested Form.... */}
          <div>
            <Field
              type="text"
              name="social.facebook"
              placeholder="Your Facebook Name"
              className="form-control"
            />
          </div>

          <div>
            <Field
              type="text"
              name="social.twiter"
              placeholder="Your Twiter Name"
              className="form-control"
            />
          </div>

          {/* ....Nested Array.... */}
          <div>
            <Field
              type="text"
              name="phoneNumber[0]"
              placeholder="Grameen"
              className="form-control"
            />
          </div>

          <div>
            <Field
              type="text"
              name="phoneNumber[1]"
              placeholder="Robi"
              className="form-control"
            />
          </div>

          {/* ....Dinamic input Arry with FieldArry.... */}
          <FieldArray name="items">
            {(FieldArrayProps) => {
              // console.log(FieldArrayProps);
              const { form, push, remove } = FieldArrayProps;
              const { values } = form;
              const { items } = values;
              return (
                <div>
                  {items.map((items, index) => (
                    <div key={index}>
                      <Field name={`items[${index}]`}  placeholder="Add Items" className="border-2" />
                      {
                        index > 0 && ( <button  type= 'button' onClick={() => remove(index)}>-</button>)
                      }
                      <button type="button" onClick={() => push('')}>+</button>
                     
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
         
            <button type="submit" disabled={!formikProps.isValid} >Submit</button> <br/> 
            <button type="reset">Reset</button>
            
        </Form>
            )
          }
        }
      </Formik>
    </div>
  );
}

export default ItemOne;
