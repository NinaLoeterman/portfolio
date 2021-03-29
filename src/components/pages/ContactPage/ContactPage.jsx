import React, { useState } from "react";
import ContactForm from "../../misc/ContactForm/ContactForm";
import MessageSuccessPage from "../../misc/MessageSuccessPage/MessageSuccessPage";
import PageTitle from "../../UI/PageTitle/PageTitle";
import "./ContactPage.styles.css";

const ContactPage = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  return (
    <div className="contact-page">
      {!isMessageSent ? (
        <>
          <PageTitle title="be in touch" />
          <ContactForm setIsMessageSent={setIsMessageSent} />
        </>
      ) : (
        <MessageSuccessPage />
      )}
    </div>
  );
};

export default ContactPage;
