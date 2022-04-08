import React from "react";
import { Row, Col } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";

import team1 from "../../image/PiyushKakadiya.jpg";
import footerBg from "../../image/bg-about.png";

import styles from "./index.module.scss";

function ManagementTeam() {
  return (
    <>
      <div className={styles.managementBlog}>
        <div className={styles.managementContainer}>
          <div className={styles.titleCenter}>
            <h2>Management Team</h2>
            <div className={styles.descText}>
              What do you do when something is broken? Most people go ahead and
              fix it. The leadership at OOZEE went a step further. They
              understood that spend management software didn’t just need to be
              fixed - it needed to be reinvented. Their passion lies in creating
              value for customers around the globe. We thought you’d like to
              meet them.
            </div>
          </div>
          <Row>
            <Col lg={18} xl={12} className={styles.dfCenter}>
              <div className={styles.teamDescribed}>
                <div classNam={styles.dFlex}>
                  <div className={styles.teamInfo}>
                    <h5>
                      Keval <br /> Gondaliya
                    </h5>
                    <span>
                      CEO & <br /> Founder
                    </span>
                    <ul className={styles.teamSocial}>
                      <li>
                        <a href="https://www.linkedin.com/in/keval-gondaliya-5b346aa3/" target="_blank" rel="noreferrer">
                          <LinkedinOutlined />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.teamPhoto}>
                    <img src={team1} alt="kevalGondaliya" />
                  </div>
                </div>
                <div className={styles.description}>
                  <span>
                    A visionary leader who motivates for continuous growth of an
                    organization. He has done his bachelors from UK, brought in
                    the vision to emerge as one of the innovative partners,
                    offering services to offshore clients. Mr.Keval Gondaliya is a
                    fun loving person and firm believer in work, Life and
                    Balance. He is actively involved in sales and business
                    engagement activities with every individual. He believes
                    that 'Quality is the key to prosperity'
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={18} xl={12} className={styles.dfCenter}>
              <div className={styles.teamDescribed}>
                <div classNam={styles.dFlex}>
                  <div className={styles.teamInfo}>
                    <h5>
                      Piyush <br /> Kakadiya
                    </h5>
                    <span>
                      CTO & <br />Co-Founder
                    </span>
                    <ul className={styles.teamSocial}>
                      <li>
                      <a href="https://www.linkedin.com/in/piyush-kakadiya-80841aa3/" target="_blank" rel="noreferrer">
                          <LinkedinOutlined />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.teamPhoto}>
                    <img src={team1} alt="PiyushKakadiya" />
                  </div>
                </div>
                <div className={styles.description}>
                  <span>
                    With about many years of experience in IT management,
                    operations, strategic planning & leadership, Mr.Piyush
                    Kakadiya is also a great writer and an avid thinker. He
                    mentor for anyone who is willing to learn in the team and
                    adds extreme value by his in-depth understanding of business
                    and civic regulations arena in India's market. He is
                    untiring and passionate in all he does and believes in firm
                    life principles to live, and simplicity
                  </span>
                </div>
              </div>
            </Col>
            {/* <Col lg={12} xl={8} className={styles.dfCenter}>
              <div className={styles.teamDescribed}>
                <div classNam={styles.dFlex}>
                  <div className={styles.teamInfo}>
                    <h5>
                      Hardik <br /> Desai
                    </h5>
                    <span>
                      Development & <br /> Management
                    </span>
                    <ul className={styles.teamSocial}>
                      <li>
                        <a>
                          <LinkedinOutlined />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.teamPhoto}>
                    <img src={team1} alt="AlkeshVirani" />
                  </div>
                </div>
                <div className={styles.description}>
                  <span>
                    Plays a crucial and exponential role of a technologist at
                    our endeavor. He has done his bachelors from Mumbai
                    University. Dividing the job responsibilities further into
                    team & work on complex,performance and R&D level
                    programming, he took that dive into development to come out
                    with flying color of success. Mr. Hardik Desai is a perfect
                    exemplary figure for our company, keeping abreast all
                    employees to recent technologies.
                  </span>
                </div>
              </div>
            </Col> */}
          </Row>
        </div>
      </div>
      <div className={styles.lastSection}>
        <img src={footerBg} alt="Backgouund" />
      </div>
    </>
  );
}
export default ManagementTeam;
