import React from "react";
import { Row, Col } from "antd";

import styles from "./index.module.scss";

function Provide() {
  return (
    <div className={styles.pageTitle}>
      <div className={styles.container}>
        <Row>
          <Col md={24}>
            <h2 className={styles.serviceTitle}>Services</h2>
            <h3 className={styles.subTitle}>We Provide.</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Provide;
