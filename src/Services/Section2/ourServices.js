import { Col, Row } from "antd";
import React from "react";
import s1 from "../../image/services/s1.svg";
import s2 from "../../image/services/s2.svg";
import s3 from "../../image/services/s3.svg";
import s4 from "../../image/services/s4.svg";
import s5 from "../../image/services/5.svg";
import s6 from "../../image/services/s6.svg";

import styles from "./index.module.scss";

function OurServices() {
  return (
    <div className={styles.ourServices}>
      <div className={styles.container}>
        <Row>
          <Col xl={16} offset={4}>
            <div className={styles.sectionTitle}>
              <h2 className={styles.title}>Services</h2>
              <p>
                Scaleteam provides web development,Mobile Apps development
                services designed to help you grow your business, increase your
                ROI, and one-up the competition.
              </p>
            </div>
          </Col>
          <Row className={styles.seervicesFl}>
            <Col lg={8} className={styles.servicesBox}>
              <div className={styles.featuredDetails}>
                <div className={styles.servicesThumb}>
                  <div className={styles.thumbs}>
                    <img src={s1} />
                  </div>
                </div>
                <div className={styles.media}>
                  <div className={styles.servicesF}>
                    <h3 className={styles.title}>Web Design & Development</h3>
                    <hr />
                    <p>
                      Mobile Friendly Responsive website Designing and
                      Development using next generation cutting edge technology.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} className={styles.servicesBox}>
              <div className={styles.featuredDetails}>
                <div className={styles.servicesThumb}>
                  <div className={styles.thumbs}>
                    <img src={s2} />
                  </div>
                </div>
                <div className={styles.media}>
                  <div className={styles.servicesF}>
                    <h3 className={styles.title}>Mobile App Development</h3>
                    <hr />
                    <p>
                      We develop a Hybrid Mobile Applications using
                      React-Native(FACEBOOK) framework, which let you overall
                      budget down and save the time.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} className={styles.servicesBox}>
              <div className={styles.featuredDetails}>
                <div className={styles.servicesThumb}>
                  <div className={styles.thumbs}>
                    <img src={s3} />
                  </div>
                </div>
                <div className={styles.media}>
                  <div className={styles.servicesF}>
                    <h3 className={styles.title}>E-commerce Development</h3>
                    <hr />
                    <p>
                      We can move your offline store to online and help to
                      increase the revenue bu proving e-commerce solution.
                      E-Commerce web development has indeed become a necessity
                      instead of a means to drive greater traffic.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className={styles.seervicesFl}>
            <Col lg={8} className={styles.servicesBox}>
              <div className={styles.featuredDetails}>
                <div className={styles.servicesThumb}>
                  <div className={styles.thumbs}>
                    <img src={s5} />
                  </div>
                </div>
                <div className={styles.media}>
                  <div className={styles.servicesF}>
                    <h3 className={styles.title}>Build an MVP</h3>
                    <hr />
                    <p>
                      A minimum viable product is a product with just enough
                      features to satisfy early customers, get the reviews. We
                      build an MVP which cover minimum requirements to test end
                      to end business idea.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} className={styles.servicesBox}>
              <div className={styles.featuredDetails}>
                <div className={styles.servicesThumb}>
                  <div className={styles.thumbs}>
                    <img src={s4} />
                  </div>
                </div>
                <div className={styles.media}>
                  <div className={styles.servicesF}>
                    <h3 className={styles.title}>POC</h3>
                    <hr />
                    <p>
                      A proof of concept (POC) is a demonstration, the purpose
                      of which is to verify that certain concepts or theories
                      have the potential for real-world application. POC is
                      therefore a prototype that is designed to determine
                      feasibility, but does not represent deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8} className={styles.servicesBox}>
              <div className={styles.featuredDetails}>
                <div className={styles.servicesThumb}>
                  <div className={styles.thumbs}>
                    <img src={s6} />
                  </div>
                </div>
                <div className={styles.media}>
                  <div className={styles.servicesF}>
                    <h3 className={styles.title}>Growth Marketing/SEO</h3>
                    <hr />
                    <p>
                      {" "}
                      POC is therefore a prototype that is designed to determine
                      feasibility, but does not represent deliverables. Search
                      engines use SEO texts to analyze websites...
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default OurServices;
