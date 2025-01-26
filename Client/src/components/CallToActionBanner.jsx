import { useNavigate } from "react-router-dom";

const CallToActionBanner = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/product");
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-purple-600 to-pink-500 text-white rounded-xl shadow-2xl overflow-hidden p-12 flex items-center justify-between">
      {/* Left Section: Text */}
      <div className="space-y-6 max-w-md">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
          Discover Our Latest <span className="text-yellow-300">Perfume</span> Collections
        </h1>
        <p className="text-lg font-medium opacity-90">
          Indulge in the world of luxury and elegance with our premium fragrances.
          Explore exclusive offers and elevate your style.
        </p>
        <button
          onClick={handleBack}
          className="bg-yellow-300 text-purple-800 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Explore Now
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="hidden lg:block">
        <img
          src="https://astranzia.com/wp-content/uploads/2022/05/9267.jpg"
          alt="Perfume Collection"
          className="h-72 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-pink-300 opacity-30 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-400 opacity-20 rounded-full blur-3xl translate-x-20 translate-y-20"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 opacity-50 rounded-full blur-2xl"></div>
    </div>
  );
};

export default CallToActionBanner;
