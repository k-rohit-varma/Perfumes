import { useNavigate, NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-pink-600 text-white p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 bg-white text-purple-700 font-semibold px-4 py-2 rounded-full hover:bg-purple-100 transition shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Brand Name */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white">
            Perfume Haven
          </span>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold ${
                isActive
                  ? "text-yellow-300 underline decoration-wavy"
                  : "text-white hover:text-yellow-300"
              } transition`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `font-semibold ${
                isActive
                  ? "text-yellow-300 underline decoration-wavy"
                  : "text-white hover:text-yellow-300"
              } transition`
            }
          >
            Products
          </NavLink>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mt-2 h-1 bg-gradient-to-r from-yellow-300 to-pink-500 rounded-full"></div>
    </nav>
  );
};

export default Navbar;
