import React from "react";
import { Row, Col } from "antd";

import styles from "./index.module.scss";

function Mission() {
  return (
    <div className={styles.missionBloge}>
      <div className={styles.missionContainer}>
        <Row>
          <Col md={24}>
            <span className={styles.missionLable}>Mission</span>
            <p className={styles.missionP}>
              To become <span>strategic IT partner</span> for worldwide clients
              and provide
              <span> one-stop solution</span> to fulfill their technology &
              business needs.
            </p>
          </Col>
          <Col md={24} className={styles.missionText}>
            <Row>
              <Col md={12} className={styles.textLeft}>
                <span>
                  At OOZEE we pay special attention to the quality assurance of
                  our all products and services we deliver also we believe that
                  this is the best way to make any products work as effectively
                  as possible with great output.
                </span>
              </Col>
              <Col md={12} className={styles.textRight}>
                <span>
                  Our clients can rely on our products and development services
                  wity working stably and as designed because we put an emphasis
                  on quality assurance as a key factor in project success.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Mission;
