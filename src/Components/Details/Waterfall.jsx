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

const WaterfallsList = () => {
  const [waterfalls, setWaterfalls] = useState([]);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchWaterfalls = async () => {
      try {
        const response = await apiRequest("/waterfall"); // Use your endpoint
        setWaterfalls(response.data); // Assuming the API response is an object with a 'data' property
      } catch (error) {
        console.error("Error fetching waterfalls:", error);
      }
    };

    fetchWaterfalls();
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
        Discover Beautiful Waterfalls in{" "}
        <span style={{ color: "#ef964c" }}>Palghar</span>
      </Text>

      <SimpleGrid columns={{ base: 1 }} spacing={8} justifyItems="center">
        {waterfalls.map((waterfall) => (
          <Center key={waterfall.id} w="full">
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
              <Link to={`/waterfall/${waterfall.id}`}>
                <Image
                  src={waterfall.urls[0]}
                  alt={waterfall.title}
                  width={{ base: "100%", md: "400px" }} // Smaller width for large screens
                  height={{ base: "300px", md: "300px" }} // Rectangular height
                  objectFit="cover"
                  borderRadius="2xl"
                />
              </Link>
              <VStack align="start" spacing={4} flex="1">
                <Text fontSize="2xl" fontWeight="bold" color="#ef964c">
                  {waterfall.title}
                </Text>
                <Text noOfLines={4} color="gray.700">
                  {waterfall.description}
                </Text>
                <Link to={`/waterfall/${waterfall.id}`}>
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
        Scroll down to discover more breathtaking waterfalls.
      </Text>
    </Box>
  );
};

export default WaterfallsList;
