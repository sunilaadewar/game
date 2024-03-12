import React from "react";
import { Link } from "react-router-dom";

export const IntroScreen1 = () => {
  return (
    <>
      <p>IntroScreen1</p>
      <Link
        to={"/intro2"}
        className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        Start
      </Link>
    </>
  );
};
