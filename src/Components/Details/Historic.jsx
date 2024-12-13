import { useEffect, useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Divider,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import apiRequest from "../../Lib/apiRequest";

const HistoricPlacesList = () => {
  const [historicPlaces, setHistoricPlaces] = useState([]);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchHistoricPlaces = async () => {
      try {
        const response = await apiRequest("/historic"); // Use your endpoint
        console.log("Fetched Data:", response.data); // Log the data to check if it's being fetched
        setHistoricPlaces(response.data); // Assuming the API response is an object with a 'data' property
      } catch (error) {
        console.error("Error fetching historic places:", error);
      }
    };

    fetchHistoricPlaces();
  }, []); // Empty dependency array to run the effect only once after the first render

  return (
    <Box p={4} minH="100vh" backgroundColor="white">
      <Text
        fontSize={{ base: "3xl", md: "5xl" }} // Responsive font size
        textAlign="center"
        my={{ base: 4, md: 8 }} // Responsive margin
        mb={{ base: 6, md: 12 }} // Bottom margin for spacing
        fontWeight="bold"
      >
        Discover Historic Places in{" "}
        <span style={{ color: "#ef964c" }}>Maharashtra</span>
      </Text>

      <SimpleGrid columns={{ base: 1 }} spacing={8} justifyItems="center">
        {historicPlaces.map((place) => (
          <Center key={place.id} w="full">
            <HStack
              spacing={6}
              flexDirection={{ base: "column", md: "row" }} // Responsive flex direction
              align="center"
              border="1px solid #e2e8f0"
              borderRadius="2xl"
              p={4}
              w="100%"
              maxW="1000px" // Keeps cards wide but not too large
              boxShadow="lg"
              _hover={{
                boxShadow: "2xl",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #ef964c",
              }}
            >
              <Link to={`/historic/${place.id}`}>
                <Image
                  src={place.urls[0]} // Assuming 'urls' is an array of image URLs for each historical place
                  alt={place.title}
                  width={{ base: "100%", md: "400px" }} // Smaller width for large screens
                  height={{ base: "300px", md: "300px" }} // Rectangular height
                  objectFit="cover"
                  borderRadius="2xl"
                />
              </Link>
              <VStack align="start" spacing={4} flex="1">
                <Text fontSize="2xl" fontWeight="bold" color="#ef964c">
                  {place.title}
                </Text>
                <Text noOfLines={4} color="gray.700">
                  {place.description}
                </Text>
                <Link to={`/historic/${place.id}`}>
                  <Text
                    color="black"
                    border="1px solid #ef964c"
                    borderRadius="10px"
                    p="1.5"
                    fontWeight="normal"
                    _hover={{
                      color: "#ef964c",
                      background: "#f0f0f0",
                      borderColor: "black",
                    }}
                  >
                    Read More
                  </Text>
                </Link>
              </VStack>
            </HStack>
          </Center>
        ))}
      </SimpleGrid>

      <Divider my={6} />
      <Text textAlign="center" fontSize="lg" color="gray.600">
        Scroll down to discover more fascinating historic places.
      </Text>
    </Box>
  );
};

export default HistoricPlacesList;
