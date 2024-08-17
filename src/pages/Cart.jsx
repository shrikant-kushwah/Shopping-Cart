import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0 ));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ? (
          <div className="flex justify-between gap-x-5 max-w-6xl mx-auto mt-10 mb-10">
            <div className="w-[75%]">
            {
              cart.map( (item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />
              })
            }
            </div>

            <div className="flex flex-col w-[25%] justify-between border-green-700 border-2 py-5 px-2" >
              <div className="pl-2">
                <div className="text-green-700 font-semibold text-lg text-left truncate mt-1">Your Cart</div>
                <div className="text-green-700 font-semibold text-3xl text-left truncate mt-1">Summary</div>
                <p className="mt-5">
                  <span   className="text-gray-500 font-medium text-lg text-left truncate">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="w-full">
              <p className="text-lg pl-2">Total Amount: <span className="font-bold">{totalAmount}</span></p>
              <button className="bg-green-700 text-white w-full mx-auto px-3 py-2 rounded-md font-bold mt-4">
                CheckOut Now
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
  <Link to={"/"}>
    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out">
      Shop Now
    </button>
  </Link>
</div>

        )
      }
    </div>
  );
};

export default Cart;
