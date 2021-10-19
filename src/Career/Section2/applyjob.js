import React, { useState } from "react";
import { Row, Col, Input, Button } from "antd";
import emailjs from "emailjs-com";
import styles from "./index.module.scss";
const { TextArea } = Input;
function ApplyJob() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [location, setLocation] = useState();
  const [linkedIn, setLinkedIn] = useState();
  const [url, setUrl] = useState();
  const [information, setInformation] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm
      // "service_83hosi6",
      // "template_ysq66jb",
      // e.target,
      // "user_dH7Lvzi7xFb33xQyNso6L"
      ()
      .then(
        (result) => {
          console.log(result.text);
          setFname("");
          setLname("");
          setEmail("");
          setContact("");
          setLocation("");
          setLinkedIn("");
          setUrl("");
          setInformation("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.applyJob}>
      <div className={styles.container}>
        <div className={styles.titleCenter}>
          <span>Submit your resume</span>
          <h1>Apply For Job</h1>
          <div className={styles.resumeText}>
            Prepare a PDF for your resume and fill the following form. We will
            contact you as soon as possible.
          </div>
        </div>
        <Row>
          <Col xs={24} xl={16} offset={4}>
            <div className={styles.formMailer}>
              <form onSubmit={sendEmail}>
                <Row>
                  <Col xs={24} lg={12} className={styles.formGroup}>
                    <Input
                      placeholder="First Name"
                      name="first_name"
                      value={fname}
                      className={styles.formControl}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Col>
                  <Col xs={24} md={12} className={styles.formGroup}>
                    <Input
                      placeholder="Last Name"
                      name="last_name"
                      value={lname}
                      className={styles.formControl}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} lg={12} className={styles.formGroup}>
                    <Input
                      placeholder="Email"
                      name="user_email"
                      value={email}
                      type="email"
                      required
                      className={styles.formControl}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col xs={24} md={12} className={styles.formGroup}>
                    <Input
                      placeholder="Phone"
                      name="number"
                      value={contact}
                      type="number"
                      max="10"
                      className={styles.formControl}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </Col>
                </Row>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Location"
                    name="location"
                    value={location}
                    className={styles.formControl}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Linkedin Profile"
                    name="linkedin_profile"
                    value={linkedIn}
                    className={styles.formControl}
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Portfolio URL"
                    name="portfolio_url"
                    type="url"
                    pattern="https://.*"
                    value={url}
                    className={styles.formControl}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <TextArea
                    placeholder="Extra information"
                    name="information"
                    value={information}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    className={styles.formControl}
                    onChange={(e) => setInformation(e.target.value)}
                  />
                </div>
                <div className={styles.submitBtn}>
                  <Button htmlType="submit">Submit your resume</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ApplyJob;
