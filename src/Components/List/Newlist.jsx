import React, { useState } from "react";
import { Box, Image, Text, Badge, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import "./List.scss";

const Newlist = ({ items = [], itemsPerPage = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1); // Initial page is 1

  const totalPages = Math.ceil(items.length / itemsPerPage); // Calculate total pages

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate which items to show on the current page
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to generate a random rating between 1 and 5
  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1; // Returns a random integer from 1 to 5
  };

  // Check if items are available
  if (!items.length) {
    return <p>No items available</p>;
  }

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 2fr))"
        gap={6}
        mt={10}
      >
        {currentItems.map((item) => {
          const randomRating = generateRandomRating();

          return (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              transition="box-shadow 0.2s ease-in-out"
              _hover={{ boxShadow: "lg" }}
            >
              <Link to={`/list/${item.id}`}>
                <Image
                  src={item.images[0]}
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
                <Link to={`/list/${item.id}`}>
                  <Box
                    mt="5"
                    mb="2"
                    color="#000"
                    fontWeight="normal"
                    as="h4"
                    lineHeight="tight"
                    fontSize="19px"
                  >
                    {item.title}
                  </Box>
                </Link>
                <Box color="#000" fontWeight="700" fontSize="20px">
                  ₹{item.price}/night
                </Box>
                <Box mt="2">
                  <Text fontSize="18px" color="#505050">
                    {item.address}
                  </Text>
                </Box>
                <HStack mt="2">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      color={index < randomRating ? "#ef964c" : "gray.300"}
                    />
                  ))}
                </HStack>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Pagination Controls */}
      <Box textAlign="center" mt={6}>
        <Button
          fontSize="15px"
          fontWeight="400"
          backgroundColor="#ef964c"
          color="#fff"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          fontSize="15px"
          fontWeight="400"
          backgroundColor="#ef964c"
          color="#fff"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default Newlist;
