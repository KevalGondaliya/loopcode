import React from "react";
import Services from "./Section1/services";
import Blog from "./Section2/blog";
import styles from "./index.module.scss";

function Methodology() {
  return (
    <div className={styles.methodologyBg}>
      <Services />
      <Blog />
    </div>
  );
}

export default Methodology;
