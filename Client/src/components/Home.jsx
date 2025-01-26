import CallToActionBanner from "./CallToActionBanner";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        {/* Home Page Content */}
        <div className="w-full max-w-7xl p-6">
          {/* Call to Action Banner */}
          <CallToActionBanner />

          {/* Additional Content */}
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome to Our Perfume Store
            </h2>
            <p className="text-gray-600 mt-2">
              Explore a wide range of premium fragrances crafted to perfection. Whether you prefer floral, musky, or citrus notes, we have something for everyone.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full bg-gray-800 text-white mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Our Perfume Store</h3>
              <p className="text-sm mt-1">
                Discover timeless elegance with our range of fragrances.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
            © {new Date().getFullYear()} Our Perfume Store. All Rights Reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
