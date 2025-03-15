import React from "react";

const Inputs = ({ type, value, icon }) => {
  return (
    <div className="relative">
      <img
        src={icon}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-[25px] h-[25px]"
      />
      <input
        className="text-gray-500 border-2 border-gray-300 bg-white/60 rounded-2xl shadow-lg shadow-black/10 w-60 h-8 focus:outline-1 pl-12"
        type={type}
        placeholder={value}
      />
    </div>
  );
};

export default Inputs;
