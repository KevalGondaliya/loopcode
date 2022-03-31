import React from "react";
import { Row, Col } from "antd";

import Eon from "../image/Clients/5.jpg";
import Mira from "../image/Clients/1.jpg";
import Dirgh from "../image/Clients/3.jpg";
import Rinkle from "../image/Clients/4.jpg";
import Finestar from "../image/Clients/2.jpg";
import JBBrother from "../image/Clients/2_1.jpg";

import styles from "./index.module.scss";

function OurClients() {
  return (
    <div className={styles.ourClients}>
      <div className={styles.container}>
        <div className={styles.titleCentered}>
          <h2>Our Clients</h2>
          <div className={styles.descText}>
            We are trusted by small to mid-sized organizations, Fortune 150+
            companies and major brands to advance their technology objectives
            through our custom software solutions.
          </div>
        </div>
        <Row>
          <Col xs={24} sm={12} lg={4} className={styles.companyName}>
            <div className={styles.innerBox}>
              <a className={styles.imageBox}>
                <img src={Mira} alt="Mira" />
              </a>
              <div className={styles.lowerContent}>
                <h1>Mira Gems</h1>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={4} className={styles.companyName}>
            <div className={styles.innerBox}>
              <a className={styles.imageBox}>
                <img src={Finestar} alt="FINESTAR DIAMOND" />
              </a>
              <div className={styles.lowerContent}>
                <h1>FINESTAR DIAMOND</h1>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={4} className={styles.companyName}>
            <div className={styles.innerBox}>
              <a className={styles.imageBox}>
                <img src={JBBrother} alt="J.B AND BROTHERS" />
              </a>
              <div className={styles.lowerContent}>
                <h1>J.B AND BROTHERS</h1>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={4} className={styles.companyName}>
            <div className={styles.innerBox}>
              <a className={styles.imageBox}>
                <img src={Dirgh} alt="DIRGH DIAMOND" />
              </a>
              <div className={styles.lowerContent}>
                <h1>DIRGH DIAMOND</h1>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={4} className={styles.companyName}>
            <div className={styles.innerBox}>
              <a className={styles.imageBox}>
                <img src={Rinkle} alt="RINKLE IMPEX" />
              </a>
              <div className={styles.lowerContent}>
                <h1>RINKLE IMPEX</h1>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={4} className={styles.companyName}>
            <div className={styles.innerBox}>
              <a className={styles.imageBox}>
                <img src={Eon} alt="EON JEWELLERY" />
              </a>
              <div className={styles.lowerContent}>
                <h1>EON JEWELLERY</h1>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OurClients;
