import React from "react";
import { Col, Row } from "antd";
import logo from "../image/loop3.png";
import styles from "./index.module.scss";

function Footer() {
  return (
    <div className={styles.footerStyle}>
      <div className={styles.footerUpper}>
        <div className={styles.footerContainer}>
          <div className={styles.footerOuter}>
            <Row>
              <Col xs={24} md={12} className={styles.colWidth}>
                <div className={styles.footerColumn}>
                  <div className={styles.logo}>
                    <img src={logo} alt="loopcode" />
                  </div>
                  <div className={styles.textFooter}>
                    Established in the year 2011 as an IT company with an
                    intention to concentrate Software, Mobile app and Website
                    Development solutions. Discover what you can achieve with
                    India's leading Customized software development solution...
                    <br />
                    <a>Read More</a>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} className={styles.colWidth}>
                <Row>
                  <Col xs={24} md={12}></Col>
                  <Col xs={24} md={12}>
                    <div className={styles.footerColSec}>
                      <h3>Company</h3>
                    </div>
                    <div className={styles.links}>
                      <ul>
                        <li>
                          <a>About</a>
                        </li>
                        <li>
                          <a>Customers</a>
                        </li>
                        <li>
                          <a>Career</a>
                        </li>
                        <li>
                          <a>Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24}>
                <Row>
                  <Col xs={24} md={12}></Col>
                  <Col xs={24} md={12} className={styles.footerCopyright}>
                    <span>Copyright © 2021, loopcode.com</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
