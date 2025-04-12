import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider.jsx";
import { assets } from "../assets/assets.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  console.log(user);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 mb-5 text-lg  ">
      <p onClick={() => navigate("/")} className="cursor-pointer w-44">
        Campus Bridge
      </p>
      <ul className="hidden gap-6 text-base font-medium md:flex">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active text-blue-500" : "")}
        >
          {" "}
          <li className="py-1 text-lg cursor-pointer">Home</li>{" "}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active text-blue-500" : "")}
        >
          {" "}
          <li className="py-1 text-lg cursor-pointer">About</li>{" "}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active text-blue-500" : "")}
        >
          {" "}
          <li className="py-1 text-lg cursor-pointer">Contact</li>{" "}
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {isAuthenticated && user ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <div className="px-1 pr-1rem rounded-full ">
              <img
                className="w-8 rounded-full"
                src={user.image}
                alt="User Profile"
              />
            </div>

            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

            <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block">
              <div className="flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/register")}
            className="hidden px-8 py-3 font-light text-white rounded-full bg-blue-600 md:block cursor-pointer"
          >
            {" "}
            Create Account{" "}
          </button>
        )}

        {/* Mobile Menu */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu Icon"
        />

        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="Logo" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Menu"
            />
          </div>

          <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p>Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p>About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p>Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
