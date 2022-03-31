import React from "react";

import JoinOur from "./Section1/joinOur";
import ApplyJob from "./Section2/applyjob";
import SuccessBg from "./Section3/successbg";

import styles from "./index.module.scss";

function Carrer() {
  return (
    <div className={styles.carrerBg}>
      <JoinOur />
      <ApplyJob />
      <SuccessBg />
    </div>
  );
}
export default Carrer;
