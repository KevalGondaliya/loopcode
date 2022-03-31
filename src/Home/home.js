import React from "react";

import Banner from "./Content/Banner/banner";
import Product from "./Content/Product-section/product";
import Industries from "./Content/Industries/industries";
// import ThenksMessage from "./Content/CEOLoopcode/thanksMessage";
import SuccessfulProduct from "./Content/SuccessfulProduct/SuccessfulProduct";

function Home() {
  return (
    <div>
      <Banner />
      <Product />
      <SuccessfulProduct />
      <Industries />
      {/* <ThenksMessage /> */}
    </div>
  );
}

export default Home;
