import CallToActionBanner from "./CallToActionBanner";

const Home = () => {
  return (
    <>
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Home Page Content */}
      <div className="w-full max-w-7xl p-6">
        {/* Call to Action Banner */}
        
        <CallToActionBanner />

        {/* Additional Content (Optional) */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to Our Perfume Store
          </h2>
          <p className="text-gray-600 mt-2">
            Explore a wide range of premium fragrances crafted to perfection. Whether you prefer floral, musky, or citrus notes, we have something for everyone.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
