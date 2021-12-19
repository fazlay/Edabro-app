import React from "react";

import DropDown from "./ProductDropDown";

const SideBar = ({ products, setProducts }) => {
  return (
    <div className="pl-8 h-screen">
      <div className="bg-neutral-900 t divide-y pb-8 pt-4 px-4 divide-neutral-600 rounded-lg">
        <h3 className="text-neutral-400 text-left pb-1">Filters</h3>
        <div className="pt-8">
          <DropDown products={products} setProducts={setProducts}></DropDown>
          {/* <DropDown></DropDown>
          <DropDown></DropDown> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
