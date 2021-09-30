import React from "react";
import { Row, Col, Input, Button } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

function RequestCall() {
  return (
    <div className={styles.requestCall}>
      <div className={styles.container}>
        <Row>
          <Col className={styles.textCol} xs={24} sm={24} md={24} lg={24}>
            <div className={styles.title}>
              <h2>
                Request Call back for <span>SmartTime Pro</span>
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} className={styles.defaultForm}>
            <div className={styles.formGroup}>
              <Input placeholder="Name" />
            </div>
          </Col>
          <Col lg={6} className={styles.defaultForm}>
            <div className={styles.formGroup}>
              <Input placeholder="Contact No." />
            </div>
          </Col>
          <Col lg={6} className={styles.defaultForm}>
            <div className={styles.formGroup}>
              <Input placeholder="Email id" />
            </div>
          </Col>
          <Col lg={6} className={styles.defaultForm}>
            <div className={styles.submitBtn}>
              <Button>
                Submit Request <RightCircleOutlined />
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={24} className={styles.defaultForm}>
            <p>
              Understand us Better, Let's talk, we will be more than happy to
              assist you
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RequestCall;
