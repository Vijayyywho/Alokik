import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import apiRequest from "../../Lib/apiRequest";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

  console.log(id, "id");

  // Fetch beach data based on the id
  useEffect(() => {
    const fetchBeach = async () => {
      try {
        const response = await apiRequest(`/beach/${id}`); // Assuming your API has an endpoint like `/beaches/:id`
        setBeach(response.data); // Store the beach data
      } catch (err) {
        console.error("Error fetching beach data:", err);
        setError("Failed to load beach details.");
      } finally {
        setLoading(false);
      }
    };

    const handleNavigation = () => {
      window.scrollTo(0, 0); // Scroll to top
      navigate(`/beach`); // Navigate to the new beach detail page
    };

    fetchBeach();
  }, [id]); // Re-run when the beach ID changes
  console.log(beach, "beach data");

  useEffect(() => {
    // Fetch all beaches for the slider
    const fetchBeaches = async () => {
      try {
        const response = await apiRequest(`/beach`);
        setBeaches(response.data); // Store all beach data
      } catch (err) {
        console.error("Error fetching beaches:", err);
        setError("Failed to load beaches.");
      }
    };

    fetchBeaches();
  }, []);

  // Navigation handler for clicking on a beach in the swiper
  const handleNavigation = (beachId) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/beach/${beachId}`); // Navigate to the selected beach detail page
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

  console.log(beach.longitude, "location");
  return (
    <Box bg="white" p={4}>
      {/* Image Gallery */}
      <Box maxW="1500px" mx="auto" p={6}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box gridColumn={{ md: "1 / span 2" }}>
            <Image
              src={beach.urls[0]}
              alt="Campsite Main Image"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h={{ base: "250px", md: "450px" }}
            />
          </Box>
          <Box>
            <Image
              src={beach.urls[1]}
              alt="Campsite Side Image 1"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
              mb={4}
            />
            <Image
              src={beach.urls[2]}
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
          {beach.title}
          <span className="text-[#ef964c]">&nbsp;Palghar </span>
        </Heading>

        {/* Split Description into Paragraphs */}
        {splitDescription.length > 1 ? (
          <>
            <Text
              fontSize="19px"
              maxW="1200"
              p={5}
              mx="auto"
              textAlign="justify"
              color="gray.800"
            >
              {splitDescription[0]}.
            </Text>
            <Text
              fontSize="19px"
              maxW="1200"
              p={5}
              mx="auto"
              textAlign="justify"
              color="gray.800"
            >
              {splitDescription.slice(1).join(". ")}.
            </Text>
          </>
        ) : (
          <Text
            fontSize="19px"
            maxW="1200"
            p={5}
            mx="auto"
            textAlign="justify"
            color="gray.800"
          >
            {beach.description}
          </Text>
        )}
      </Box>

      {/* Steps Section */}
      <Box maxW="100%" mx="auto" padding="55px 0px ">
        <Heading
          as="h3"
          fontSize="4xl"
          mb={6}
          padding="25px"
          textAlign="center"
        >
          Activities You can Do At{" "}
          <span className="text-[#ef964c]"> {beach.title} </span>
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
            <Text fontWeight="bold" color="#ef964c" mb={2}>
              Activity
            </Text>
            <Text>{beach.activities[0]}</Text>
          </Box>
          <Box
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
            <Text>
              <Text>{beach.activities[1]}</Text>
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
            <Text fontWeight="bold" color="#ef964c" mb={2}>
              Activity
            </Text>
            <Text>{beach.activities[2]}</Text>
          </Box>
          <Box
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
            <Text>
              <Text>{beach.activities[3]}</Text>
            </Text>
          </Box>
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
          h="400px"
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
            )}!5e0!3m2!1sen!2sin!4v1733384821984!5m2!1sen!2sin`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>

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

      {/* Slider for Other Activities */}
      <Box py={8} maxW="1400px" mx="auto">
        <Heading fontSize="40px" textAlign="center" py="2%" mb={6}>
          Explore Other Beaches in{" "}
          <span className="text-[#ef964c]">Palghar</span>
        </Heading>
        <Swiper spaceBetween={20} slidesPerView={4} loop>
          {beaches.map((beachItem) => (
            <SwiperSlide key={beachItem.id}>
              <Box
                onClick={() => handleNavigation(beachItem.id)} // Navigate to the selected beach
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
                  src={beachItem.urls[0]}
                  alt={beachItem.title}
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
                  {beachItem.title}
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
