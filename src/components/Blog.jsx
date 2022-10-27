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
              <summary className="py-2 outline-none  text-purple-700 cursor-pointer focus:underline">
                02. Why are you using firebase? What other options do you have
                to implement authentication?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  The Firebase Realtime Database lets you build rich,
                  collaborative applications by allowing secure access to the
                  database directly from client-side code. Data is persisted
                  locally, and even while offline, realtime events continue to
                  fire, giving the end user a responsive experience.
                </p>
                <ul>
                  <li>
                    Get Started with Firebase Authentication on Websites On this
                    page.
                  </li>{" "}
                  <li>Add and initialize the Authentication SDK.</li> (Optional)
                  Prototype and test with Firebase Local Emulator Suite. Sign up
                  new users. Sign in existing users. Set an authentication state
                  observer and get user data. Next steps.
                </ul>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                03.How does the private route work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Private Routes in React Router (also called Protected Routes)
                  require a user being authorized to visit a route (read: page).
                  So if a user is not authorized for a specific page, they
                  cannot access it. The most common example is authentication in
                  a React application where a user can only access the protected
                  pages when they are authorized (which means in this case being
                  authenticated). Authorization goes beyond authentication
                  though. For example, a user can also have roles and
                  permissions which give a user access to specific areas of the
                  application. This is a React Router tutorial which teaches you
                  how to use Private Routes with React Router 6. The code for
                  this React Router v6 tutorial can be found over here.
                </p>
              </div>
            </details>

            <details>
              <summary className="py-2 outline-none text-purple-700 cursor-pointer focus:underline">
                04. What is Node? How does Node work?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  Node.js is a JavaScript runtime environment that achieves low
                  latency and high throughput by taking a “non-blocking”
                  approach to serving requests. In other words, Node.js wastes
                  no time or resources on waiting for I/O requests to return.
                </p>
                <p>
                  Working of Node.js: Node.js accepts the request from the
                  clients and sends the response, while working with the request
                  node.js handles them with a single thread. To operate I/O
                  operations or requests node.js use the concept of threads.
                  Thread is a sequence of instructions that the server needs to
                  perform. It runs parallel on the server to provide the
                  information to multiple clients. Node.js is an event loop
                  single-threaded language. It can handle concurrent requests
                  with a single thread without blocking it for one request.
                  Node.js basically works on two concept Asynchronous
                  Non-blocking I/O
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
