import { Row, Col } from "antd";
import React from "react";
import Menubar from "../Menubar/menubar";
import styles from "./index.module.scss";

function Header() {
  return (
    <div className={styles.mainHeader}>
      <Menubar />
    </div>
  );
}
export default Header;
