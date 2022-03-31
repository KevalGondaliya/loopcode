import React from "react";
import { Row, Col } from "antd";

import SmartTime from "../../../../../image/banner-SmartTimePro.png";

import styles from "./index.module.scss";

function TimePro() {
  return (
    <div className={styles.timePro}>
      <div className={styles.container}>
        <Row className={styles.row}>
          <Col xs={24} md={24} className={styles.textCol}>
            <div className={styles.innerTitle}>
              <h2>SmartTime Pro - Attendance Payroll Software</h2>
              <div className={styles.textDes}>
                <span>Y</span>
                our search for the payroll software that solves all your payroll
                related issues ends here! SmartTime Pro has a complete payroll
                solution that automates all your payroll processes. Configure
                your payroll rules, and leave the rest to SmarTime Pro, it saves
                you lots of time spend fixing your payroll issues.
                <br />
                <br />
                The SmarTime Pro designed with at most flexibility. SmartTime
                Pro is a time saving, cost effective solution providing
                assistance for Payroll management and administration. A
                comprehensive, intuitive, flexible attendance and payroll system
                suitable for any business sector and company size. Its modular
                structure can be tailored to meet your individual requirements,
                adapting to your ever changing business needs.
                <br />
                <br />
                No Matter What type of facility you oversee. Efficient Payroll
                Management is Critical. On a daily basis, you may need to screen
                and track employee's attendance integrate with your payroll
                system and you need to do all of this quickly and efficiently
                without disrupting business operations or causing delays.
                <br />
                <br />
                <br />
                <img src={SmartTime} alt="SmartTimePro" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TimePro;
