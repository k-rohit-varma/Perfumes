import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import FullCardNavBar from "./FullCardNavBar";
import Navbar from "./NavBar";
const CardDescription = () => {
  const location = useLocation();
  const item = location.state.product;

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-100 flex p-10 space-x-10">
      {/* Left Section */}
      <div className="w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center p-3">
          <img
            src={item.Image}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {item.name}
          </h2>
          <p className="text-sm text-gray-500 mb-4">Type: {item.long_dir}</p>
          <p className="text-lg font-semibold text-gray-700 mb-2">
            Price: ${item.price}
          </p>
          <p className="text-sm text-gray-500">
            Items Left: {item.piecesAvailable}
          </p>
          <button className="bg-zinc-900 text-white px-5 py-3 mt-5 rounded-md">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/3  bg-white shadow-lg rounded-lg p-6 h-190 flex flex-col">
        <div className="flex-1">
          <Comment perfumeComment={item} />
        </div>
      </div>
    </div>
    </>
  );
};

export default CardDescription;
