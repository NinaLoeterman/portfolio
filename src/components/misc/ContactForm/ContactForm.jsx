import React from "react";
import { Formik, Form, Field } from "formik";
import TextInput from "../TextInput/TextInput.jsx";
import "./ContactForm.styles.css";
import { SignupSchema } from "./ContactForm.logic";
import Button from "../../UI/Button/Button.jsx";

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
            <div className="contact-form--submit">
              <Button type="submit" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
