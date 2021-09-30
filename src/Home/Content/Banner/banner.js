import React from "react";
import { Row, Col } from "antd";
import { RightCircleOutlined } from "@ant-design/icons";
import banner1 from "../../../image/banner-image-1.png";
import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Banner() {
  return (
    <div className={styles.mainBanner}>
      <Row className={styles.bannerContainer}>
        <Col xl={12} className={styles.bannerCol}>
          <div className={styles.bannerText}>
            <h4>IT Solutions</h4>
            <h2>
              Let's Find out what <span>Great work </span>can do to your
              business with User-friendly IT Solutions
            </h2>
            <p>Web, Mobile app & Software Development Services</p>
            <p className={styles.textEvent}>
              PLANNING / STRATEGY / CREATIVITY / LAUNCHING
            </p>
            <span>
              Who we are ?{" "}
              <span className={styles.textIcon}>
                <RightCircleOutlined />
              </span>
            </span>
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
