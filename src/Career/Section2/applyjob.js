import React from "react";
import { Row, Col, Input, Button } from "antd";
import styles from "./index.module.scss";
const { TextArea } = Input;
function ApplyJob() {
  return (
    <div className={styles.applyJob}>
      <div className={styles.container}>
        <div className={styles.titleCenter}>
          <span>Submit your resume</span>
          <h1>Apply For Job</h1>
          <div className={styles.resumeText}>
            Prepare a PDF for your resume and fill the following form. We will
            contact you as soon as possible.
          </div>
        </div>
        <Row>
          <Col xs={24} xl={16} offset={4}>
            <div className={styles.formMailer}>
              <form>
                <Row>
                  <Col xs={24} lg={12} className={styles.formGroup}>
                    <Input
                      placeholder="First Name"
                      className={styles.formControl}
                    />
                  </Col>
                  <Col xs={24} md={12} className={styles.formGroup}>
                    <Input
                      placeholder="Last Name"
                      className={styles.formControl}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} lg={12} className={styles.formGroup}>
                    <Input placeholder="Email" className={styles.formControl} />
                  </Col>
                  <Col xs={24} md={12} className={styles.formGroup}>
                    <Input placeholder="Phone" className={styles.formControl} />
                  </Col>
                </Row>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Location"
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Linkedin Profile"
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.formGroup}>
                  <Input
                    placeholder="Portfolio URL"
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.formGroup}>
                  <TextArea
                    placeholder="Extra information"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    className={styles.formControl}
                  />
                </div>
                <div className={styles.submitBtn}>
                  <Button>Submit your resume</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default ApplyJob;
