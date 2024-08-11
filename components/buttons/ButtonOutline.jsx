import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-sky-500 text-sky-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-sky-500 hover:text-white transition-all hover:shadow-sky ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
