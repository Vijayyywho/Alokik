import React from "react";
import { Box, Image, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const images = [
  {
    url: "https://img.freepik.com/free-vector/into-wild-background_1284-15847.jpg?t=st=1733381306~exp=1733384906~hmac=aeee1c66b79046966603389ce53abc781d8f0e3c80e0cd40deb2665efbda95fc&w=740",
    title: "Campsites",
    link: "/camp",
  },
  {
    url: "https://img.freepik.com/free-vector/extreme-water-slide-composition_1284-66072.jpg?t=st=1733382634~exp=1733386234~hmac=68428daadf927dbda44ee28e031b63e1d9649cd0836370eb23d45f16c3d85514&w=740",
    title: "WaterParks",
    link: "/waterpark",
  },
  {
    url: "https://img.freepik.com/free-vector/party-silhouettes-with-pink-lights_1048-5370.jpg?t=st=1733382665~exp=1733386265~hmac=928f0af1502f30ceaef10ffa2d1a86569acb422c52b8dee84dd3b5c26fe0bc4f&w=740",
    title: "Night Life",
    link: "/night",
  },
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-first-time-couple-illustration_23-2150608168.jpg?t=st=1733381573~exp=1733385173~hmac=020da71aaa21146c8be8c697e91c035596ed55c5e01996d56e673a3db24780bd&w=740",
    title: "Pre Wedding",
    link: "/prewedding",
  },
  {
    url: "https://img.freepik.com/free-vector/wine-bottle-concept-illustration_114360-18907.jpg?t=st=1733381712~exp=1733385312~hmac=31ed4991c7e717078ec5eb0d59c0a7367e891bc65a8733922a34e59f415d72d7&w=740",
    title: "wines",
    link: "/wine",
  },
  {
    url: "https://img.freepik.com/free-vector/kitesurfing-abstract-concept-vector-illustration-kiteboarding-parachute-water-sport-flying-adventure-wind-speed-extreme-fun-action-camera-freestyle-trick-freedom-abstract-metaphor_335657-4277.jpg?t=st=1733381828~exp=1733385428~hmac=3c8cce2adc30abb5d7b40f12ae1fdf13b983cb29eb3aa7702a96c96d5bb4c740&w=740",
    title: "Paragliding",
    link: "/paragliding",
  },
];

const ImageGallery = ({ title }) => {
  const navigate = useNavigate();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (link) => {
    navigate(link);
    scrollToTop();
  };

  return (
    <Box pt={8} my={10}>
      <h1 className="text-5xl font-bold text-center ">{title}</h1>
      <h3 className=" text-center pt-5 pb-10">From Adventure to Relaxation </h3>
      <SimpleGrid columns={[2, 3]} spacing={6}>
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            borderRadius="full" // Fully rounded images
            boxShadow="xl"
            border="1px solid lightgray"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.01)",
              transition: "all 0.3s ease-in-out",
              boxShadow: "xl",
              border: "1px solid #ef964c",
            }}
            onClick={() => handleLinkClick(image.link)}
          >
            {/* Image */}
            <Image
              src={image.url}
              alt={image.title}
              objectFit="cover"
              boxSize="110px" // Smaller images
              borderRadius="full" // Fully rounded
            />

            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="10"
              width="100%"
              height="100%"
              opacity="1"
              _hover={{
                opacity: "1",
                transition: "opacity 0.3s ease-in-out",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full" // Matches the rounded style
            >
              <Text
                fontSize="xl"
                fontWeight="sm"
                color="black"
                textAlign="center"
              >
                {image.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;
