import { FaHeart } from "react-icons/fa";

const TourSinglePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="flex justify-between items-center mt-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-800 text-capitalize">
          Molokini and Turtle Town Snorkeling Adventure Aboard
        </h1>
        <button className="text-gray-500 hover:text-red-500 transition duration-200">
          <FaHeart className="w-8 h-8" />
        </button>
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
        {/* Large Image */}
        <div className="lg:col-span-2">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Main scenic view"
          />
        </div>

        {/* Smaller Images */}
        <div className="relative grid grid-cols-1 gap-2">
          <img
            className="w-full object-cover rounded-lg shadow-lg"
            src="https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Side scenic view 1"
          />
          <img
            className="w-full object-cover rounded-lg shadow-lg"
            src="https://images.pexels.com/photos/14036443/pexels-photo-14036443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Side scenic view 2"
          />
          <div className="text-center">
            <button className="absolute bottom-0 right-2 bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700">
              See all photos
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* About the Tour */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold">About the Tour</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Experience the breathtaking landscapes, rich culture, and vibrant
              nightlife of Bali. Our guided tour ensures you don't miss the best
              spots on this paradise island. From serene beaches to historic
              temples, this tour has something for everyone.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Scenic View"
            />
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Cultural Experience"
            />
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Beach"
            />
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Temple"
            />
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Sunset"
            />
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/600x400"
              alt="Adventure"
            />
          </div>

          {/* Reviews Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold">What People Say</h3>
            <div className="mt-4 space-y-6">
              <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <p className="text-gray-700">
                  "An unforgettable experience! Everything was perfectly
                  organized, and the guide was amazing."
                </p>
                <div className="mt-2 text-sm text-gray-500">- John Doe</div>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <p className="text-gray-700">
                  "Loved every moment of this trip. The cultural spots were
                  mesmerizing, and the beaches were stunning!"
                </p>
                <div className="mt-2 text-sm text-gray-500">- Jane Smith</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Booking Card */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Book Your Spot</h3>
            <p className="mt-4 text-gray-600 text-lg">
              Starting from{" "}
              <span className="font-bold text-green-600">$1200</span>
            </p>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
              Book Now
            </button>
          </div>

          {/* Highlights */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Tour Highlights</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>- Beautiful Beaches</li>
              <li>- Cultural Landmarks</li>
              <li>- Exciting Nightlife</li>
              <li>- Delicious Cuisine</li>
              <li>- Guided Adventure Activities</li>
            </ul>
          </div>

          {/* Additional Info */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Need Help?</h3>
            <p className="mt-4 text-gray-600">
              Contact our 24/7 support team for any inquiries about the tour.
            </p>
            <button className="mt-4 w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourSinglePage;
