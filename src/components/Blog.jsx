import React from "react";

const Blog = () => {
  return (
    <div className="">
      <section className="dark:bg-teal-400 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-12 lg:px-16 xl:px-32 divide-teal-700">
            <details open="">
              <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                01. What is Cors ?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Cross-origin resource sharing is a mechanism that allows
                  restricted resources on a web page to be requested from
                  another domain outside the domain from which the first
                  resource was served. A web page may freely embed cross-origin
                  images, stylesheets, scripts, iframes, and videos.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none  text-purple-700 cursor-pointer focus:underline"></summary>
              <div className="px-4 pb-4">
                <p></p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline"></summary>
              <div className="px-4 pb-4 space-y-2">
                <p></p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
