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
const TemplesList = () => {
  const [temples, setTemples] = useState([]);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const response = await apiRequest("/temple"); // Use your endpoint
        setTemples(response.data); // Assuming the API response is an object with a 'data' property
      } catch (error) {
        console.error("Error fetching temples:", error);
      }
    };

    fetchTemples();
  }, []); // Empty dependency array to run the effect only once after the first render

  return (
    <Box p={5} minH="100vh" backgroundColor="white">
      <Text fontSize="5xl" textAlign="center" my={8} mb={50} fontWeight="bold">
        Explore Some Famous Temples of{" "}
        <span style={{ color: "#ef964c" }}>Palghar.</span>
      </Text>

      <SimpleGrid columns={{ base: 1 }} spacing={8} justifyItems="center">
        {temples.map((temple) => (
          <Center key={temple.id} w="full">
            <HStack
              spacing={6}
              flexDirection="row"
              align="center"
              border="1px solid #e2e8f0"
              borderRadius="2xl"
              p={6}
              w="80%"
              maxW="1000px" // Keeps cards wide but not too large
              boxShadow="lg"
              _hover={{
                boxShadow: "2xl",
                transition: "all 0.3s ease-in-out",
                border: "1px solid #ef964c",
              }}
            >
              <Link to={`/temple/${temple.id}`}>
                <Image
                  src={temple.urls[0]}
                  alt={temple.title}
                  boxSize="450px"
                  height="300px"
                  objectFit="cover"
                  borderRadius="2xl"
                />
              </Link>
              <VStack align="start" spacing={4} flex="1">
                <Text fontSize="2xl" fontWeight="bold" color="#ef964c">
                  {temple.title}
                </Text>
                <Text noOfLines={4} color="gray.700">
                  {temple.description}
                </Text>
                <Link to={`/temple/${temple.id}`}>
                  <Text
                    color="teal.300"
                    fontWeight="semibold"
                    _hover={{ color: "teal.500" }}
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
        Scroll down to explore more temples and their history.
      </Text>
    </Box>
  );
};

export default TemplesList;
