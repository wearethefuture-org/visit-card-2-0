import React from 'react';
import './ContactForm.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactForm = () => (
  <div className="contact-form">
    <form>
      <Row xs={1} sm={2}>
        <Col className="contact-form__inputs-block">
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="EMAIL" />
        </Col>
        <Col>
          <textarea rows="5" placeholder="YOUR MESSAGE"></textarea>
        </Col>
      </Row>
    </form>
    <button className="btn">Send message</button>
  </div>
);

export default ContactForm;
