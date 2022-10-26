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
      <h4>Categories: {categories.length}</h4>
      <div className="">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/home/courses/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
