import React from "react";
import { Row, Col } from "antd";

import CareerTechno from "../../image/career-techno.png";

import styles from "./index.module.scss";

function JoinOur() {
  return (
    <div className={styles.joinourTop}>
      <div className={styles.container}>
        <Row>
          <Col xs={24} lg={12}>
            <div className={styles.innerTextPart}>
              <h2>JOIN OUR FORWARD-THINKING INNOVATORS</h2>
              <p>
                We are an experienced, forward-thinking software development
                team shaping a new reality with exciting new ideas and vast
                experience in developing and utilizing cutting edge
                technologies. Join us and get new opportunities for career
                growth.
              </p>
              <br />
              <h2>Why Work With Us?</h2>
              <br />
              <div className={styles.eventInfo}>
                <h6>Team like no other</h6>
                <p>
                  Work with young, ambitious, creative and passionate people.
                </p>
              </div>
              <br />
              <div className={styles.eventInfo}>
                <h6>Dynamic work environment</h6>
                <p>
                  With various projects and playful atmosphere you’ll never have
                  a dull moment.
                </p>
              </div>
              <br />
              <div className={styles.eventInfo}>
                <h6>Flexible work arrangements</h6>
                <p>
                  You can schedule your day to manage personal errands or work
                  from home.
                </p>
              </div>
              <br />
              <div className={styles.eventInfo}>
                <h6>Professional development</h6>
                <p>
                  Further specialize in your field and broaden your knowledge of
                  digital marketing.
                </p>
              </div>
              <br />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.innerImage}>
              <img src={CareerTechno} alt="CareerTechno" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default JoinOur;
