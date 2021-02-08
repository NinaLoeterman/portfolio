import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "../TextInput/TextInput.jsx";
import "./ContactForm.styles.css";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'enter you name')
    .max(100, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'leave a message')
    .max(1000, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ fullName: "", email: "", message: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="fullName"
              component={TextInput}
              placeholder="full name"
            />
            <Field type="email" placeholder="email" name="email" component={TextInput} />
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
