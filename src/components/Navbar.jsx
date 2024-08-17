import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="flex justify-between items-center h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLink to="/">
          <div className="flex items-center">
            <img src="../logo.png" alt="logo" className="w-44 h-auto" />
          </div>
        </NavLink>

        <div className="flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-2xl font-semibold hover:text-yellow-400 transition duration-300"
          >
            Home
          </NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-[28px] hover:text-indigo-200 transition duration-300" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
