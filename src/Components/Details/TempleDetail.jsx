import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css/bundle";
import baloon from "../../../public/balloon.svg";
import diamond from "../../../public/diamond.svg";
import medal from "../../../public/medal.svg";
import sunn from "../../../public/sun.jpg";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Container,
  SimpleGrid,
  Button,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import apiRequest from "../../Lib/apiRequest";
import { Autoplay, EffectFade } from "swiper/modules"; // Import the necessary modules

const TempleDetail = () => {
  const navigate = useNavigate();
  const handleRedirect = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(link); // Navigate to the specified route
  };

  const { id } = useParams(); // Get the temple id from the URL
  const [temple, setTemple] = useState(null); // State to store temple data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch temple data based on the id
  useEffect(() => {
    const fetchTemple = async () => {
      try {
        const response = await apiRequest(`/temple/${id}`); // Assuming your API has an endpoint like `/temples/:id`
        setTemple(response.data); // Store the temple data
      } catch (err) {
        console.error("Error fetching temple data:", err);
        setError("Failed to load temple details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTemple();
  }, [id]); // Re-run when the temple ID changes

  // Display loading or error state
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Container maxW="container.xg" p={2}>
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
        className="main-slider w-full sm:w-[90%] h-[250px] sm:h-[450px] mb-10 rounded-lg relative"
      >
        {/* Main Swiper Images */}
        {temple.urls.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`Temple Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Temple Name Banner */}
      <h2 className="text-black text-4xl sm:text-5xl text-center font-bold mb-4">
        {temple.title.split(" ")[0]}{" "}
        <span style={{ color: "#ef964c" }}>
          {temple.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>
      {/* Temple Description */}
      {temple && (
        <VStack spacing={6} align="center">
          <Box
            boxShadow="2xl"
            borderRadius="xl"
            border="none"
            overflow="hidden"
            mt="10"
            width="100%"
          >
            <Box p={2} px={5} pt={12}>
              {/* Iterate through the temple description and split paragraphs */}
              {temple.description &&
                temple.description.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("Subheading:")) {
                    return (
                      <Heading
                        key={index}
                        as="h3"
                        fontSize="xl"
                        color="gray.800"
                        fontWeight="bold"
                        mb={4}
                      >
                        {paragraph.replace("Subheading:", "").trim()}
                      </Heading>
                    );
                  } else if (paragraph.trim() === "") {
                    return <Box key={index} mb={4} />;
                  } else {
                    return (
                      <Box key={index} mb={4}>
                        <Text fontSize="lg" color="gray.700">
                          {paragraph}
                        </Text>
                      </Box>
                    );
                  }
                })}
            </Box>
          </Box>
        </VStack>
      )}

      {/* Map Section */}
      <Heading textAlign="center" mb={6} pt={12}>
        Navigate to the <span className="text-[#ef964c]"> Temple's &nbsp;</span>
        Location
      </Heading>
      <div className="travel flex flex-wrap items-center justify-between p-10 bg-[#f0f8ff] rounded-[30px]">
        <div className="map w-full sm:w-1/2 h-[250px] sm:h-[400px] mb-6 sm:mb-0">
          <iframe
            title="Campsite Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60103.44649316179!2d72.69003026137032!3d19.69280015036753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d6274d544f3%3A0x89ef26a3aeff1e4f!2sShirgaon%20Beach!5e0!3m2!1sen!2sin!4v1733384821984!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Specs Section */}
        <div className="specs justify-end flex flex-col sm:flex-row items-center gap-10 w-full sm:w-1/2">
          <div className="flex flex-col items-center gap-5">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="boxx w-[200px] h-[200px] bg-white p-8 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={diamond}
                alt="Diamond Icon"
                className="w-[8rem] h-12 mb-4"
              />
              <h1 className="text-4xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="boxx w-[200px] h-[200px] bg-white p-8 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={medal}
                alt="Medal Icon"
                className="w-[8rem] h-12 mb-4"
              />
              <h1 className="text-4xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
          </div>

          <div className="flex flex-col items-center ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="boxxx w-[200px] h-[200px] bg-white p-8 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={baloon}
                alt="Balloon Icon"
                className="w-[8rem] h-12 mb-4"
              />
              <h1 className="text-4xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <Box maxW="100%" mx="auto" padding="55px 0px">
        <Heading
          as="h3"
          fontSize="4xl"
          mb={6}
          padding="25px"
          textAlign="center"
        >
          Discover the Temple’s
          <span className="text-[#ef964c]"> Spiritual and Cultural </span>{" "}
          Activities
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing="5"
          p="5"
          align="center"
        >
          {temple.activities && temple.activities.length > 0 ? (
            temple.activities.map((activity, index) => (
              <Box
                key={index}
                p={6}
                borderColor="#ef964c"
                borderRadius="xl"
                boxShadow="md"
                textAlign="center"
              >
                <Text fontWeight="bold" color="#ef964c" mb={2}>
                  Activity {index + 1}:
                </Text>
                <Text>{activity}</Text>
              </Box>
            ))
          ) : (
            <Text>No activities available for this temple.</Text>
          )}
        </SimpleGrid>
      </Box>

      {/* Booking Button */}
      <Box
        bg="#ef964c"
        backgroundImage={sunn}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        mt={{ base: "5%", md: "4%" }} // Adjust margin for mobile and desktop
        py={{ base: "8%", md: "5%" }} // Adjust padding for mobile and desktop
        color="white"
        textAlign="center"
        borderRadius="8px"
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }} // Responsive font size for Heading
          mb={{ base: 6, md: 10 }} // Adjust margin for mobile and desktop
          maxW="900px"
          textAlign="center"
          mx="auto"
        >
          Ready for an Unforgettable Camping Experience?
        </Heading>
        <Text
          fontSize={{ base: "md", lg: "lg" }} // Adjust font size for mobile and desktop
          mb={{ base: 8, md: 12 }} // Adjust margin for mobile and desktop
        >
          Discover the beauty of Palghar like never before. Book your spot now!
        </Text>
        <Button
          bg="white"
          _hover={{ bg: "" }}
          px={{ base: 6, md: 8 }} // Adjust padding for mobile and desktop
          py={{ base: 3, md: 4 }} // Adjust padding for mobile and desktop
        >
          Book Your Adventure
        </Button>
      </Box>
      {/* Slider for Other Activities */}
      <Box py={8} maxW="1400px" mx="auto">
        <Heading
          fontSize={{ base: "24px", md: "30px", lg: "40px" }}
          textAlign="center"
          py="2%"
          mb={6}
        >
          Other Activities in <span className="text-[#ef964c]">Palghar</span>
        </Heading>

        <Swiper
          spaceBetween={20}
          loop
          slidesPerView={1} // Default to 1 slide per view
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide per view for small screens
            },
            768: {
              slidesPerView: 2, // 2 slides per view for medium screens (tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides per view for large screens (small laptops)
            },
            1400: {
              slidesPerView: 4, // 4 slides per view for extra large screens (desktops)
            },
          }}
        >
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
    </Container>
  );
};

export default TempleDetail;
