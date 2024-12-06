import React from "react";
import Slider from "react-slick";
import { Box, Image, Text, Badge, HStack } from "@chakra-ui/react";
import { listData } from "../../Lib/dummydata";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.scss";

const Newlist = () => {
  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5">
      <h2 className="custom-padding  text-3xl font-bold mb-5 py-0 pb-5">
        Popular Resorts In <span className="spa">Mumbai</span>
      </h2>

      <Slider {...settings} style={{ padding: "0" }}>
        {" "}
        {listData.map((item) => {
          const randomRating = generateRandomRating();

          return (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              mx={2}
              transition="box-shadow 0.2s ease-in-out"
              _hover={{ boxShadow: "lg" }}
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
                      color={index < randomRating ? "teal.500" : "gray.300"}
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
