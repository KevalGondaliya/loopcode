import React from "react";
import { Button, Col, Row } from "antd";
import technology from "../image/portfolio/1.jpg";
import design from "../image/portfolio/2.jpg";
import development from "../image/portfolio/3.jpg";
import creative from "../image/portfolio/4.jpg";
import research from "../image/portfolio/5.jpg";
import product from "../image/portfolio/6.jpg";
import inspiration from "../image/portfolio/7.jpg";
import growth from "../image/portfolio/8.jpg";
import platform from "../image/portfolio/9.jpg";
import styles from "./index.module.scss";

function Portfolio() {
  return (
    <div className={styles.portfolioSection}>
      <div className={styles.container}>
        <Row>
          <Col lg={24}>
            <div className={styles.title}>
              <h2>Portfolio</h2>
            </div>
          </Col>
          <Col lg={24} className={styles.text}>
            <div className={styles.textCenter}>
              <p>
                Quisque eu ante at tortor imperdiet gravida nec sed turpis
                phasellus augue augue.
              </p>
            </div>
            <div className={styles.btnList}>
              <Button className={styles.btn}>All</Button>
              <Button className={styles.btn}>web Design</Button>
              <Button className={styles.btn}>Responsive</Button>
              <Button className={styles.btn}>Wordpress</Button>
              <Button className={styles.btn}>Bootstrap</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={technology} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>Technology</span>
                <h4 className={styles.titleInner}>Innovative Interfaces</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={design} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>Design / Ideas</span>
                <h4 className={styles.titleInner}>101 Ideas For Phone</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={development} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>
                  Development / technology
                </span>
                <h4 className={styles.titleInner}>Arcade Life</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={creative} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>Development / Ideas</span>
                <h4 className={styles.titleInner}>Creative Mind</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={research} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>
                  Development / Technology
                </span>
                <h4 className={styles.titleInner}>Research Now</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={product} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>Design / Ideas</span>
                <h4 className={styles.titleInner}>Product Design</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={inspiration} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>Ideas / Technology</span>
                <h4 className={styles.titleInner}>Inspiration</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={growth} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>Development / Ideas</span>
                <h4 className={styles.titleInner}>Growth Strategies</h4>
              </div>
            </div>
          </Col>
          <Col lg={8} className={styles.techList}>
            <div className={styles.insideImage}>
              <div className={styles.imageItem}>
                <img src={platform} alt="technoloy" />
              </div>
              <div className={styles.itemDesc}>
                <span className={styles.postCard}>
                  Development / Technology
                </span>
                <h4 className={styles.titleInner}>Platform Integration</h4>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Portfolio;
