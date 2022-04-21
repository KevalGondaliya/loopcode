import React from "react";
import { Col, Row } from "antd";

import Dmfg from "../../../image/productlist/DMfg.png";
import Amex from "../../../image/productlist/Amex.png";
import icon from "../../../image/icon-our-products.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Dimax from "../../../image/productlist/Dimax.png";
import EMBRO from "../../../image/productlist/EMBRO.png";
import Jwelex from "../../../image/productlist/Jwelex.png";
import DSales from "../../../image/productlist/DSales.png";
import Digital from "../../../image/productlist/Digital.png";
import DiamFair from "../../../image/productlist/DiamFair.png";
import SmartTime from "../../../image/productlist/SmarTimePro.png";

import styles from "./index.module.scss";

function SuccessfulProduct() {
  return (
    <div className={styles.successfulProduct}>
      <div className={styles.productContainer}>
        <div className={styles.productTitle}>
          <span className={styles.icon}>
            <img src={icon} alt="icon" />
          </span>
          <h2>Trusted with us</h2>
          <div className={styles.productText}>
            We have developed successful desktop application product in few
            industries which are used by 300+ customers, also we are providing
            these product with custom requirement as our client.
          </div>
        </div>
        <Row>
          <Col lg={8} className={styles.productMarketing}>
            <div className={styles.marketingList}>
              <img src={SmartTime} alt="smartTimePro" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a href="" className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col lg={8} className={styles.productMarketing}>
            <div className={styles.marketingList}>
              <img src={Dmfg} alt="Dmfg" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col lg={8} className={styles.productMarketing}>
            <div className={styles.marketingList}>
              <img src={DSales} alt="DSales" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          {/* <Col lg={8} className={styles.productMarketing}>
            <div className={styles.marketingList}>
              <img src={Dimax} alt="Dimax" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col lg={8} className={styles.productMarketing}>
            <div className={styles.marketingList}>
              <img src={Jwelex} alt="Jwelex" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col lg={8} className={styles.productMarketing}>
            <div className={styles.marketingList}>
              <img src={Digital} alt="Digital" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col
            lg={8}
            className={`${styles.productMarketing} ${styles.borderBottom}`}
          >
            <div className={styles.marketingList}>
              <img src={DiamFair} alt="DiamFair" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col
            lg={8}
            className={`${styles.productMarketing} ${styles.borderBottom}`}
          >
            <div className={styles.marketingList}>
              <img src={Amex} alt="Amex" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col>
          <Col
            lg={8}
            className={`${styles.productMarketing} ${styles.borderBottom}`}
          >
            <div className={styles.marketingList}>
              <img src={EMBRO} alt="EMBRO" />
              <h3>
                SmartTime Pro <br /> <span>Biometric Attendance & Payroll</span>
              </h3>
              <p>
                Complete payroll software with support of biometric device. also
                cloud-based that's secure, scalable and maintenance-free. Make
                your employees smile with timely, accurate paychecks.
              </p>
              <a className={styles.knowMore}>
                <span>
                  <RightCircleOutlined />
                </span>
                Know More
              </a>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
export default SuccessfulProduct;
