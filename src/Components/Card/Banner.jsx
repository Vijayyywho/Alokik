import React from "react";
import "./Banner.scss";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    title: "Temples",
    imageUrl:
      "https://kelvalushgreen.com/wp-content/uploads/2017/01/Ashapuri-Temple-1.jpg",
    colSpan: "md:col-span-2",
    rowSpan: "row-span-2",
    link: "/temple",
  },
  {
    title: "Historic Places",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/85/da/be/caption.jpg?w=900&h=-1&s=1",
    colSpan: "md:col-span-1",
    rowSpan: "row-span-1",
    link: "/historic-places",
  },
  {
    title: "Waterfalls",
    imageUrl: "https://live.staticflickr.com/7087/7047250115_197668e1d5_b.jpg",
    colSpan: "md:col-span-1",
    rowSpan: "row-span-2",
    link: "/waterfalls",
  },
  {
    title: "Beaches",
    imageUrl: "https://konkanguide.com/admin/img/Chinchani%20beach-1.jpg",
    colSpan: "md:col-span-1",
    rowSpan: "row-span-1",
    link: "/beach",
  },
  {
    title: "Food",
    imageUrl:
      "https://i.pinimg.com/736x/17/5a/02/175a02ed299ad17d49684569c6b58d61.jpg",
    colSpan: "md:col-span-1",
    rowSpan: "row-span-1",
    link: "/food",
  },
];

const TourGrid = () => {
  const navigate = useNavigate();
  const handleRedirect = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(link); // Navigate to the specified route
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">
          Experience the <span className="text-[#ef964c]"> Best </span> of
          Palghar!
        </h2>
        <p className="text-center text-md mb-12 text-[#747272]">
          From serene beachfront escapes and luxurious mountain retreats to
          family-friendly resorts.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tours.map((tour, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 ${tour.colSpan} ${tour.rowSpan}`}
            >
              <img
                src={tour.imageUrl}
                alt={tour.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-30 flex justify-start items-end p-4"
                onClick={() => handleRedirect(tour.link)}
                style={{ cursor: "pointer" }}
              >
                <h3 className="text-white text-xl font-normal">{tour.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGrid;
