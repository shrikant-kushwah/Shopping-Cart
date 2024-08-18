import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10">
      {cart.length > 0 ? (
        <div className="flex justify-between gap-x-8">
          <div className="w-[75%] space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col w-[25%] justify-between border-green-700 border-2 p-5 rounded-lg shadow-lg">
            <div>
              <h2 className="text-green-700 font-semibold text-lg">Your Cart</h2>
              <h3 className="text-green-700 font-semibold text-3xl mt-1">Summary</h3>
              <p className="text-gray-500 font-medium text-lg mt-5">Total Items: {cart.length}</p>
            </div>
            <div className="mt-5">
              <p className="text-lg">Total Amount: <span className="font-bold">₹{totalAmount.toFixed(2)}</span></p>
              <button className="bg-green-700 text-white w-full py-3 rounded-md font-bold mt-4 hover:bg-green-800 transition duration-300 ease-in-out">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
          <h1 className="text-gray-800 font-bold text-4xl mb-4 text-center">
            Your Cart is Currently Empty
          </h1>
          <p className="text-gray-500 text-lg mb-6 text-center">
            It looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
