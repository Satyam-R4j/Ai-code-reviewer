import React from "react";
import { TrendingUpDown } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div
        className="nav flex justify-between items-center  h-[90px] bg-zinc-900 "
        style={{ padding: "0px 150px" }}
      >
        <div className="logo flex items-center gap-2">
          {" "}
          <TrendingUpDown size={30} color="#10B981" />
          <span className="text-2xl  text-white ">
            <span className="text-2xl font-bold text-gray-400 ">Code</span>
            <span className="text-2xl font-semibold  bg-green-700 rounded-lg text-black ">Clarify</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
