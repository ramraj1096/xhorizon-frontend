import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  UserCircle,
  LogOut,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { AuthContext } from "../auth/AuthProvider.jsx";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Doctors", path: "/all-doctors" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between py-4 px-6 mb-5 bg-white shadow-sm sticky top-0 z-30 border-b border-blue-500">
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-blue-500 text-3xl font-bold tracking-tight cursor-pointer"
      >
        MediConnect
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-base font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {isAuthenticated && user ? (
          <div className="relative group flex items-center gap-2 cursor-pointer">
            {/* Avatar or Icon */}
            {user.image ? (
              <img
                src={user.image}
                alt="User"
                className="w-9 h-9 rounded-full border-2 border-blue-500 object-cover"
              />
            ) : (
              <UserCircle className="w-8 h-8 text-blue-600" />
            )}

            {/* Dropdown Icon */}
            <ChevronDown className="w-4 h-4 text-gray-500" />

            {/* Dropdown */}
            <div className="absolute right-0 top-12 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-48 py-3 px-4 z-50">
              <button
                onClick={() => navigate("/my-profile")}
                className="flex items-center gap-2 text-gray-700 hover:text-black"
              >
                <UserCircle className="w-5 h-5" />
                My Profile
              </button>
              <button
                onClick={() => navigate("/my-appointments")}
                className="flex items-center gap-2 text-gray-700 hover:text-black"
              >
                <Calendar className="w-5 h-5" />
                My Appointments
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-red-600 hover:text-red-800"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/register")}
            className="cursor-pointer hidden md:block px-5 py-2 rounded-full bg-blue-900 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <Menu
          className="w-6 h-6 text-gray-700 md:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* Mobile Drawer Menu */}
      {showMenu && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2
              onClick={() => {
                navigate("/");
                setShowMenu(false);
              }}
              className="text-xl font-semibold text-blue-600 cursor-pointer"
            >
              MediConnect
            </h2>
            <X
              className="w-6 h-6 text-gray-700 cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          </div>

          <ul className="flex flex-col gap-5 px-6 py-6 text-lg font-medium text-gray-800">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setShowMenu(false)}
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
            {!isAuthenticated && (
              <li>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setShowMenu(false);
                  }}
                  className="w-full mt-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Create Account
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
