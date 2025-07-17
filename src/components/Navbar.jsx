import React from "react";
import { TrendingUpDown, Sun } from "lucide-react";


const Navbar = () => {
  return (
    <>
      <div
        className="nav flex justify-around items-center  h-[90px] bg-zinc-900 "
        style={{ padding: "0px 150px" }}
      >
        <div className="logo flex items-center gap-2">
          {" "}
          <TrendingUpDown size={25} color="#10B981" />
          <span className="text-2xl font-['JetBrains_Mono']   text-white ">
            <span className="text-2xl font-semibold   text-gray-300 ">
              Code
            </span>
            <span className="text-2xl font-bold  bg-green-700  rounded-md text-gray-900 ">
              Clarify
            </span>
          </span>
        </div>
        <div className="icons flex items-center gap-[20px]">
          
          <i className="cursor-pointer transition-all hover:text-[#10B981]">
            <Sun />
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
