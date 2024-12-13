import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Heading,
  VStack,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules"; // Import the necessary modules
import apiRequest from "../../Lib/apiRequest";
import sun from "../../../public/sun.jpg";
import sunn from "../../../public/sunn.jpg";

const BeachDetail = () => {
  const { id } = useParams(); // Get the beach id from the URL
  const [beach, setBeach] = useState(null); // State to store beach data
  const [beaches, setBeaches] = useState([]); // State to store all beaches
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Inside the component
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBeach = async () => {
      try {
        const response = await apiRequest(`/beach/${id}`);
        setBeach(response.data);
      } catch (err) {
        console.error("Error fetching beach data:", err);
        setError("Failed to load beach details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBeach();
  }, [id]);

  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const response = await apiRequest(`/beach`);
        setBeaches(response.data);
      } catch (err) {
        console.error("Error fetching beaches:", err);
        setError("Failed to load beaches.");
      }
    };

    fetchBeaches();
  }, []);

  const handleNavigation = (beachId) => {
    window.scrollTo(0, 0);
    navigate(`/beach/${beachId}`);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  // Split description into two parts for rendering
  const splitDescription = beach.description
    ? beach.description.length > 600
      ? [beach.description.slice(0, 600), beach.description.slice(200)]
      : [beach.description]
    : [];

  return (
    <Box bg="white" p={0}>
      {/* Super Slider for Small Screens */}
      <Box display={{ base: "block", md: "none" }} p={6}>
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
          className="main-slider w-full h-[250px] sm:h-[450px] mb-10 rounded-lg relative"
        >
          {/* Main Swiper Images */}
          {beach.urls.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Beach Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Image Gallery for Larger Screens */}
      <Box
        maxW="1500px"
        mx="auto"
        p={6}
        display={{ base: "none", md: "block" }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box gridColumn={{ md: "1 / span 2" }}>
            <Image
              src={beach.urls[0]}
              alt="Beach Main Image"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h={{ base: "250px", md: "450px" }}
            />
          </Box>
          <Box>
            <Image
              src={beach.urls[1]}
              alt="Beach Side Image 1"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
              mb={4}
            />
            <Image
              src={beach.urls[2]}
              alt="Beach Side Image 2"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
            />
          </Box>
        </SimpleGrid>
      </Box>

      {/* Details Section */}
      <Box bg="gray.50" py={12} px={8} borderRadius="30px">
        <Heading
          fontSize={{ base: "3xl", md: "45px" }}
          textAlign="center"
          mb={12}
          color="#000"
        >
          {beach.title} <span className="text-[#ef964c]">Palghar</span>
        </Heading>

        {/* Split Description into Paragraphs */}
        {splitDescription.length > 1 ? (
          <>
            <Text
              fontSize={{ base: "16px", md: "19px" }}
              maxW="1200px"
              p={1}
              mx="auto"
              textAlign="justify"
              color="gray.800"
            >
              {splitDescription[0]}.
            </Text>
            <Text
              fontSize={{ base: "16px", md: "19px" }}
              maxW="1200px"
              p={1}
              mx="auto"
              textAlign="justify"
              color="gray.800"
            >
              {splitDescription.slice(1).join(". ")}.
            </Text>
          </>
        ) : (
          <Text
            fontSize={{ base: "16px", md: "19px" }}
            maxW="1200px"
            p={5}
            mx="auto"
            textAlign="justify"
            color="gray.800"
          >
            {beach.description}
          </Text>
        )}
      </Box>

      {/* Activities Section */}
      <Box maxW="100%" mx="auto" padding="55px 0px ">
        <Heading
          as="h3"
          fontSize="4xl"
          mb={6}
          padding="25px"
          textAlign="center"
        >
          Activities You can Do At{" "}
          <span className="text-[#ef964c]">{beach.title}</span>
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
          justifyItems="stretch"
        >
          {beach.activities.map((activity, index) => (
            <Box
              key={index}
              p={6}
              border="1px solid"
              borderColor="#ef964c"
              borderRadius="xl"
              boxShadow="md"
              textAlign="center"
            >
              <Text fontWeight="bold" color="#ef964c" mb={2}>
                Activity
              </Text>
              <Text>{activity}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Map Section */}
      <Box py={8}>
        <Heading textAlign="center" mb={6}>
          Beach Location
        </Heading>
        <Box
          maxW="1200px"
          mx="auto"
          h={{ base: "300px", md: "400px" }}
          borderRadius="2xl"
          overflow="hidden"
        >
          <iframe
            title="Beach Map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60103.44649316179!2d${
              beach.longitude
            }!3d${
              beach.latitude
            }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d6274d544f3%3A0x89ef26a3aeff1e4f!2s${encodeURIComponent(
              beach.title
            )}!5e0!3m2!1sen!2sin`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        bg="#ef964c"
        backgroundImage={sunn}
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
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={10}
          maxW="900px"
          textAlign="center"
          mx="auto"
        >
          Ready for an Unforgettable Camping Experience?
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={12}>
          Discover the beauty of Palghar like never before. Book your spot now!
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate(`/beach/${id}/booking`)}
          mb={5}
        >
          Book Now
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
    </Box>
  );
};

export default BeachDetail;
