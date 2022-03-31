import React from "react";
import { Col, Row } from "antd";
import { TeamOutlined, StarFilled, RocketFilled } from "@ant-design/icons";

import styles from "./index.module.scss";

function OurHistory() {
  return (
    <div className={styles.factSection}>
      <div className={styles.container}>
        <Row className={styles.servicesA}>
          <Col xs={24} md={8} lg={8} className={styles.subC}>
            <div className={styles.factDetails}>
              <div className={styles.fectDetailIcon}>
                <span>
                  <TeamOutlined />
                </span>
              </div>
              <div className={styles.feactDetailMain}>
                <p className={styles.factCount}>200+</p>
                <p className={styles.factInfo}>OUR CLIENTS</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8} lg={8} className={styles.subC}>
            <div className={styles.factDetails}>
              <div className={styles.fectDetailIcon}>
                <span>
                  <StarFilled />
                </span>
              </div>

              <div className={styles.feactDetailMain}>
                <p className={styles.factCount}>28+</p>
                <p className={styles.factInfo}>WORK ON COUNTRIES</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={8} lg={8} className={styles.subC}>
            <div className={styles.factDetails}>
              <div className={styles.fectDetailIcon}>
                <span>
                  <RocketFilled />
                </span>
              </div>
              <div className={styles.feactDetailMain}>
                <p className={styles.factCount}>300+</p>
                <p className={styles.factInfo}>DELIVER PROJECTS</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default OurHistory;
