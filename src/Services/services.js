import React from "react";

import Provide from "./Section1/provide";
import OurHistory from "./Section3/ourHistory";
import OurServices from "./Section2/ourServices";

function Services() {
  return (
    <div>
      <Provide />
      <OurServices />
      <OurHistory />
    </div>
  );
}

export default Services;
