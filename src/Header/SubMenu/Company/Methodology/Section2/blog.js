import React from "react";
import { Col, Row } from "antd";
import Development from "../../../../../image/methodology-at.jpg";
import styles from "./index.module.scss";

function Blog() {
  return (
    <>
      <div className={styles.blogSection}>
        <div className={styles.blogContainer}>
          <Row>
            <Col xl={24}>
              <p className={styles.blogP}>
                Delivering multi-vendor , multi-site projects with mixed teams
              </p>
            </Col>
            <Col xl={24} className={styles.blogText}>
              <div className={styles.blogInnerText}>
                We have been working since 2011 with both software vendor &
                non-software companies in projects. Our Successful methodology
                allows team teams to develop top high quality software faster,
                leading to improvise business agility & greater capacity to
                handle the pressures of competition and those challenges are
                always significant.
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.autoContainer}>
        <img src={Development} alt="development" />
      </div>
    </>
  );
}

export default Blog;
