import { Box, Text, Image, VStack, Link } from "@chakra-ui/react";

const TouristAttractions = ({ attractions }) => {
  return (
    <Box p={5} minH="100vh" backgroundColor="white">
      <Text fontSize="4xl" textAlign="center" my={8} fontWeight="bold">
        Explore Famous Tourist Attractions in{" "}
        <span style={{ color: "#ef964c" }}>Maharashtra</span>
      </Text>

      <VStack spacing={10} align="stretch">
        {attractions.map((attraction, index) => (
          <Box
            key={attraction.id}
            border="1px solid #e2e8f0"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
          >
            <Image
              src={attraction.image}
              alt={attraction.title}
              width="100%"
              height="250px"
              objectFit="cover"
            />
            <Box p={5}>
              <Text fontSize="xl" fontWeight="bold" color="#ef964c">
                {attraction.title}
              </Text>
              <Text noOfLines={3} color="gray.700" my={3}>
                {attraction.description}
              </Text>
              <Link
                href={attraction.link}
                color="teal.300"
                fontWeight="semibold"
                _hover={{ color: "teal.500", textDecoration: "underline" }}
              >
                Read More
              </Link>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default TouristAttractions;
