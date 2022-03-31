import React from "react";

import Mission from "./Mission/mission";
import Technology from "./TechnoInnovation/Technology";
import MenagementTeam from "./Management/managementTeam";

import styles from "./index.module.scss";

function AboutUs() {
  return (
    <div className={styles.aboutBg}>
      <Technology />
      <Mission />
      <MenagementTeam />
    </div>
  );
}
export default AboutUs;
