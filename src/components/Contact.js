import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import "./Contact.css";
import Footer from "./Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Format").required("Required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("Required"),
  message: Yup.string().required("Required"),
});

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cxb7ez7",
        "template_kuhzrxu",
        form.current,
        "UGYtN2xKeIJJHnram"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Navbar></Navbar>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="contact-page">
          <section id="modallength-form">
            <div className="modalcontact-container">
              <h1 className="l-heading">
                <span className="text-primary">Contact</span> Us
              </h1>
              <p>Please fill out the below form to contact us</p>
              <Form ref={form} onSubmit={sendEmail}>
                <div className="modal-group">
                  <label htmlFor="name">NAME</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" className="errormess" />
                </div>
                <div className="modal-group">
                  <label htmlFor="email">E-MAIL</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email" />
                </div>
                <div className="modal-group">
                  <label htmlFor="phone">MOBILE NO</label>
                  <Field type="number" name="phone" id="phone"></Field>
                  <ErrorMessage name="phone" />
                </div>
                <div className="modal-group">
                  <label htmlFor="message">MESSAGE</label>
                  <Field name="message" id="message"></Field>
                  <ErrorMessage name="message" />
                </div>

                <button button type="submit" className="btn" value="Send">
                  SUBMIT
                </button>
              </Form>
            </div>
          </section>
          <section className="contact-text">
            <div>
              <div className="address-title">
                <h1 className="l-heading">
                  <span className="text-primary">ADD</span>RESS
                </h1>
                <p className="testimonial-about bg-primary">
                  914 J B Tower Near Sal Hospital Drive In Road Ahmedabad
                </p>
                <iframe
                  title="map"
                  style={{ width: "100%", height: "300px" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Opp.Sales%20India%20Ahmedabad+(Harekrishna%20Complex)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </Formik>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
