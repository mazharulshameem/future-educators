import React from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../LeftBar/LeftBar";

const Courses = () => {
  return (
    <div>
      <div></div>
      <div className=" p-16 bg-purple-500 grid grid-cols-4 grid-rows-4 gap-4 ">
        <div className="col-span-1 bg-slate-300">
          <LeftBar></LeftBar>
        </div>
        <div className="col-span-3 bg-slate-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Courses;
