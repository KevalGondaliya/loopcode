import React from "react";

import Success from "../../image/career_bg_footer.png";

import styles from "./index.module.scss";

function SuccessBg() {
  return (
    <div className={styles.lastSection}>
      <img src={Success} alt="successful" />
    </div>
  );
}
export default SuccessBg;
