import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <h1 className="text-2xl font-bold text-violet-800">Assessment</h1>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex font-bold flex-col items-center gap-1">
          <p>Task 1</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/tasktwo" className="flex font-bold flex-col items-center gap-1">
          <p>Task 2</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/taskthree" className="flex font-bold flex-col items-center gap-1">
          <p>Task 3</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/taskfour" className="flex font-bold flex-col items-center gap-1">
          <p>Task 4</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/taskfive" className="flex font-bold flex-col items-center gap-1">
          <p>Task 5</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
