import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out p-4">
      <div className="h-52 w-full flex items-center justify-center overflow-hidden">
        <img src={post.image} alt="Product" className="h-full w-auto transition-transform object-cover duration-300 group-hover:scale-110" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{post.title}</h3>
        <p className="text-sm text-gray-600 mt-2 truncate">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-indigo-600">₹{post.price}</span>
          {
            cart.some((p) => p.id === post.id) ? (
              <button
                className="text-red-600 border-2 border-red-600 rounded-full font-semibold text-xs py-1 px-3 uppercase transition duration-300 ease-in-out hover:bg-red-600 hover:text-white" 
                onClick={removeFromCart}>Remove Item</button>
            ) : (
              <button
                className="text-green-600 border-2 border-green-600 rounded-full font-semibold text-xs py-1 px-3 uppercase transition duration-300 ease-in-out hover:bg-green-600 hover:text-white"
                onClick={addToCart}>Add to Cart</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
