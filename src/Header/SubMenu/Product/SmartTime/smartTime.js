import React from "react";
import TimePro from "./Section1/timePro";
import Advantage from "./section2/advantages";
import Feature from "./Section3/features";
import RequestCall from "./Section4/requestCall";
import styles from "./index.module.scss";

function SmartTime() {
  return (
    <>
      <TimePro />
      <Advantage />
      <Feature />
      <RequestCall />
    </>
  );
}

export default SmartTime;
