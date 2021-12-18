import React from "react";
import "../App.css";
import ProductContainer from "./ProductContainer/ProductContainer";

const ProductCollection = () => {
  return (
    <div className="leftMargin pl-4 h-full ">
      <h1 className=" text-3xl font-semibold text-white text-left">Edovara</h1>
      <h1 className=" text-xl font-normal text-neutral-400 pt-4 text-left">
        Products
      </h1>

    
      <div>
        <ProductContainer></ProductContainer>
      </div>
    </div>
  );
};

export default ProductCollection;
