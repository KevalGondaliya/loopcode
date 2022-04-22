import React from "react";
import { Col, Row } from "antd";
import AliceCarousel from "react-alice-carousel";

import icon from "../../../image/icon-our-products.png";
import affy from "../../../image/affy.svg";
import studentWallet from "../../../image/studentWallet.jpg";
import rentperty from "../../../image/rentperty.jpg";
import xPod from "../../../image/X-pod.png";

import styles from "./index.module.scss";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function SuccessfulProduct() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={affy} alt="affy" onDragStart={handleDragStart} />,
    <img src={studentWallet} alt="student" onDragStart={handleDragStart} />,
    <img src={rentperty} alt="rent" onDragStart={handleDragStart} />,
    <img src={xPod} alt="xpod" onDragStart={handleDragStart} />,
  ];

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
          <div>
            <Row justify="center">
              <Col lg={24}>
                {/* <AliceCarousel mouseTracking items={items} /> */}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuccessfulProduct;
