import React, { useState, useRef } from "react";

function Card(props) {
  const setIsOpen = props.setIsOpen;
  const OpenModal = () => {
    setIsOpen(true);
  };
  const userData = props.userData;
  const divRef = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=" relative  md:min-w-[32rem]  rounded-xl 
    border-2 border-gray-200  dark:bg-gray-800 dark:border-gray-700
     bg-black px-8 py-16 shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 30%)`,
        }}
      />
      <div className="flex gap-8 text-lg content-center z-4">
        <div className="">
          <img
            src={userData.results.picture.large}
            alt="User"
            className="rounded-lg m-[3px] border-2 sm:h-[175px]"
          ></img>
        </div>
        <div className="flex flex-col text-left text-lg self-center font-normal text-gray-700 dark:text-gray-400">
          <div className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {userData.results.name.title + " "}
            {userData.results.name.first + " "}
            {userData.results.name.last}
          </div>
          <div className="mb-0.5 ">
            {userData.results.gender === "female" ? "Female" : "Male"}
          </div>
          <div className="mb-0.5 ">{userData.results.phone}</div>
          <div className="mb-2 ">{userData.results.email}</div>
          <div>
            <div
              onClick={() => OpenModal()}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn More
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
