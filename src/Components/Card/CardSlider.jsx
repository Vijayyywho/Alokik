import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import { Box, Image, Text, Badge, HStack } from "@chakra-ui/react"; // Import components from Chakra UI
import { listData } from "../../Lib/dummydata"; // Your dummy data
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons"; // Star icon
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import "./CardSlider.scss";

const Newlist = () => {
  // Function to generate a random rating between 1 and 5
  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1; // Returns a random integer from 1 to 5
  };

  // Custom Next Arrow Component
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-next"
        style={{ display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <span className="arrow">→</span>
      </div>
    );
  };

  // Custom Previous Arrow Component
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow slick-prev"
        style={{ display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <span className="arrow">←</span>
      </div>
    );
  };

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at once
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Adjust for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Adjust for extra small screens
        },
      },
    ],
  };

  return (
    <div className="py-5">
      <h2 className="custom-padding  text-4xl font-bold mb-5 py-0 pb-5">
        Popular Resorts In <span className="spa">Mumbai</span>
      </h2>

      <Slider {...settings} style={{ padding: "0 15px" }}>
        {" "}
        {/* Add padding here */}
        {listData.map((item) => {
          const randomRating = generateRandomRating();

          return (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              mx={2} // Optional horizontal margin for additional spacing
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
      </Slider>
    </div>
  );
};

export default Newlist;
