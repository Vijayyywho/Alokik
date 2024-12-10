import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import sun from "../../../public/sun.jpg";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Autoplay, EffectFade } from "swiper/modules"; // Import the necessary modules

const mainSwiperImages = [
  "https://www.visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller17.jpg",
  "https://kshitijwaterpark.in/images/new-gallery/kshitij-gallery-7.jpeg",
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A0xrM7PaXbIrN041/manthan-front-page-YZ9X33DVpMSKR69a.jpeg",

  "https://www.visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller22.jpg",
];

const waterParks = [
  {
    name: "Great Escape Water Park",
    location: "Virar, Maharashtra",
    description:
      "Welcome to The Great Escape Waterpark, a place where fun, adventure, and nature come together to create unforgettable experiences.",
    images: [
      "https://mumbaitourism.travel/images/places-to-visit/headers/the-great-escape-water-park-mumbai-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      "https://3.imimg.com/data3/SO/KJ/IMFCP-8336518/images-great_escape-59-500x500.jpg",
      "https://www.greatescape.co.in/tge-new/assets/images/attractions/wow-pool.webp",
    ],
    link: "https://www.greatescape.co.in/?gad_source=1&gclid=Cj0KCQiA3sq6BhD2ARIsAJ8MRwXwrEv3FVj90G89qRdI9KxeZTz6yEFSIMU6XjjF0nYc8y95mom1ifkaAkcYEALw_wcB",
  },
  {
    name: "Visava Waterpark",
    location: "Palghar, Maharashtra",
    description:
      "Visava Waterpark is an ideal place within the virar for great holiday to spend with your family and friends. ",
    images: [
      "https://www.visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller17.jpg",
      "https://www.visavawaterpark.in/images/galleryImages/visavaGallery/visavaGaller22.jpg",
      "https://www.visavawaterpark.in/images/galleryImages/visavaresortVirarTopAdultsPools.jpeg",
    ],
    link: "https://www.visavawaterpark.in/",
  },
  {
    name: "Manthan Resort & Beach Park",
    location: "Virar, Palghar",
    description:
      "Our location is at Navapur Beach, Virar west, just 8 km from Virar railway station. We offer a peaceful environment & beach- touch party place in the lap of nature.  ",
    images: [
      "https://manthanresort.com/wp-content/uploads/2023/07/Untitled-design-3.jpg",
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A0xrM7PaXbIrN041/manthan-front-page-YZ9X33DVpMSKR69a.jpeg",
      "https://manthanresort.com/wp-content/uploads/2023/06/GOPR0687.jpg",
    ],

    link: "https://manthanresort.com/our-packages/",
  },
  {
    name: "Rajhans Water Park & Resort",
    location: "Virar West, Palghar",
    description:
      "Raj Hans Water Park Resort was born from a passion for hospitality and a dream to create a destination that offers a perfect blend of leisure and adventure. ",
    images: [
      "https://content.jdmagicbox.com/comp/palghar/e6/022pxx22.xx22.190515143509.t8e6/catalogue/rajhans-water-park-resort-palghar-zugh9tzg7n.jpg",
      "https://www.rajhanswaterpark.in/images/RajHansImages/RajHansWavePoolView2.jpeg",
      "https://www.rajhanswaterpark.in/images/RajHansImages/RajHansFullView9.jpeg",
    ],
  },
  {
    name: "Kshitij Waterpark And Beach Resort",
    location: "Virar, Palghar",
    description:
      "Kshitij Waterpark is a synonym to fun and masti. We welcome you to Arnala's biggest water park! Get all set to have a magical experience at the kshitij Resort. ",
    images: [
      "https://kshitijwaterpark.in/images/new-gallery/kshitij-gallery-7.jpeg",
      "https://kshitijwaterpark.in/images/new-gallery/kshitij-gallery-12.jpeg",
      "https://kshitijwaterpark.in/images/new-gallery/3.jpg",
    ],
    link: "https://kshitijwaterpark.in/",
  },
  {
    name: "D Atlantis Aqua Park And Resort",
    location: "Agashi, Palghar",
    description:
      "The D’Atlantic Aqua Park is located in serene locality of Navapur in Virar West, only 5 minutes from the beach. The D’Atlantic Aqua Park boasts a wide variety of aqua games and slides. ",
    images: [
      "https://www.datlanticaquapark.in/images/gallery/dr2.jpg",
      "https://www.datlanticaquapark.in/images/gallery/ddrr1.jpg",
      "v",
    ],
    link: "https://www.datlanticaquapark.in/index.html",
  },
];

