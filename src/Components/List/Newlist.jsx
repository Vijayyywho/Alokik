import React, { useState } from "react";
import { Box, Image, Text, Badge, Button, HStack } from "@chakra-ui/react"; // Import HStack for layout
import { listData } from "../../Lib/dummydata";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons"; // Import StarIcon for stars
import "./List.scss";

const Newlist = () => {
  const [visibleItems, setVisibleItems] = useState(6); // Initially show 6 items

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); // Show 3 more items
  };

  // Function to generate a random rating between 1 and 5
  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1; // Returns a random integer from 1 to 5
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
        gap={6}
      >
        {listData.slice(0, visibleItems).map((item) => {
          // Generate a random rating for each item
          const randomRating = generateRandomRating();

          return (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              transition="box-shadow 0.2s ease-in-out" // Smooth transition
              _hover={{ boxShadow: "lg" }} // Slight shadow on hover
            >
              <Link to={`/${item.id}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                />
              </Link>

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {item.bedroom} Beds
                  </Badge>
                  <Badge borderRadius="full" px="2" ml={2} colorScheme="orange">
                    {item.bathroom} Baths
                  </Badge>
                </Box>
                <Link to={`${item.id}`}>
                  <Box
                    mt="5"
                    mb="2"
                    color="#000"
                    fontWeight="normal"
                    as="h4"
                    lineHeight="tight"
                    fontSize="19px" // Updated title font size
                  >
                    {item.title}
                  </Box>
                </Link>
                <Box color="#000" fontWeight="700" fontSize="20px">
                  ₹{item.price}/night {/* Updated price font size */}
                </Box>

                <Box mt="2">
                  <Text fontSize="18px" color="#505050">
                    {item.address}
                  </Text>
                </Box>

                {/* Random Star Rating */}
                <HStack mt="2">
                  {/* Generate filled stars and empty stars based on random rating */}
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < randomRating ? "teal.500" : "gray.300"} // Filled star or empty star
                    />
                  ))}
                </HStack>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* View More Button */}
      {visibleItems < listData.length && (
        <Box textAlign="center" mt={6}>
          <Button
            fontSize="15px"
            fontWeight="400"
            className="btn"
            colorScheme="teal"
            onClick={handleViewMore}
          >
            View More
          </Button>
        </Box>
      )}
    </>
  );
};

export default Newlist;
