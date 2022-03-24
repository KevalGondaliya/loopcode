import React from "react";
import { Col, Row } from "antd";
import Profile from "../../../image/author-thumb-1.png";
import styles from "./index.module.scss";

function ThenksMessage() {
  return (
    <div className={styles.thanksMessage}>
      <div className={styles.thanksMessageContainer}>
        <div className={styles.outerContainer}>
          <Row>
            <Col xs={24} md={12} className={styles.colWidth}>
              <div className={styles.thanksText}>
                â€œ Thank you for the wonderful job OOZEE did to deliver this
                valuable Jewllery Mfg ERP software on our behalf. Please pass
                along my sincere thanks to your staff that had a hand in
                developing our software. Staff at OOZEE Technologies. are
                responsive to requests, usually providing and answer the same
                day as always.â€
              </div>
            </Col>
            <Col xs={24} md={12} className={styles.userColWidth}>
              <div className={styles.ceoProfile}>
                <div className={styles.ceoInfo}>
                  <span className={styles.thumImage}>
                    <img src={Profile} alt="Profile" />
                  </span>
                  <h4>Keval Gondaliya</h4>
                  <span className={styles.desihnation}>
                    Founder & CEO
                  </span>
                  <h4>Piyush Kakadiya</h4>
                  <span className={styles.desihnation}>
                    CTO
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <div className={styles.dots}>
            <div className={styles.dot}>
              <span></span>
            </div>
            <div className={`${styles.dot} ${styles.active}`}>
              <span></span>
            </div>
            <div className={styles.dot}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThenksMessage;
