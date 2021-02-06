import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from '../TextInput/TextInput.jsx';

const ContactForm = () => {
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="firstName" component={TextInput}/>
            <Field type="text" name="lastName" component={TextInput}/>
            <Field type="email" name="email" component={TextInput}/>
            <ErrorMessage name="email" component="div" />
            <Field as="textarea" name="message" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
