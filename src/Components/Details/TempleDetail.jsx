import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Container,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import apiRequest from "../../lib/apiRequest";

const TempleDetail = () => {
  const { id } = useParams(); // Get the temple id from the URL
  const [temple, setTemple] = useState(null); // State to store temple data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  console.log(id, "id");

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
  console.log(temple, "temple data");

  // Display loading or error state
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Container maxW="container.xg" p={6}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {temple && (
        <VStack spacing={6} align="center">
          <Box
            boxShadow="lg"
            borderRadius="xl"
            border="none"
            overflow="hidden"
            width="100%"
          >
            <Center>
              <Image
                src={temple.imgUrl}
                alt={temple.title}
                objectFit="cover"
                w="90%" // You can adjust this value as needed
                h="600px"
                borderRadius="xl"
                mb={6}
              />
            </Center>
            <Heading as="h1" fontSize="4xl" textAlign="center" mb={6}>
              {temple.title}
            </Heading>
            <Box p={6}>
              {/* Iterate through the temple description and split paragraphs */}
              {temple.dec &&
                temple.dec.split("\n").map((paragraph, index) => {
                  // Check if the paragraph starts with a specific keyword (for subheading)
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
                    // Empty lines, just return a separator
                    return <Box key={index} mb={4} />;
                  } else {
                    // Default paragraphs or bullet point items
                    return (
                      <UnorderedList key={index} spacing={2} mb={4}>
                        <ListItem fontSize="lg" color="gray.700">
                          {paragraph}
                        </ListItem>
                      </UnorderedList>
                    );
                  }
                })}
            </Box>
          </Box>
        </VStack>
      )}
    </Container>
  );
};

export default TempleDetail;
