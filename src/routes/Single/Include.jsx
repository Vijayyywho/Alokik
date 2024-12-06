import React from "react";

const WhatsIncluded = ({ selectedAmenities }) => {
  if (!selectedAmenities) {
    return null; // In case no amenities are passed
  }

  return (
    <div className="p-4 mt-6 bg-white rounded-lg max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Included Amenities Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-600">
            Included
          </h3>
          <ul className="text-sm md:text-base">
            {selectedAmenities.included?.length > 0 ? (
              selectedAmenities.included.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-800 mb-2"
                >
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-600">
                No included amenities available
              </li>
            )}
          </ul>
        </div>

        {/* Excluded Amenities Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-red-600">
            Not Included
          </h3>
          <ul className="text-sm md:text-base">
            {selectedAmenities.excluded?.length > 0 ? (
              selectedAmenities.excluded.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-800 mb-2"
                >
                  <svg
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-600">
                No excluded amenities available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
