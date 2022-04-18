import React from "react";
import { Row, Col, Button } from "antd";

import { RightCircleOutlined } from "@ant-design/icons";
import banner1 from "../../../image/Home2.png";

import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Banner() {
  return (
    <div className={styles.mainBanner}>
      <Row justify="center" className={styles.bannerContainer}>
        <Col xl={12} className={styles.bannerCol}>
          <div className={styles.bannerText}>
            <h1>We help startup, collaborate to innovat.</h1>
            <p>We are building Web appliaction and mobile application</p>

            <Button className={styles.buttonGetStarted}>Get Started</Button>
          </div>
        </Col>
        <Col xl={12} className={styles.imageCol}>
          <div className={styles.colImage}>
            <img src={banner1} alt="Banner" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
