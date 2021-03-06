import React, { useEffect, useState } from "react";

const ProductDropDown = ({ productsExtra, products, setProducts }) => {
  const [uniqueProductsName, setUniqueProductsName] = useState("");
  // console.log(products);

  //---------------------------------------------------------------------------Drop Down event Handler
  const handleChange = (e) => {
    // console.log(e.target.value);
    const result = productsExtra.filter(
      (product) => product.product_name === e.target.value
    );
    console.log(result);
    setProducts(result);
    e.preventDefault();
  };

  //---------------------------------------------------------------------------Drop Down Genarator
  let productsName = [];
  products.map((name) => productsName.push(name.product_name));
  const newProducts = [...new Set(productsName)];
  useEffect(() => {
    setUniqueProductsName(newProducts);
  }, []);

  // setUniqueProductsName(newProducts);
  // console.log(newProducts);
  return (
    <div>
      <div className="relative inline-flex py-1">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            // fill-rule="nonzero"
          />
        </svg>
        <select
          onChange={handleChange}
          className=" rounded text-white h-10 pl-5 pr-10 bg-neutral-800 hover:bg-gray-800 focus:outline-none appearance-none"
        >
          {uniqueProductsName &&
            uniqueProductsName.map((product) => <option>{product}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ProductDropDown;
