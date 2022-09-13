import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from "yup";

function EnrollmentForm() {
    const initialValues ={
        name:'',
        email:'',
        password:'',
        adress:'',
        selectCourse:'',
        skills:''
    };
    const validationSchema = yup.object({
        name:yup.string().required('Required'),
        email:yup.string().email('Invalid Email Format').required('Required'),
        password:yup.string().required('Required'),
        adress:yup.string().required('Required'),
        selectCourse:yup.string().required('Required'),
        skills:yup.string().required('Required')
    })
    const onSubmit = values =>{
        console.log(values)
    }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {
            props => {
                return (
                    <Form>
                        <h4>Course Enroll Form</h4>
                        <div>
                            <label htmlFor='name'>User Name</label> <br/>
                            <Field
                                type='text'
                                name='name'
                                className='border-2 px-2 py-2 rounded-md' 
                            />
                            <ErrorMessage name='name' />
                        </div>
                        <div>
                            <label htmlFor='email'>User Email</label> <br/>
                            <Field
                                type='email'
                                name='email'
                                className='border-2 px-2 py-2 rounded-md' 
                            />
                             <ErrorMessage name='email' />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label> <br/>
                            <Field
                                type='password'
                                name='password'
                                className='border-2 px-2 py-2 rounded-md' 
                            />
                             <ErrorMessage name='password' />
                        </div>
                        <div>
                            <label htmlFor='adress'>Adress</label> <br/>
                            <Field
                                as='textarea'
                                rows='2'
                                cols='19'
                                name='adress'
                                className='border-2 px-2 py-2 rounded-md' 
                            />
                             <ErrorMessage name='adress' />
                        </div>
                        <div>
                           <label htmlFor='selectCourse'>Select Your Course </label> <br/> 
                           <Field as='select' name='selectCourse' className='border-2 px-2 py-2 rounded-md'> 
                                <option value='react' >React</option>
                                <option value='angular'>Angualr</option>
                                <option value='vue'>Vue</option>
                           </Field>
                        </div>
                        <ErrorMessage name='selectCourse' />
                        <div>
                            <label htmlFor='selectSkills'>Select Your Skills</label> <br/>
                           <div className='space-x-4 '>
                           <label> 
                            <Field type='checkbox' name='skills' value='html' className='mr-1' /> HTML
                            </label>
                            <label> 
                            <Field type='checkbox' name='skills' value='css' className='mr-1' /> CSS
                            </label>
                            <label> 
                            <Field type='checkbox' name='skills' value='javascript' className='mr-1' /> JavaScript
                            </label>
                           </div>
                           <ErrorMessage name='skills' />
                        </div>
                        <div>
                            <label htmlFor='date'>Date</label> <br/>
                            <Field
                                type='date'
                                name='date'
                                className='border-2 px-2 py-2 rounded-md' 
                            />
                             <ErrorMessage name='date' />
                        </div>
                        <button
                         type='submit'
                         className='bg-purple-600 px-2 py-2 rounded-md mt-2 text-white' >Enroll
                         </button>
                    </Form>
                )
            }
        }
    </Formik>
  )
}

export default EnrollmentForm