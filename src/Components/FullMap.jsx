import { useState, Suspense } from "react";
import { useLoaderData } from "react-router-dom"; // Import useLoaderData
import MyMap from "./Map/MyMap";

const FullMap = () => {
  const { postResponse } = useLoaderData(); // Access the postResponse from the loader
  const items = postResponse || []; // Default to an empty array if no data is available
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  // Toggle fullscreen state
  const toggleMapFullscreen = () => {
    setIsMapFullscreen(!isMapFullscreen);
  };

  return (
    <div>
      {/* Fullscreen Map */}
      {isMapFullscreen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button
            onClick={toggleMapFullscreen}
            className="absolute top-5 right-5 bg-red-500 text-white p-2 rounded-full z-60"
          >
            Close Map
          </button>
          <div className="w-full h-[100vh] bg-gray-200 flex justify-center items-center">
            <Suspense fallback={<p>Loading map...</p>}>
              <MyMap className="h-full w-full" items={items} />
            </Suspense>
          </div>
        </div>
      )}

      {/* Non-fullscreen map preview */}
      {!isMapFullscreen && (
        <div className=" h-[100vh] bg-gray-200 flex justify-center items-center">
          <Suspense fallback={<p>Loading map...</p>}>
            <MyMap className="w-full h-full" items={items} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default FullMap;
