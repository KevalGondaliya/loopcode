import React from "react";
import { Row, Col } from "antd";

import eCommerce from "../../../image/botsDev.svg";
import software from "../../../image/softwareDev.svg";
import WebDev from "../../../image/webDev.svg";
import healthCare from "../../../image/Healthy.svg";
import dataAnalysis from "../../../image/ERM.svg";
import crm from "../../../image/icons8-crm-48.png";
import logistics from "../../../image/devOps.svg";
import mobile from "../../../image/mobile.svg";

import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Product() {
  return (
    <div className={styles.productSection}>
      <div className={styles.productContainer}>
        <div className={styles.sectionTitle}>
          <span>Services</span>
          <div className={styles.productText}></div>
        </div>
        <Row justify="center">
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={WebDev} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>Web Application Development</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  {" "}
                  Mobile-Friendly Responsive Website <br></br>Designing and
                  Development using <br></br> next-generation cutting edge{" "}
                  <br></br> technology
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={software} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>Custom Software Development</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  {" "}
                  Your one-stop destination for all kinds of software
                  development. We provide expert consultation and project
                  management to give you control of your project
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={mobile} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>Mobile Application Development</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  We develop a Hybrid Mobile Application using
                  React-Native(FACEBOOK) framework, which let your overall
                  budget down and saves the time
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={logistics} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>Devops</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  Our services are designed to provide you with Easy, Efficient,
                  and Economical logistics solutions. We offer innovative
                  logistics solutions and supply chain services tailored to your
                  business operations.
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Row justify="center">
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={healthCare} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>Healthcare Solutions</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  We help state & federal health and human services find a path
                  forward with healthcare technology services & products
                  designed to improve health outcomes.
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={eCommerce} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>Bots Development</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  We can move your offline store to an online store and help you
                  increase revenue by trying out an e-commerce solution. In
                  fact, eCommerce web development has become a necessity rather
                  than a means of generating increased traffic.
                </span>
              </div>
            </div>
          </Col>

          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={dataAnalysis} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>ERP System</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  We develop a custom ERP solution for you that suits your
                  business so you can increase your company's overall
                  efficiency.
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={crm} alt="SoftwareIcon" />
              </div>
              <h3>
                <span>CRM Systems</span>
              </h3>
              <div className={styles.softwareText}>
                <span>
                  We develop fully customizable CRM systems for your business to
                  increase overall efficiency, boost sales and improve customer
                  relationships.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Product;
