import React from "react";
import { Formik, Form, Field } from "formik";
import TextInput from "../TextInput/TextInput.jsx";
import "./ContactForm.styles.css";
import { SignupSchema } from "./ContactForm.logic";
import Button from "../../UI/Button/Button.jsx";

const ContactForm = ({ setIsMessageSent }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setIsMessageSent(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="name"
              component={TextInput}
              placeholder="name"
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
              <Button type="submit" icon="send" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
