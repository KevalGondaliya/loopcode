import React from "react";
import { Col, Row } from "antd";
import AliceCarousel from "react-alice-carousel";

import affy from "../../../image/affy.svg";
import studentWallet from "../../../image/studentWallet.png";
import rentperty from "../../../image/rentperty.png";
import xPod from "../../../image/X-pod.png";
import astra from "../../../image/astra.png";
import SolveOnline from "../../../image/SolveOnline.svg";

import styles from "./index.module.scss";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

function SuccessfulProduct() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src={affy}
      className={styles.clientImg}
      alt="affy"
      onDragStart={handleDragStart}
    />,
    <img
      src={studentWallet}
      className={`${styles.clientImg} ${styles.setWidth}`}
      alt="student"
      onDragStart={handleDragStart}
    />,
    <img
      src={rentperty}
      className={styles.clientImg}
      alt="rent"
      onDragStart={handleDragStart}
    />,
    <img
      src={xPod}
      className={styles.clientImg}
      alt="xpod"
      onDragStart={handleDragStart}
    />,
    <img
      src={astra}
      className={styles.clientImg}
      alt="student"
      onDragStart={handleDragStart}
    />,
    <img
      src={SolveOnline}
      className={styles.clientImg}
      alt="affy"
      onDragStart={handleDragStart}
    />,
    <img
      src={affy}
      className={styles.clientImg}
      alt="affy"
      onDragStart={handleDragStart}
    />,
    <img
      src={studentWallet}
      className={`${styles.clientImg} ${styles.setWidth}`}
      alt="student"
      onDragStart={handleDragStart}
    />,
    <img
      src={rentperty}
      className={styles.clientImg}
      alt="rent"
      onDragStart={handleDragStart}
    />,
    <img
      src={xPod}
      className={styles.clientImg}
      alt="xpod"
      onDragStart={handleDragStart}
    />,
    <img
      src={astra}
      className={styles.clientImg}
      alt="student"
      onDragStart={handleDragStart}
    />,
    <img
      src={SolveOnline}
      className={styles.clientImg}
      alt="affy"
      onDragStart={handleDragStart}
    />,
  ];

  const clientWork = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
    },
  };
  return (
    <div className={styles.successfulProduct}>
      <div className={styles.productContainer}>
        <div className={styles.productTitle}>
          {/* <span className={styles.icon}>
            <img src={icon} alt="icon" />
          </span> */}
          <h2>Trusted with us</h2>
          <div className={styles.productText}>
            We have developed successful desktop application product in few
            industries which are used by 300+ customers, also we are providing
            these product with custom requirement as our client.
          </div>
          <div className={styles.AliceCarousel}>
            <Row justify="center">
              <Col lg={24}>
                <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={clientWork}
                  disableDotsControls={true}
                  keyboardNavigation={true}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SuccessfulProduct;
