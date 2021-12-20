import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const ProductContainer = ({
  productsExtra,
  setProductsExtra,
  products,
  setProducts,
  ...rest
}) => {
  const [control, setControl] = useState(false);
  const [isDataReady, setIsDataReady] = useState(false);

  useEffect(() => {
    setIsDataReady(false);
    fetch("https://assessment-edvora.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        if (data.length < 1) {
          setControl(() => !control);
        } else {
          setProducts(data);
          setProductsExtra(data);
          setIsDataReady(true);
        }
      });
  }, [control]);

  let brands = [];
  //[brands].push(brands.brand_name)
  products.map((brand) => brands.push(brand.brand_name));
  const uniqueBrands = [...new Set(brands)];
  // console.log(uniqueBrands);

  if (!isDataReady) {
    return <p>Loading....</p>;
  }

  return (
    <>
      {uniqueBrands.map((data) => (
        <div key={Math.random()}>
          <div className=" border-bottom text-lg font-normal text-white pt-4 pb-2 text-left ">
            {data}
          </div>
          <div className="bg-neutral-900  flex rounded-xl py-4 mt-2  pl-4 content-center  ">
            <Slider data={data} products={products}></Slider>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductContainer;
