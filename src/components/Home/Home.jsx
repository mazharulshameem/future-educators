import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import LeftBar from "../LeftBar/LeftBar";
const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className=" min-h-screen p-16 bg-purple-500 grid grid-cols-4 grid-rows-4 gap-4 ">
        <div className="col-span-1 bg-slate-100">
          <LeftBar></LeftBar>
        </div>
        <div className="col-span-3 bg-gray-300">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
