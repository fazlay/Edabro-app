import React from "react";

const SingleCard = ({ product }) => {
  const { product_name, brand_name, discription, price } = product;
  //  (product);
  return (
    <div className=" bg-neutral-800 w-72 p-4 rounded-lg">
      <div className=" flex ">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          alt="tailwind logo"
          className="rounded-lg h-16"
        />
        <div className="block pl-4">
          <h1 className=" font-bold text-white">{product_name}</h1>
          <h1 className="text-neutral-400">{brand_name}</h1>
          <h1 className="text-white"> $ {price}</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="text-neutral-400">Location</h1>{" "}
        <h1 className="text-neutral-400">Date: 21/12/2021</h1>
      </div>
      <h1 className="text-neutral-400">Description: {discription}</h1>
    </div>
  );
};

export default SingleCard;
