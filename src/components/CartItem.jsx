import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className="flex mb-5 mt-5 border-b-2 border-black py-5 px-5">
      <div className="h-[180px] min-w-[180px]" >
        <img src={item.image} alt="" className="h-full w-full" />
      </div>
      <div className="px-5">
        <h1  className="text-gray-900 font-semibold text-lg text-left  w-full mt-1">{item.title}</h1>
        <h1  className="w-full text-gray-600 font-normal text-[15px] text-left mt-4">{item.description}</h1>
        <div className="flex justify-between mt-5">
        <div>
          <p  className="text-gray-900 font-bold text-xl">₹{item.price}</p>
        </div>
        <div className="w-36 justify-center items-center" 
        onClick={removeFromCart}>
         <button
            onClick={removeFromCart}
            className="text-red-600 border border-red-600 rounded-full py-2 px-4 text-sm font-semibold uppercase transition duration-300 ease-in-out hover:bg-red-600 hover:text-white"
          >
            Remove Item
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
