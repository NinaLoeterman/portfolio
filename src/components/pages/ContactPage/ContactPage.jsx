import React from "react";
import ContactForm from "../../misc/ContactForm/ContactForm";
import PageTitle from "../../UI/PageTitle/PageTitle";
import './ContactPage.styles.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <PageTitle title="be in touch" />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
