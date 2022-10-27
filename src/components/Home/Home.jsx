import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import LeftBar from "../LeftBar/LeftBar";
import Statistics from "../Statistics";
const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className=" h-full p-4 bg-purple-500 grid grid-cols-4 gap-4 ">
        <div className="col-span-1 bg-slate-300 ">
          <LeftBar></LeftBar>
        </div>
        <div className="col-span-3 bg-purple-400 ">
          <Outlet></Outlet>
        </div>
      </div>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
