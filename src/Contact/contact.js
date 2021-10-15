import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Row, Col, Input, Button } from "antd";
import {
  UserOutlined,
  ClockCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import Cap from "../image/cap.jpg";
import FaceBook from "../image/fb.png";
import LinkedIn from "../image/in.png";
import Twitter from "../image/twitter1.png";
import styles from "./index.module.scss";
const { TextArea } = Input;

function Contact() {
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [department, setDepartment] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9p7tqzr",
        "template_e75cly7",
        e.target,
        "user_dH7Lvzi7xFb33xQyNso6L"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setContact("");
          setDepartment("");
          setEmail("");
          setDescription("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <Row>
          <Col xs={24} lg={12} className={styles.infoDetails}>
            <div className={styles.innerText}>
              <Col md={24} className={styles.title}>
                <h2>
                  <UserOutlined /> Contact
                </h2>
                <ul className={styles.info}>
                  <li>info@loopcodesolution.com</li>
                  <li>support@loopcodesolution.com</li>
                  <li>+91 99249 44232</li>
                </ul>
              </Col>
              <Col md={24} className={styles.title}>
                <h2>
                  <img src={Cap} alt="graduation cap" /> Career
                </h2>
                <ul className={styles.info}>
                  <li>carrer@loopcodesolution.com</li>
                  <li>+91 99249 44232</li>
                </ul>
              </Col>
              <Col md={24} className={styles.title}>
                <h2>
                  <ClockCircleOutlined /> Career
                </h2>
                <ul className={styles.info}>
                  <li>9:30 AM - 6:30 PM</li>
                </ul>
              </Col>
              <Col md={24} className={styles.title}>
                <ul className={styles.social}>
                  <li>
                    <a className={styles.sFacebook}>
                      <img src={FaceBook} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a className={styles.sLinkedIn}>
                      <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                  </li>
                  <li>
                    <a className={styles.sTwitter}>
                      <img src={Twitter} alt="Twitter" />
                    </a>
                  </li>
                </ul>
              </Col>
            </div>
          </Col>
          <Col xs={24} lg={12} className={styles.formColumn}>
            <div className={styles.secTitle}>
              <h2>Say hello to us!</h2>
              <div className={styles.decText}>
                Let's talk business or just have a coffee. We would love to hear
                from you!
              </div>
            </div>
            <div>
              <form onSubmit={sendEmail} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Contact number"
                    name="contact_number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Department"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Emaill Address"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <TextArea
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Button htmlType="submit">
                    SUBMIT <RightCircleOutlined />
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
