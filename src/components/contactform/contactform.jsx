"use client"
import styles from './styles.module.css'
import { FormInputs, FormTextArea } from '@/UI/formInputs/forminputs';
import { useState } from "react";
export default function ContactForm() {
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { 
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      company: e.target[3].value,
      institutionType: e.target[4].value,
      phone: e.target[5].value,
      message: e.target[6].value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred.");
    } 
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerTitle}>
          <h3 className={styles.title}>Get in touch</h3>
          <p className={styles.pharagraph}>Complete our form and we will contact you</p>
        </div>

        <div className={styles.containerInputsForm}>
          <FormInputs text="First name" placeholder="Susan" type="text" id="FirstName"/>
          <FormInputs text="Last name" placeholder="Parker" type="text" id="LastName" />
          <FormInputs text="Work e-mail address" placeholder="susanparker@company.com" type="email" id="Email" />
          <FormInputs text="Company" placeholder="-" type="text" id="Company" />
          <FormInputs text="Institution Type" placeholder="Select an option" type="dropdown" id="InstitutionType" />
          <FormInputs text="Phone number" placeholder="1122334455" type="text" id="Phone" />
          <FormTextArea text="Your message" placeholder="Write your message here..." id="Message" />
        </div>

        <div className={styles.containerButton}>
          <button type="submit" className={styles.button}>Send</button>
        </div>
      </form>
    </div>
  );
}