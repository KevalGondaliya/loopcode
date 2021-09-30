import React from "react";
import { Row, Col } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import SoftwareIcon from "../../../image/icon-software-development.png";
import WebIcon from "../../../image/icon-web-development.png";
import MobileIcon from "../../../image/icon-app-development.png";
import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Product() {
  return (
    <div className={styles.productSection}>
      <div className={styles.productContainer}>
        <div className={styles.sectionTitle}>
          <h2>
            The bigger picture for the business in
            <br /> the form of well-defined <span>digital</span> architecture
          </h2>
          <div className={styles.productText}>
            OOZEE is the top growing software development company in the India
            that designs and develops custom software applications that drive
            revenue and delivers flawless user experiences and functionality for
            mobile apps , web applications and custom software development
            projects. We are a end to end IT solutions company that offers the
            following various IT services.
          </div>
        </div>
        <Row>
          <Col md={12} lg={8} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={SoftwareIcon} alt="SoftwareIcon" />
              </div>
              <h3>
                <a href="#">Custom Software Development</a>
              </h3>
              <div className={styles.softwareIconText}>
                if you have a startup project to launch or any idea for bring
                customer software solution to your company, or you are intended
                in software product development, OOZEE is ready to provide and
                implement full cycle software development services at each step
                of your project.
              </div>
              <div className={styles.softwareIconLinkBox}>
                <a>See more </a>
                <span>
                  <RightCircleOutlined />
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={8} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={WebIcon} alt="SoftwareIcon" />
              </div>
              <h3>
                <a href="#">Website Development</a>
              </h3>
              <div className={styles.softwareIconText}>
                OOZEE Web application developers team will transform your great
                ideas to workable web solution. With superior talent web app
                development skills from CSS markup to complex large-scale
                systems on board, Our team will create impressive web apps and
                great start to your Business.
              </div>
              <div className={styles.softwareIconLinkBox}>
                <a>See more </a>
                <span>
                  <RightCircleOutlined />
                </span>
              </div>
            </div>
          </Col>
          <Col md={12} lg={8} className={styles.productService}>
            <div className={styles.productInnerBox}>
              <div className={styles.softwareIcon}>
                <img src={MobileIcon} alt="SoftwareIcon" />
              </div>
              <h3>
                <a href="#">Mobile App Development</a>
              </h3>
              <div className={styles.softwareIconText}>
                If you are searching for mobile app development supplier, OOZEE
                is your perfect match! We are providing Android and IPhone app
                solutions. our experts will help you to get on the mobile area.
                We can support you in making an impact in the mobile apps market
              </div>
              <div className={styles.softwareIconLinkBox}>
                <a>See more </a>
                <span>
                  <RightCircleOutlined />
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
