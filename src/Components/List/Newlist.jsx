import { useState, useEffect, useRef } from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const Newlist = ({ items = [], itemsPerPage = 8, isLoading = false }) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const loaderRef = useRef(null);

  // Function to generate a random rating between 1 and 5
  const generateRandomRating = () => Math.floor(Math.random() * 5) + 1;

  useEffect(() => {
    const handleScroll = () => {
      if (
        loaderRef.current &&
        loaderRef.current.getBoundingClientRect().top <= window.innerHeight
      ) {
        setVisibleItems((prev) => Math.min(prev + itemsPerPage, items.length));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, itemsPerPage]);

  // Skeleton loader placeholders
  const skeletonPlaceholders = Array.from({ length: itemsPerPage }).map(
    (_, index) => (
      <Box
        key={index}
        borderWidth="1px"
        borderRadius="2xl"
        overflow="hidden"
        p={3}
        transition="box-shadow 0.2s ease-in-out"
        _hover={{ boxShadow: "lg" }}
      >
        <Skeleton height="250px" borderRadius="2xl" />
        <Box p="2">
          <SkeletonText mt="4" noOfLines={1} spacing="4" />
          <SkeletonText mt="2" noOfLines={1} spacing="2" />
          <Skeleton mt="4" height="20px" width="50%" />
        </Box>
      </Box>
    )
  );

  // Check if items are available
  if (!items.length && !isLoading) {
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
        {isLoading
          ? skeletonPlaceholders
          : items.slice(0, visibleItems).map((item) => {
              const randomRating = generateRandomRating();

              return (
                <Box
                  key={item.id}
                  borderWidth="1px"
                  borderRadius="2xl"
                  overflow="hidden"
                  p={3}
                  transition="box-shadow 0.2s ease-in-out"
                  _hover={{ boxShadow: "lg" }}
                >
                  <Link to={`/list/${item.id}`}>
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width="100%"
                      height="250px"
                      borderRadius="2xl"
                      objectFit="cover"
                    />
                  </Link>

                  <Box p="2">
                    <Box display="flex" alignItems="baseline" pt="3">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        {item.bedroom} Beds
                      </Badge>
                      <Badge
                        borderRadius="full"
                        px="2"
                        ml={2}
                        colorScheme="orange"
                      >
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
                        fontSize="18px"
                      >
                        {item.title}
                      </Box>
                    </Link>
                    <Box color="#000" fontWeight="700" fontSize="18px">
                      ₹{item.price}/night
                    </Box>
                    <Box mt="2">
                      <Text fontSize="16px" color="#505050">
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

      {/* Loader for Infinite Scrolling */}
      {visibleItems < items.length && !isLoading && (
        <Box ref={loaderRef} textAlign="center" mt={4}>
          <Text>Loading more resorts...</Text>
        </Box>
      )}
    </>
  );
};

export default Newlist;
