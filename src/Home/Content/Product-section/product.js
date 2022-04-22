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
import ServicesCom from "../../../Service/Services";

function Product() {
  let servicesList = [
    {
      image: WebDev,
      title: "Web Application Development",
      description:
        "Mobile-Friendly Responsive Website Designing and Development using next-generation cutting edge technology",
    },
    {
      image: software,
      title: "Custom Software Development",
      description:
        "Your one-stop destination for all kinds of software development. We provide expert consultation and project  management to give you control of your project",
    },
    {
      image: mobile,
      title: "Mobile Application Development",
      description:
        "We develop a Hybrid Mobile Application using  React-Native(FACEBOOK) framework, which let your overall budget down and saves the time",
    },
    {
      image: logistics,
      title: "Devops",
      description:
        "Our services are designed to provide you with Easy, Efficient, and Economical logistics solutions. We offer innovativelogistics solutions and supply chain services tailored to your business operations.",
    },
    {
      image: healthCare,
      title: "Healthcare Solutions",
      description:
        " We help state & federal health and human services find a path forward with healthcare technology services & products designed to improve health outcomes.",
    },
    {
      image: eCommerce,
      title: "Bots Development",
      description:
        " We can move your offline store to an online store and help you increase revenue by trying out an e-commerce solution. In fact, eCommerce web development has become a necessity rather than a means of generating increased traffic.",
    },
    {
      image: dataAnalysis,
      title: "ERP System",
      description:
        " We develop a custom ERP solution for you that suits your business so you can increase your company's overall efficiency.",
    },
    {
      image: crm,
      title: "CRM Systems",
      description:
        " We develop fully customizable CRM systems for your business to increase overall efficiency, boost sales and improve customer relationships.",
    },
  ];
  return (
    <div className={styles.productSection}>
      <div className={styles.productContainer}>
        <div className={styles.sectionTitle}>
          <span>Services</span>
          <div className={styles.productText}></div>
        </div>
       
        <Row justify="center">
          {servicesList.map((item) => (
            <Col md={12} lg={6} className={styles.productService}>
              <ServicesCom data={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Product;
