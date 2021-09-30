import React from "react";
import { Row, Col } from "antd";

import styles from "./index.module.scss";

function Feature() {
  return (
    <div className={styles.featureBlog}>
      <div className={styles.container}>
        <div className={styles.titleCentered}>
          <h2>SmartTime Pro Features</h2>
          <div className={styles.descText}>
            Solution is an easy to use tool for eCommerce.
            <br />
            You can present your products.
          </div>
        </div>
        <Row>
          <Col xs={24} sm={12} lg={8}>
            <div className={styles.boxAnimated}>
              <ul className={styles.check}>
                <li>Multi Comapny Mangement</li>
                <li>One click Salary Processing</li>
                <li>User defined Salary Heads</li>
                <li>User defined Salary Structure</li>
                <li>Employee Data Mangment</li>
                <li>Holiday &amp; Leave Mangement</li>
                <li>Bank &amp; Cheque Statment</li>
                <li>Mange user's Access Permission fro handling software</li>
                <li>Salary Register with Detail</li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <div className={styles.boxAnimated}>
              <ul className={styles.check}>
                <li>Employee Shift Mangment</li>
                <li>Manage Employee's Advance salary issued</li>
                <li>PT Submission Report (India)</li>
                <li>Police station form Print (India)</li>
                <li>User defined Formula</li>
                <li>User defined Department &amp; Designation</li>
                <li>Import of Salary Details.</li>
                <li>PF (India)</li>
                <li>Employee Loan Managment &amp; Loan outstanding Reports</li>
              </ul>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <div className={styles.boxAnimated}>
              <ul className={styles.check}>
                <li>LWF(Labour Welfare Fund) (India)</li>
                <li>ESI (India)</li>
                <li>Manual Punch Entry</li>
                <li>Bulk Manual Punch Entry</li>
                <li>Mange Personal In-Out during shift hours</li>
                <li>Gratuity (India)</li>
                <li>Professional Tax (India)</li>
                <li>TDS, Income Tax (India)</li>
                <li>Employee Monthly - Yearly Work Summary Reports</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Feature;
