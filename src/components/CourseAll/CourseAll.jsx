import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../SingleCourse/SingleCourse";

const CourseAll = () => {
  const AllCourses = useLoaderData();
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1">
        {AllCourses.map((course) => (
          <SingleCourse key={course.id} course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default CourseAll;
