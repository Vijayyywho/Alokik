import React from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sun from "../../../public/sun.jpg";
import ticket from "../../../public/ticket.svg";
import baloon from "../../../public/balloon.svg";
import diamond from "../../../public/diamond.svg";
import medal from "../../../public/medal.svg";
import mock from "../../../public/mock.webp";

import PhotoGallery from "./Photo";

const photos = [
  "https://hillzillwines.com/wp-content/uploads/2020/12/HillZill_Wines_Fruzzante_sparkling-alcoholic-beverages-Chiloo.jpg",
  "https://hillzillwines.com/wp-content/uploads/2021/07/HillZill_Wines_Products_Fruzzante_08.jpg",
  "https://hillzillwines.com/wp-content/uploads/2020/12/HillZill_Wines_Fruzzante_sparkling-alcoholic-beverages-Pineapple.jpg",
  "https://hillzillwines.com/wp-content/uploads/2020/12/HillZill_Wines_Fruzzante_sparkling-alcoholic-beverages-Strawberry.jpg",
  "https://hillzillwines.com/wp-content/uploads/2020/12/HillZill_Wines_Fruzzante_sparkling-alcoholic-beverages-orange.jpg",
  "https://hillzillwines.com/wp-content/uploads/2021/07/HillZill_Wines_Products_Arka_20.jpg",
  "https://hillzillwines.com/wp-content/uploads/2021/07/HillZill_Wines_Products_Arka_04.jpg",
  "https://hillzillwines.com/wp-content/uploads/2021/07/HillZill_Wines_Products_Arka_07.jpg",
];

