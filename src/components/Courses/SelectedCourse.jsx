import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SelectedCourse = () => {
  const selectedCourse = useLoaderData();
  console.log(selectedCourse);
  const { title, details, instructor, rating, img, thumbnail, price } =
    selectedCourse;

  return (
    <div>
      <div className="flex flex-col max-w-lg p-6  bg-red-400 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">
          <img
            alt=""
            src={img}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {instructor}
            </a>
            <div className="flex ">
              <FaStar className="text-purple-500"></FaStar>
              <span className="text-xs dark:text-gray-400">{rating}</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <p className="text-sm dark:text-gray-400">{details}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button className="flex">
              <span className=" text-2xl">$</span>{" "}
              <h3 className="text-2xl">{price}</h3>
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-400">
            <button
              type="button"
              className="flex items-center  py-2 px-4 text-lg text-white  bg-black hover:bg-white hover:text-black  p-1 space-x-1.5"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCourse;
