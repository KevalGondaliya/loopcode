import React from "react";
import { Col, Row } from "antd";
import Methodology from "../../../../../image/methodology-1.png";
import styles from "./index.module.scss";

function Services() {
  return (
    <div className={styles.serviceTop}>
      <div className={styles.serviceContainer}>
        <Row>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.serviceInner}>
              <h2>Methodology</h2>
              <p>
                Our development methodology promotes a result-driven interactive
                approach and guarantees better customer service in terms of
                quality and cost. OOZEE continuously improves their methodology
                to meet customer expectations through accelerated development
                schedules and high quality results.
                <br /> <br />
                We have refined our business processes by blending leading
                industry practices spanning from classical Waterfall to modern
                Agile methodologies.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.imageInner}>
              <img src={Methodology} alt="Methodology" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Services;