const WaterParksComponent = () => {
  const navigate = useNavigate();
  const handleRedirect = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(link); // Navigate to the specified route
  };

  return (
    <div className="waterparks-container px-5  py-10">
      {/* Main Swiper Section */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        effect="fade"
        className="main-slider w-full h-[500px] mb-10 rounded-lg relative"
      >
        {/* Overlay and Heading */}
        <div className="absolute flex-col inset-0 bg-black bg-opacity-50 rounded-lg flex justify-center items-center z-10">
          <h2 className="text-white text-6xl font-bold">
            Discover the <span className="text-[#ef964c]">Best Waterparks</span>{" "}
            in Palghar
          </h2>
          <p className="text-white text-xl tracking-wide font-light mt-6">
            Dive into fun-filled experiences and unforgettable memories in the
            heart of Palghar.
          </p>
        </div>

        {/* Main Swiper Images */}
        {mainSwiperImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Waterpark Main Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Waterparks Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {waterParks.map((park, index) => (
          <div
            key={index}
            className="waterpark-card bg-white p-5 rounded-lg shadow-xl border-2 border-transparent hover:border-[#ef954c6c]"
          >
            <Swiper
              modules={[EffectFade]} // Removed Autoplay module
              spaceBetween={20}
              slidesPerView={1} // Set to display 3 images at a time
              loop
              className="h-60 mb-5 rounded-lg"
            >
              {park.images.map((img, i) => (
                <SwiperSlide key={`${index}-${i}`}>
                  <Link to={`${park.link}`}>
                    <img
                      src={img}
                      alt={`${park.name} - Slide ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Waterpark Information */}
            <div className="text-content space-y-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                {park.name}
              </h2>
              <p className="text-md text-gray-800">{park.location}</p>
              <p className="text-gray-700">{park.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Banner section*/}
      <Box
        bg="#ef964c"
        backgroundImage={sun}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        mt="4%"
        py="5%"
        color="white"
        textAlign="center"
        borderRadius="8px"
      >
        <Heading
          fontSize="5xl"
          mb={10}
          maxW="900px"
          textAlign="center"
          mx="auto"
        >
          Ready for an Unforgettable Travelling Experience?
        </Heading>
        <Text fontSize="lg" mb={12}>
          Discover the beauty of Palghar like never before. Book your spot now!
        </Text>
        <Button bg="white" _hover={{ bg: "" }} px={8} py={4}>
          Book Your Adventure
        </Button>
      </Box>

      {/* Slider for Other Activities */}
      <Box py={8} maxW="1400px" mx="auto">
        <Heading fontSize="40px" textAlign="center" py="2%" mb={6}>
          Other Activities in <span className="text-[#ef964c]">Palghar</span>
        </Heading>
        <Swiper spaceBetween={20} slidesPerView={4} loop>
          {[
            {
              title: "Beach Walk",
              img: "https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMuCsTZ5vPku8Ebnjoqkr2IWgLB0hJO7ZRJDGvp%3Ds1600-k-no&w=3840&q=75",
              link: "/beach",
            },
            {
              title: "Trekking",
              img: "https://assets.zeezest.com/blogs/PROD_Banner_1658501346271.jpg",
            },
            {
              title: "Water Sports",
              img: "https://media2.thrillophilia.com/images/photos/000/072/269/original/19.jpg?w=753&h=450&dpr=1.5",
            },
            {
              title: "Local Cuisine",
              img: "https://www.stayvista.com/blog/wp-content/uploads/2024/06/pexels-aditya-mara-425995080-17223836-scaled.jpg",
            },
            {
              title: "Temple Visit",
              img: "https://miro.medium.com/v2/resize:fit:12000/1*IVzNV9DpfLv4NUt93JAu0w.jpeg",
            },
          ].map((activity, index) => (
            <SwiperSlide key={index}>
              <Box
                onClick={() => handleRedirect(activity.link)}
                padding="6px"
                borderRadius="xl"
                overflow="hidden"
                border="1px solid #ef964c40"
                boxShadow="sm"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                cursor="pointer"
                transition="all 0.3s"
              >
                <Image
                  src={activity.img}
                  alt={activity.title}
                  borderRadius="10px"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Text
                  textAlign="center"
                  fontWeight="600"
                  fontSize="20px"
                  color="#ef964c"
                  py={3}
                >
                  {activity.title}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default WaterParksComponent;
