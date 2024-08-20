import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="flex justify-between items-center h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          <div className="flex items-center">
            <img src="../logo.png" alt="logo" className="w-36 h-auto lg:w-44" /> {/* Corrected logo import */}
          </div>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={isMenuOpen ? "text-yellow-400" : ""}>
            &#9776;
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-lg font-semibold hover:text-yellow-400 transition duration-300"
          >
            Home
          </NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-yellow-400 transition duration-300" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 z-10">
            <NavLink
              to="/"
              className="text-lg font-semibold hover:text-yellow-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/cart"
              className="relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart className="text-2xl hover:text-yellow-400 transition duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
