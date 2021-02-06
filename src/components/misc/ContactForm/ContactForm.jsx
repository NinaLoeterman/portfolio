import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "../TextInput/TextInput.jsx";
import "./ContactForm.styles.css";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ fullName: "", email: "", message: "" }}
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
            <Field
              type="text"
              name="fullName"
              component={TextInput}
              placeholder="full name"
            />
            <Field type="email" name="email" component={TextInput} />
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
