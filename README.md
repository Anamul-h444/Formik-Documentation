# Formik Documentation

1. Create Form by formik.

- text
- email
- date
- textarea
- radio
- checkbox
- select/dropdown
- nested array
- nested object
- field array

2. Receive Data by onSubmit method.
3. Validation by yup libray.
4. Reset Form after submit.
5. Disable submit button when data is submiting.
6. Disable submit button when validation is error.

# System of create form with formik

```js
<Formik>
    (formikProps)=>{
        <Field type=''/>
        <button type='submit'>Submit</button>
    }
</Formik>
```

# Process of Receive Data from input field

- inititialValue মেথড নির্ধারণ করতে হবে যার ভেল্যু হবে ইমটি। ইনপুট ফিল্ডের নাম এবং inititialValue এর প্রপার্টির নাম একই হতে হবে।
- সাবমিট বাটনে type='submit' লিখতে হবে।
- onSubmit মেথড তৈরী করতে হবে যাহার প্যারামিটার inititialValue থেকে সকল ডাটা রিসিভি করবে। এই মেথডকে Formik এর এট্রিবিউটে পাস করতে হবে।

# Receive data from Nested object and array

```js
inittialValues:{
    social: {
            facebook: "",
            twiter: "",
  },
  phoneNumber: ["", ""]
}

In Jsx:
<div>
{/* ....Nested object.... */}
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
```

# Validation with yup

- Install Yup as - npm install yup
- import \* as yup from "yup";
- Create validationSchema method and write validate as same name as inititialValue;
- pass validationSchema in formik attribute.
- collect validation from below link:
  https://www.codegrepper.com/

```
const validationSchema = yup.object({
    userName: yup.string().required("Required!"),
    userEmail: yup.string().email("Invalid Format").required("Required"),
    password: yup.string().required("Required!"),
  });
```

# Showing and apply css in validation

- import ErrorMessage form formik.
- write ErrorMessage in input field as below with pass same name as validationSchema :

```js
<div>
  <label htmlFor="email">Email</label> <br />
  <Field type="email" name="email" /> <br />
  <ErrorMessage name="email" />
</div>
```

- For apply css in error message showing

```js
<ErrorMessage name="userEmail">
  {(props) => <div className="text-red-700">{props}</div>}
</ErrorMessage>
```

# radio button

- প্রথমেই ইমেইল ইনপুট হচ্ছে।
- কনটাক্ট অপশন নির্বাচন করার সময় যদি ইউজার ইমেইল নির্বাচন করে তাহলে ফোন নাম্বার রিকোয়ার হবেনা। কিন্তু যদি ফোন নির্বাচন করে ফোন নাম্বার রিকোয়ার হবে।
- value হল যদি ঐ অপশনকে নির্বাচন করে তাহলে name ফিল্ড এ ভেল্যু হিসেবে value এর নাম প্রিন্ট হবে। অর্থাৎ সকল অপশনের name ফিল্ড একই থাকবে কিন্তু ভেল্যু এর নাম স্ব স্ব থাকবে।

### Validation:

- modeOfContact অবশ্যই নির্বাচন করতে হবে।
- modeOfContact এর ভেল্যু যদি phone এর ভেল্যুর সাথে মিলে যায় তাহলে phone রিকোয়ার হবে।

```js
 const initialValues = {
        email:'',
        modeOfContact:'',
        phone:''
    };
    const validationSchema = yup.object({
        email:yup.string().email("Invalid Format!").required('Required!'),

        modeOfContact: yup.string().required('Required!'),
         phone:yup.string().when('modeOfContact', {
         is:'mocPhone',
         then:yup.string().required('Required!')
        })
    });

    In Jsx:
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

```

# Checkbox

- রেডিও বাটন এবং চেকবক্সের মধ্যে পার্থক্য হল রেডিও বাটনে কন্ডিশনের উপর ভিত্তি করে শুধু একটি অপশন নির্বাচন করা যায়। কিন্তু চেক বক্সে একাধিক অপশন নির্বাচন করা যায়।
- এখানে ইউজারের স্কিল সিলেক্ট করতে হবে। সে একাধিক স্কিল নির্বাচন করতে পারবে যাহা skills এর মধ্যে এ্যারে আকারে জমা হবে।
- সুতরাং প্রত্যেকটি অপশনের নাম একই হবে কিন্তু ভেল্যু হবে স্ব স্ব।

```js
const initialValue:{
    skills:''
};
const validationSchema:{
    skills:yup.string().required('Required')
};
In Jsx:
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
```

# Select/dropdown

- ইহা রেডিও বাটনের মত শুধূমাত্র একটি অপশন নির্বাচন করা যায়।
- type এর পরিবর্তে as লিখতে হয়।

```js
<div>
  <label htmlFor='selectCourse'>Select Your Course </label> <br/>
  <Field as='select' name='selectCourse' className='border-2 px-2 py-2 rounded-md'>
    <option value='react' >React</option>
    <option value='angular'>Angualr</option>
    <option value='vue'>Vue</option>
  </Field>
</div>
<ErrorMessage name='selectCourse' />
```

# Textarea

- type এর পরিবর্তে as লিখতে হয়।

```js
<div>
  <label htmlFor="adress">Adress</label> <br />
  <Field
    as="textarea"
    rows="2"
    cols="19"
    name="adress"
    className="border-2 px-2 py-2 rounded-md"
  />
  <ErrorMessage name="adress" />
</div>
```

# FieldArray

- ইহার মাধ্যমে ডাইনামিক্যালি এ্যারেরে আইটেম এ্যাড/রিমোভ করা যায়।
- এর মাধ্যমে FieldArrayProps এর values থেকে আইটেমকে ধরে ম্যাপিং করে Nested Array এর মত ইনডেক্সিং করে name প্রপার্টি লিখতে হবে।
- দুইটি বাটন থাকবে একটি বাটনে ক্লিক এর মাধ্যমে আইটেম ডিলিট হবে অন্যটি ক্লিক করে আইটেম এ্যাড করা যাবে।
- প্রথম অবস্থায় যখন শুধূ একটি আইটেম থাকবে তথা ইনডেক্স ০ এর কম হবে তখন শুধু এ্যাড বাটনটি দেখাবে।

```js
const initialValue ={
  phone =['']
}
{/* ....Dinamic input Arry with FieldArry.... */}
          <FieldArray name="items">
            {(FieldArrayProps) => {
              // console.log(FieldArrayProps);
              const { form, push, remove } = FieldArrayProps;
              const { values } = form;
              const { phone } = values;
              return (
                <div>
                  {items.map((phone, index) => (
                    <div key={index}>
                      <Field name={`phone[${index}]`}  placeholder="Add phone" className="border-2" />
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
```

# Reset Form

```js
const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.resetForm();
};
```

# Disable submit button when validation fail
- অবশ্যই ফরমিক প্রপস এর ভিতর সমস্ত ফিল্ড লিখতে হবে।
```js
<button
  type="submit"
  disabled={!formikProps.isValid}
  className="border bg-purple-500 px-2 py-2 rounded-md text-white"
>
  Login
</button>
```
# Disable submit button when submitting
- অবশ্যই ফরমিক প্রপস এর ভিতর সমস্ত ফিল্ড লিখতে হবে।
```js
<button
  type="submit"
  disabled={!formikProps.isSubmitting}
  className="border bg-purple-500 px-2 py-2 rounded-md text-white"
>
  Login
</button>
```
