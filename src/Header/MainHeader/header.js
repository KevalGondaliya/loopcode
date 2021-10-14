import { Row, Col } from "antd";
import React from "react";
import Menubar from "../Menubar/menubar";
import styles from "./index.module.scss";

function Header() {
  let array = ["1", "-99", 3, "0", "5"];

  console.log("MaxNumbar", Math.max(...array));
  console.log("minNumbar", Math.min(...array));

  return (
    <div className={styles.mainHeader}>
      <Menubar />
    </div>
  );
}
export default Header;
