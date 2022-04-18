import React from "react";
import { Col, Row } from "antd";

import logo from "../image/Asset 6@4x.png";
import facebook from "../image/facebook.svg";
import instagram from "../image/instagram.svg";
import twiter from "../image/twiter.svg";
import linkedin from "../image/linkedin.svg";

import styles from "./index.module.scss";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className={styles.footerStyle}>
      <div className={styles.footerUpper}>
        <div className={styles.footerContainer}>
          <div className={styles.mainFooter}>
            <div className={styles.getInTouch}>
              <span>Get in Touch</span>
            </div>
            <div className={styles.portProducts}>
              <span>
                Over the course of the last 5+ years, we have created 200+
                products{" "}
              </span>
            </div>
          </div>
          <div className={styles.footerOuter}>
            <Row>
              <Col xs={24} md={12} lg={8} className={styles.colWidth}>
                <div className={styles.footerColumn}>
                  <div className={styles.logo}>
                    <span className={styles.comName}>LOOPCODE</span>
                  </div>

                  <div className={styles.linksName}>
                    <div>
                      <a>Home</a>
                    </div>
                    <div>
                      <a>About Us</a>
                    </div>
                    <div>
                      <a>Our Work</a>
                    </div>
                    <div>
                      <a>Carrer</a>
                    </div>
                    <div>
                      <a>Contact Us</a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={8} className={styles.colWidth}>
                <div className={styles.footerColSec}>
                  <span className={styles.serName}>SERVICES</span>
                </div>
                <div className={styles.links}>
                  <div>
                    <a>Website Development</a>
                  </div>
                  <div>
                    <a>Software Development</a>
                  </div>
                  <div>
                    <a>E-commerce Solutions</a>
                  </div>
                  <div>
                    <a>Healthcare Solutions</a>
                  </div>
                  <div>
                    <a>ERP System</a>
                  </div>
                  <div>
                    <a>CRM System</a>
                  </div>
                  <div>
                    <a>Logistics Solutions</a>
                  </div>
                  <div>
                    <a>Mobile Apps</a>
                  </div>
                </div>
              </Col>
              {/* <Col xs={24} md={12} lg={8} className={styles.colWidth}>
                <div className={styles.footerColThird}>
                  <span className={styles.hireDevName}>HIRE DEVELOPERS</span>
                </div>
                <div className={styles.hireDevLinks}>
                  <div>
                    <a>React Developers</a>
                  </div>
                  <div>
                    <a>React Native Developers</a>
                  </div>
                  <div>
                    <a>Angular Developers</a>
                  </div>
                  <div>
                    <a>Nodejs Developers</a>
                  </div>
                  <div>
                    <a>iOS Develeopers</a>
                  </div>
                  <div>
                    <a>Android Developers</a>
                  </div>
                </div>
              </Col> */}
            </Row>
            <div className={styles.footEnd}>
              <Row justify="center">
                <Col xs={24} md={12} lg={8}>
                  <div className={styles.imgLogo}>
                    <img src={logo} alt="logo" />
                  </div>
                </Col>
                <Col xs={24} md={12} lg={8}>
                  <div className={styles.copyRight}>
                    <span>
                      Copyright© {getCurrentYear()}, All Rights Reserved
                    </span>
                  </div>
                </Col>
                <Col xs={24} md={12} lg={8}>
                  <div className={styles.socialMedia}>
                    <div className={styles.svgMain}>
                      <div className={styles.fbDiv}>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className={styles.fbDiv}>
                        <img
                          src={instagram}
                          alt="instagram"
                          className={styles.instagram}
                        />
                      </div>
                      <div className={styles.fbDiv}>
                        <img
                          src={twiter}
                          alt="twiter"
                          className={styles.twiter}
                        />
                      </div>
                      <div className={styles.fbDiv}>
                       <a href="https://www.linkedin.com/company/loopcode-technology/mycompany/" target="_blank"><img src={linkedin} alt="linkedin" /></a> 
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
