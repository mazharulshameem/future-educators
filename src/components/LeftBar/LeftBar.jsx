import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="">
      <div className="">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="block border border-purple-900 bg-teal-400 lg:text-xl md:text-sm text-white hover:bg-black py-2 px-2 "
              to={`/home/courses/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
