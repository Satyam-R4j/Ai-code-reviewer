import React from "react";
import { TrendingUpDown } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="nav flex justify-between items-center  h-[90px] bg-zinc-900 " style={{padding:"0px 150px"}}>
        <div className="logo">
          {" "}
          <TrendingUpDown size={30} color="#10B981"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
