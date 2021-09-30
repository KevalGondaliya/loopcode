import React from "react";
import { Row, Col } from "antd";
import aboutTech from "../../image/about-oozeetech.png";

import styles from "./index.module.scss";

function Technology() {
  return (
    <div className={styles.technologyServices}>
      <div className={styles.technologyContainer}>
        <Row>
          <Col xs={24} lg={12} xl={12}>
            <div className={styles.innerPartText}>
              <h2>
                Empowering businesses with{" "}
                <span className={styles.techno}>Technology Innovation</span> and{" "}
                <span className={styles.digital}>Digital Transformation</span>
              </h2>
              <p>
                Established in the year 2013 as an IT company with an intention
                to concentrate Software, Mobile app and Website Development. In
                years of delivering software development, outsourcing and
                consulting services, we have honed how we engage, operate,
                deliver and mutually grow with our clients.
                <br />
                <br />
                OOZEE Technology is Software development company that
                accelerates business growth. We believe in Customized Software
                and our client's need. And we know that you need a partner that
                doesn't just plan, but one who can get it done. With OOZEE
                Technologies one thing to get for sure is purity in relationship
                with the best of cost effective profit.
                <br />
                <br />
                We are Growing and expanding in every second we what we live in
                current market, we believe in building STRONG RELATIONSHIP with
                all our current and future client’s as we believe that growth
                and profit of our client’s would be eventually ours.
              </p>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.aboutTech}>
              <img src={aboutTech} alt="Technology" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Technology;
