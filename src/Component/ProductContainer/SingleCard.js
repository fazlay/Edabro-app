import React from "react";

const SingleCard = () => {
  return (
    <div className=" bg-neutral-800 m-4 w-72 p-4 rounded-lg">
      <div className=" flex ">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
          alt="tailwind logo"
          class="rounded-lg h-16"
        />
        <div className="block pl-4">
          <h1 className=" font-bold text-white">Product Name</h1>
          <h1 className="text-neutral-400">Brand Name</h1>
          <h1 className="text-white"> $422.53</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <h1 className="text-neutral-400">Location</h1>{" "}
        <h1 className="text-neutral-400">Date: 21/12/2021</h1>
      </div>
      <h1 className="text-neutral-400">Description:</h1>
    </div>
  );
};

export default SingleCard;
