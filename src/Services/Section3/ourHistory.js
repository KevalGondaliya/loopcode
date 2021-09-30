import { Col, Row } from "antd";
import React from "react";
import { TeamOutlined, StarFilled, RocketFilled } from "@ant-design/icons";
import styles from "./index.module.scss";

function OurHistory() {
  return (
    <div className={styles.factSection}>
      <div className={styles.container}>
        <Row className={styles.servicesA}>
          <Col lg={8} className={styles.subC}>
            <div className={styles.factDetails}>
              <span>
                <TeamOutlined />
              </span>
              <p className={styles.factInfo}>OUR CLIENTS</p>
              <p className={styles.factCount}>200+</p>
            </div>
          </Col>
          <Col lg={8} className={styles.subC}>
            <div className={styles.factDetails}>
              <span>
                <StarFilled />
              </span>
              <p className={styles.factInfo}>WORK ON COUNTRIES</p>
              <p className={styles.factCount}>28+</p>
            </div>
          </Col>
          <Col lg={8} className={styles.subC}>
            <div className={styles.factDetails}>
              <span>
                <RocketFilled />
              </span>
              <p className={styles.factInfo}>DELIVER PROJECTS</p>
              <p className={styles.factCount}>300+</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default OurHistory;
