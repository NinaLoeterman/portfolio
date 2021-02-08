import React from "react";
import { Formik, Form, Field } from "formik";
import TextInput from "../TextInput/TextInput.jsx";
import "./ContactForm.styles.css";
import { SignupSchema } from "./ContactForm.logic";

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
            <Field
              type="email"
              placeholder="email"
              name="email"
              component={TextInput}
            />
            <Field
              as="textarea"
              placeholder="leave me a message"
              type={"textarea"}
              name="message"
              component={TextInput}
            />
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
