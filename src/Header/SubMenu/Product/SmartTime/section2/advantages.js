import React from "react";
import { Row, Col } from "antd";

import styles from "./index.module.scss";

function Advantage() {
  return (
    <div className={styles.advantageBlog}>
      <div className={styles.container}>
        <div className={styles.titleCentered}>
          <h2>Advantages</h2>
          <div className={styles.descText}>
            Complete payroll software with biometric devices enabled
          </div>
        </div>
        <Row>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>Time saving</p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>Monitoring the attendance efficiently</p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>Manage critical employee information easily</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>Fully customized reports</p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>Storing personnel records</p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>Very User friendly to handle</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>
                Integrate employee's attendance with payroll for easy and faster
                payroll processing
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>
                Integrate with biometric/swipe card devices to generate
                attendance information automatically
              </p>
            </div>
          </Col>
          <Col sm={12} lg={8}>
            <div className={styles.singleInfo}>
              <p>
                One click salary generation with no headache. No hectic paper
                work at every month end.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Advantage;
