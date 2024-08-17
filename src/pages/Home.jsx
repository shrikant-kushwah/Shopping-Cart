import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProductData() {
    setLoading(true);
    setError(null); // Reset error state on new fetch attempt

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Spinner />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-screen text-red-600">
          <p>{error}</p>
        </div>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl p-2 mx-auto">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
