import React from "react";

import NodeJs from "../../../image/NodeJs.svg";
import ReactJs from "../../../image/ReactJs.svg";
import ReactNative from "../../../image/ReactNative.svg";
import aws from "../../../image/aws.svg";
import Android from "../../../image/Android.svg";
import Apple from "../../../image/Apple.svg";
import GraphQl from "../../../image/GraphQl.svg";
import MySql from "../../../image/MySql.svg";

import "antd/dist/antd.css";
import styles from "./index.module.scss";

function Industries() {
  return (
    <div className={styles.industriesServe}>
      <div className={styles.industriesContainer}>
        <div className={styles.industriesTitle}>
          <h2>EXPERTISE</h2>
        </div>

        <div className={styles.industriesList}>
          <ul className={styles.industriesLink}>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={NodeJs} alt="NodeJs" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>NodeJs</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={ReactJs} alt="ReactJs" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>React</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={ReactNative} alt="ReactNative" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>React Native</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={aws} alt="aws" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>AWS</span>
              </a>
            </li>
          </ul>
          <ul className={styles.industriesLink}>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Android} alt="Android" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>android</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={Apple} alt="Apple" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>ios</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={GraphQl} alt="GraphQl" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>GraphQl</span>
              </a>
            </li>
            <li>
              <a className={styles.linkBox}>
                <div className={styles.iconBox}>
                  <span>
                    <img src={MySql} alt="MySql" className={styles.Diamond}/>
                  </span>
                </div>
                <span className={styles.iconTitle}>MySQL</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Industries;
