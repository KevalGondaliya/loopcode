import React from "react";
import { Row, Col } from "antd";
import Diamond from "../../../image/industries/diamond.png";
import Jewellery from "../../../image/industries/jewellery.png";
import RealEstate from "../../../image/industries/real-estate.png";
import Manufacturing from "../../../image/industries/manufacturing.png";
import Ecommerce from "../../../image/industries/ecommerce.png";
import Agriculture from "../../../image/industries/agriculture.png";
import Printing from "../../../image/industries/printing-lab.png";
import Textile from "../../../image/industries/textile.png";
import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Industries() {
  return (
    <div className={styles.industriesServe}>
      <div className={styles.industriesContainer}>
        <div className={styles.industriesTitle}>
          <h2>EXPERTISE INDUSTRIES WE SERVE</h2>
        </div>

        <div className={styles.industriesList}>
          <ul className={styles.industriesLink}>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Diamond} alt="Diamond" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Diamond</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Jewellery} alt="Jewellery" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Jewellery</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={RealEstate} alt="RealEstate" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Real Estate</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Manufacturing} alt="Manufacturing" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Manufacturing</span>
              </a>
            </li>
          </ul>
          <ul className={styles.industriesLink}>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Ecommerce} alt="Ecommerce" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Ecommerce</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Agriculture} alt="Agriculture" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Agriculture</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Printing} alt="Printing Lab" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Printing Lab</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Textile} alt="Textile" />
                  </span>
                </div>
                <span className={styles.iconTitle}>Textile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Industries;
