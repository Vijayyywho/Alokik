import {
  Box,
  Image,
  Text,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    url: "https://img.freepik.com/free-vector/into-wild-background_1284-15847.jpg",
    title: "Campsites",
    link: "/camp",
  },
  {
    url: "https://img.freepik.com/free-vector/extreme-water-slide-composition_1284-66072.jpg",
    title: "WaterParks",
    link: "/waterpark",
  },
  {
    url: "https://img.freepik.com/free-vector/party-silhouettes-with-pink-lights_1048-5370.jpg",
    title: "Night Life",
    link: "/night",
  },
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-first-time-couple-illustration_23-2150608168.jpg",
    title: "Pre Wedding",
    link: "/prewedding",
  },
  {
    url: "https://img.freepik.com/free-vector/wine-bottle-concept-illustration_114360-18907.jpg",
    title: "Wines",
    link: "/wine",
  },
  {
    url: "https://img.freepik.com/free-vector/kitesurfing-abstract-concept-vector-illustration-kiteboarding-parachute-water-sport-flying-adventure-wind-speed-extreme-fun-action-camera-freestyle-trick-freedom-abstract-metaphor_335657-4277.jpg?t=st=1733913326~exp=1733916926~hmac=c25322596a00bc2a321a6f9103f277718ed7e257b827fdca98927fcfaead55af&w=740",
    title: "Paragliding",
    link: "/paragliding",
  },
];

const ImageGallery = ({ title }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (link) => {
    navigate(link);
    scrollToTop();
  };

  // Determine image size and grid columns based on screen size
  const boxSize = useBreakpointValue({ base: "90px", md: "110px" });
  const columns = useBreakpointValue({ base: 3, md: 3 });
  const showText = useBreakpointValue({ base: false, md: true });

  return (
    <Box pt={8} my={10}>
      <Text
        fontSize={{ base: "2xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
        color="black"
      >
        {title}
      </Text>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        textAlign="center"
        pt={5}
        pb={10}
        color="black"
      >
        From Adventure to Relaxation
      </Text>
      <SimpleGrid columns={columns} spacing={4}>
        {images.map((image, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            display="flex"
            borderRadius="full"
            boxShadow="xl"
            border="1px solid lightgray"
            _hover={{
              cursor: "pointer",
              transform: "scale(1.02)",
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
              boxSize={boxSize}
              borderRadius="full"
            />

            {/* Overlay (hidden on small screens) */}
            {showText && (
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
              >
                <Text
                  fontSize="lg"
                  fontWeight="semibold"
                  color="black"
                  textAlign="center"
                >
                  {image.title}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ImageGallery;
