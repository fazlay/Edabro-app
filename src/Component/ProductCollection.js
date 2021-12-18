import React from "react";
import "../App.css";
import ProductContainer from "./ProductContainer/ProductContainer";

const ProductCollection = () => {
  return (
    <div className="leftMargin pl-4 h-screen ">
      <h1 className=" text-3xl font-semibold text-white text-left">Edovara</h1>
      <h1 className=" text-xl font-normal text-neutral-400 pt-4 text-left">
        Products
      </h1>

      <h1 className=" divide-y text-lg font-normal text-white pt-4 pb-2 text-left ">
        Products
      </h1>
      <div>
        <ProductContainer></ProductContainer>
      </div>
    </div>
  );
};

export default ProductCollection;