const Wine = () => {
  const navigate = useNavigate();
  const handleRedirect = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(link); // Navigate to the specified route
  };

  return (
    <Box bg="white" p={4}>
      {/* Image Gallery */}
      <Box maxW="1500px" mx="auto" p={6}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box gridColumn={{ md: "1 / span 2" }}>
            <Image
              src="https://hillzillwines.com/wp-content/uploads/2021/07/HillZill_Wines_HomePage_HeaderImages_4.jpg"
              alt="Campsite Main Image"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h={{ base: "250px", md: "450px" }}
            />
          </Box>
          <Box>
            <Image
              src="https://hillzillwines.com/wp-content/uploads/2021/07/HillZill_Wines_Products_Arka_22.jpg"
              alt="Campsite Side Image 1"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
              mb={4}
            />
            <Image
              src="https://etimg.etb2bimg.com/photo/79461207.cms"
              alt="Campsite Side Image 2"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
            />
          </Box>
        </SimpleGrid>
        <Box mt={4} textAlign="right"></Box>
      </Box>

      {/* Details Section */}
      <Box bg="gray.50" py={12} px={8} borderRadius="30px">
        <Heading fontSize="45px" textAlign="center" mb={12} color="#000">
          Hill Zill <span className="text-[#ef964c]">Wines </span>
        </Heading>
        <Text
          fontSize="19px"
          maxW="1200"
          p={5}
          mx="auto"
          textAlign="justify"
          color="gray.800"
        >
          <strong className="text-xl  ">
            Hill Zill Wines – A Taste of Tradition in Bordi, Palghar
          </strong>
          <br /> <br />
          Located in Bordi, Palghar Hill Zill Wines is nestled in the tranquil
          coastal town of Bordi, Palghar, which is approximately 140 km north of
          Mumbai. This winery leverages the natural beauty and favorable climate
          of the region to produce a variety of wines, offering a unique
          experience for visitors interested in local wine culture.
          <br />
          <br />
          <strong className="text-xl  ">
            A Glimpse into the History of Hill Zill Wines
          </strong>{" "}
          <br /> <br />
          Founded with a vision to bring the art of winemaking to the coastal
          region of Bordi, Hill Zill Wines has become a prominent name in the
          area. The winery produces wines that reflect the essence of the
          region, using the local climate and soil to cultivate grapes that
          contribute to the distinct flavor profiles of their wines. Over the
          years, the winery has gained recognition for its craftsmanship and
          dedication to producing quality wines.
          <br />
          <br />
          <strong className="text-xl  ">
            The Location and Experience:
          </strong>{" "}
          <br /> <br />
          Bordi's scenic landscapes, with its serene beaches and surrounding
          hills, provide the perfect backdrop for a wine tour. Hill Zill Wines
          offers an inviting environment for wine lovers, tourists, and those
          looking to explore local traditions. The winery serves as a peaceful
          retreat, allowing visitors to indulge in wine tasting sessions, while
          enjoying the beauty of the area. The location's accessibility from
          Mumbai makes it a convenient getaway for wine enthusiasts. Hill Zill
          Wines in Bordi is not only a place to enjoy exquisite wines but also
          an opportunity to immerse oneself in the rich natural beauty of
          Palghar.
        </Text>
      </Box>

      {/* Map Section */}
      <Heading textAlign="center" mb={6} pt={12}>
        <span className="text-[#ef964c]">Find Hill Zill &nbsp;</span>: Location
        & Map
      </Heading>
      <div className="travel flex items-center justify-between p-10 bg-[#f0f8ff] rounded-[30px]">
        <div className="map w-1/2 h-[400px]">
          <iframe
            title="Campsite Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.421195929242!2d72.77414217523209!3d20.11646828131427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7296bd85b063d%3A0x2b8fb3b7618b1925!2sHill%20Zill%20Winery%20Resort!5e0!3m2!1sen!2sin!4v1733728330239!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Specs Section */}
        <div className="specs justify-end flex items-center gap-10 w-1/2">
          {/* Column for Diamond and Medal */}
          <div className="flex flex-col items-center gap-5">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="boxx  w-[220px] h-[220px] bg-white p-10 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={diamond}
                alt="Diamond Icon"
                className="w-[9.5rem] h-12  mb-4"
              />
              <h1 className="text-5xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="boxx w-[220px] h-[220px] bg-white p-10 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={medal}
                alt="Medal Icon"
                className="w-[9.5rem] h-12 mb-4"
              />
              <h1 className="text-5xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
          </div>

          {/* Column for Balloon */}
          <div className="flex flex-col items-center ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="boxxx w-[220px] h-[220px] bg-white p-10 text-center rounded-lg shadow-md border  hover:border-orange-500"
            >
              <img
                src={baloon}
                alt="Balloon Icon"
                className="w-[9.5rem] h-12 mb-4"
              />
              <h1 className="text-5xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
          </div>
        </div>
      </div>

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
          Ready for an Unforgettable Camping Experience?
        </Heading>
        <Text fontSize="lg" mb={12}>
          Discover the beauty of Palghar like never before. Book your spot now!
        </Text>
        <Button bg="white" _hover={{ bg: "" }} px={8} py={4}>
          Book Your Adventure
        </Button>
      </Box>

      <PhotoGallery
        photos={photos}
        title={
          <span>
            Hill Zill's{" "}
            <span style={{ color: "#ef964c" }}> Exclusive Wine </span>{" "}
            Collection
          </span>
        }
        style={{ height: "80%", objectPosition: "top" }} // This focuses the image from the top }} // Set height to 60% for the first gallery
      />
      {/* Steps Section */}
      {/* <Box maxW="100%" mx="auto" padding="55px 0px ">
        <Heading
          as="h3"
          fontSize="4xl"
          mb={6}
          padding="25px"
          textAlign="center"
        >
          Capture Your <span className="text-[#ef964c]"> Special </span>{" "}
          Ocassion
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
          justifyItems="stretch"
        >
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Pre-wedding shoot
            </Text>
            <Text>
              Make your golden period memorable and capture frames that you
              shall love all through your life
            </Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Family portrait
            </Text>
            <Text>A single frame that captures all your loved ones</Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Proposal Set
            </Text>
            <Text>
              Got a dream proposal in mind but need the perfect setting? We've
              got you covered!
            </Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Maternity & child shoot
            </Text>
            <Text>
              Come here and make your precious bond inevitable. Capturing the
              purest form of love{" "}
            </Text>
          </Box>
        </SimpleGrid>
      </Box> */}

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
    </Box>
  );
};

export default Wine;
