import { FcDeleteDatabase } from "react-icons/fc"
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
        <h1  className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h1  className="w-full text-gray-400 font-normal text-[15px] text-left mt-4">{item.description}</h1>
        <div className="flex justify-between mt-5">
        <div>
          <p  className="text-green-600 font-semibold">{item.price}</p>
        </div>
        <div className="w-6 h-6" 
        onClick={removeFromCart}>
          <FcDeleteDatabase className="w-full h-full"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
