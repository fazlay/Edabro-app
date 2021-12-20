import React from "react";
import CityDropDown from "./CityDropDown";

import ProductDropDown from "./ProductDropDown";
import StateDropDown from "./StateDropDown";

const SideBar = ({ productsExtra, products, setProducts }) => {
  return (
    <div className="pl-8 h-screen">
      <div className="bg-neutral-900 t divide-y pb-8 pt-4 px-4 divide-neutral-600 rounded-lg">
        <h3 className="text-neutral-400 text-left pb-1">Filters</h3>
        <div className="pt-8">
          <ProductDropDown
            productsExtra={productsExtra}
            products={products}
            setProducts={setProducts}
          ></ProductDropDown>
          <StateDropDown
            productsExtra={productsExtra}
            products={products}
            setProducts={setProducts}
          ></StateDropDown>
          <CityDropDown
            productsExtra={productsExtra}
            products={products}
            setProducts={setProducts}
          ></CityDropDown>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
