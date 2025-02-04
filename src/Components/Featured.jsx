import React from "react";
import { FaHotel, FaHome, FaTree } from "react-icons/fa"; // Importing React icons

const categories = [
  {
    name: "Hotels",
    icon: <FaHotel size={30} className="text-gray-500" />,
    description: "Find the best hotels in Palghar",
  },
  {
    name: "Resorts",
    icon: <FaTree size={30} className="text-gray-500" />,
    description: "Explore beautiful resorts",
  },
  {
    name: "Villas",
    icon: <FaHome size={30} className="text-gray-500" />,
    description: "Luxurious villas to stay in",
  },
  {
    name: "Campsites",
    icon: <FaTree size={30} className="text-gray-500" />,
    description: "Enjoy camping in nature",
  },
];

const Featured = () => {
  return (
    <div>
      <div className="top mt-8 p-3">
        <h1 className="text-5xl text-[#ef964c] font-bold max-w-[50%] mt-5">
          Featured Categories
        </h1>
        <p className="text-xl mt-4">Find the best place to chill in Palghar</p>
      </div>
      <div className="bottom">
        <div className="cards flex items-center mt-8 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="cardd group flex flex-col justify-start pt-[4rem] border h-[180px] w-[300px] items-start pl-6 rounded-2xl border-[#dddada] hover:bg-[#ef964c]"
            >
              <div className="icon">{category.icon}</div>
              <h2 className="text-2xl font-bold text-[#ef964c] group-hover:text-white">
                {category.name}
              </h2>
              <p className="text-md text-gray-600 group-hover:text-white">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
