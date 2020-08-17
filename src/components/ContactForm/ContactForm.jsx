import React from 'react';
import './ContactForm.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import Axios from 'axios';

const baseUrl = window.location.origin;

const ContactForm = () => (
  <div className="contact-form">
    <Formik
      initialValues={{ email: '', name: '', message: '' }}
      onSubmit={(values, { setSubmitting }) => {
        Axios
          .post(baseUrl + '/send', values)
          .finally(() => { setSubmitting(false); })
      }}
    >
      {({
        handleSubmit,
        isSubmitting,
        handleBlur,
        handleChange,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Row xs={1} sm={2}>
            <Col className="contact-form__inputs-block">
              <input name="name" onChange={handleChange} value={values.name} type="text" placeholder="NAME" />
              <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" placeholder="EMAIL" />
            </Col>
            <Col>
              <textarea name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} rows="5" placeholder="YOUR MESSAGE"></textarea>
            </Col>
          </Row>
          <button disabled={isSubmitting} type="submit" className="btn">Send message</button>
        </form>
      )}
    </Formik>
  </div>
);

export default ContactForm;
