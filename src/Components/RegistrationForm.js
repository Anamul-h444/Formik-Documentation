import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";

import React from "react";

function RegistrationForm() {
    const initialValues = {
        email:'',
        password:'',
        confirmPassword:'',
        modeOfContact:'',
        phone:''
    };
    const validationSchema = yup.object({
        email:yup.string().email("Invalid Format!").required('Required!'),
        
        password: yup
         .string()
         .required('Please Enter your password')
         .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),

        confirmPassword:yup.string()
         .test('passwords-match', 'Passwords must match', function(value){
          return this.parent.password === value
          }),

        modeOfContact: yup.string().required('Required!'),
         phone:yup.string().when('modeOfContact', {
         is:'mocPhone',
         then:yup.string().required('Required!')
        })
    })
    const onSubmit = (values)=>{
        console.log(values)
    }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formik) => {
        return (
          <Form>
            <div>
              <label htmlFor="email">Email</label> <br/>
              <Field type='email' name='email' className='border-2 px-2 py-2 rounded-md' /> <br/>
              <ErrorMessage name="email" />
            </div>

            <div>
              <label htmlFor="password">Password</label> <br/>
              <Field type='password' name='password' className='border-2 px-2 py-2 rounded-md' /> <br/>
              <ErrorMessage name="password" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirmed Password</label> <br/>
              <Field type='password' name='confirmPassword' className='border-2 px-2 py-2 rounded-md' /> <br/>
              <ErrorMessage name="confirmPassword" />
            </div>

            <div>
                <label htmlFor='moc'>Choose Contact option:</label> <br/>
                             
               <Field type='radio' value='mocPhone' name='modeOfContact' />
                <label htmlFor="mocPhone" className="ml-2">Phone Number</label><br></br>

                <Field type='radio' value='mocEmail' name='modeOfContact' />
                <label htmlFor="mocEmail" className="ml-2">Email</label><br></br>
                <ErrorMessage name="modeOfContact" />          
            </div>

            <div className="pt-2">
              <label htmlFor="phone">Phone Number</label> <br/>
              <Field type='text' name='phone' className='border-2 px-2 py-2 rounded-md' /> <br/>
              <ErrorMessage name="phone" />
            </div>
            <button type="submit" className="px-2 py-2 mt-2 text-white bg-purple-900 rounded-md" >Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
