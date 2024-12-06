import React from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sun from "../../../public/sun.jpg";
import ticket from "../../../public/ticket.svg";
import baloon from "../../../public/balloon.svg";
import diamond from "../../../public/diamond.svg";
import medal from "../../../public/medal.svg";
import mock from "../../../public/mock.webp";

const Night = () => {
  const navigate = useNavigate();
  const handleRedirect = (link) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(link); // Navigate to the specified route
  };

  return (
    <Box bg="white" p={4}>
      {/* Image Gallery */}
      <Box maxW="1500px" mx="auto" p={6}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box gridColumn={{ md: "1 / span 2" }}>
            <Image
              src="https://lh3.googleusercontent.com/W7HQyADZ-HbmIXfupXfjUr0yfYeffaLyX1lSfdOUhfGj1tmq3ygpVIXOSaaFhkFNi8XtuZErvf2ti2uGD7Qz2xHACveNaZQUkCUa16o=h450-rw"
              alt="Campsite Main Image"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h={{ base: "250px", md: "450px" }}
            />
          </Box>
          <Box>
            <Image
              src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2023-07/New%20restaurant.jpg"
              alt="Campsite Side Image 1"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
              mb={4}
            />
            <Image
              src="https://gaslamp.org/wp-content/uploads/2021/08/img_7374_optimized.jpeg"
              alt="Campsite Side Image 2"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
            />
          </Box>
        </SimpleGrid>
        <Box mt={4} textAlign="right"></Box>
      </Box>

      {/* Details Section */}
      <Box bg="gray.50" py={12} px={8} borderRadius="30px">
        <Heading fontSize="45px" textAlign="center" mb={12} color="#000">
          Camping in Palghar: A{" "}
          <span className="text-[#ef964c]">Unique Experience</span>
        </Heading>
        <Text
          fontSize="19px"
          maxW="1200"
          p={5}
          mx="auto"
          textAlign="justify"
          color="gray.800"
        >
          <strong className="text-xl  ">Explore Nature’s Serenity :</strong>
          <br /> <br /> Camping in Palghar offers an escape from the hustle and
          bustle of city life, allowing you to immerse yourself in the pristine
          beauty of nature. Surrounded by lush greenery, serene beaches, and
          tranquil hills, Palghar is a haven for adventure seekers and peace
          lovers alike. The calm environment, combined with the gentle breeze
          and scenic sunsets, makes it an ideal destination for camping
          enthusiasts.
          <br />
          <br />
          <strong className="text-xl  ">
            A Blend of Adventure and Relaxation :
          </strong>{" "}
          <br /> <br />
          Whether you’re trekking through dense forests, exploring hidden
          trails, or simply gazing at the starlit sky, Palghar promises an
          unforgettable camping experience. The region boasts a unique
          combination of natural landscapes, with coastal beauty and rugged
          terrains offering opportunities for activities like bonfires, beach
          walks, and hiking. For those who seek relaxation, unwinding by the
          campfire or meditating amidst nature's sounds creates a rejuvenating
          atmosphere.
          <br />
          <br />
          <strong className="text-xl  ">
            Perfect for All Travelers :
          </strong>{" "}
          <br /> <br />
          Palghar is an excellent destination for solo adventurers, families,
          and groups of friends looking to create cherished memories. It’s a
          perfect blend of adventure and comfort, with several campsites
          providing facilities like cozy tents, local cuisine, and guided tours.
          Whether you're planning a weekend getaway or a longer vacation,
          camping in Palghar offers an enriching experience that combines
          adventure, culture, and the raw beauty of the outdoors.
        </Text>
      </Box>

      {/* Map Section */}
      <Heading textAlign="center" mb={6} pt={12}>
        <span className="text-[#ef964c]">Palghar&nbsp;</span>Camping Escapes:
        Find Your Peace!
      </Heading>
      <div className="travel flex items-center justify-between p-10 bg-[#f0f8ff] rounded-[30px]">
        <div className="map w-1/2 h-[400px]">
          <iframe
            title="Campsite Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60103.44649316179!2d72.69003026137032!3d19.69280015036753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d6274d544f3%3A0x89ef26a3aeff1e4f!2sShirgaon%20Beach!5e0!3m2!1sen!2sin!4v1733384821984!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Specs Section */}
        <div className="specs justify-end flex items-center gap-10 w-1/2">
          {/* Column for Diamond and Medal */}
          <div className="flex flex-col items-center gap-5">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="boxx  w-[220px] h-[220px] bg-white p-10 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={diamond}
                alt="Diamond Icon"
                className="w-[9.5rem] h-12  mb-4"
              />
              <h1 className="text-5xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="boxx w-[220px] h-[220px] bg-white p-10 text-center rounded-lg shadow-md border hover:border-orange-500"
            >
              <img
                src={medal}
                alt="Medal Icon"
                className="w-[9.5rem] h-12 mb-4"
              />
              <h1 className="text-5xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
          </div>

          {/* Column for Balloon */}
          <div className="flex flex-col items-center ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="boxxx w-[220px] h-[220px] bg-white p-10 text-center rounded-lg shadow-md border  hover:border-orange-500"
            >
              <img
                src={baloon}
                alt="Balloon Icon"
                className="w-[9.5rem] h-12 mb-4"
              />
              <h1 className="text-5xl font-bold text-orange-500 mb-2">240</h1>
              <p className="text-gray-700">Total Destination</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <Box maxW="100%" mx="auto" padding="55px 0px ">
        <Heading
          as="h3"
          fontSize="4xl"
          mb={6}
          padding="25px"
          textAlign="center"
        >
          How to Plan Your <span className="text-[#ef964c]"> Camping </span>{" "}
          Trip
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
          justifyItems="stretch"
        >
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontWeight="bold" color="#ef964c" mb={2}>
              Step 1:
            </Text>
            <Text>Choose your campsite and book your slot in advance.</Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontWeight="bold" color="#ef964c" mb={2}>
              Step 2:
            </Text>
            <Text>
              Pack your essentials, including tents and sleeping bags.
            </Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontWeight="bold" color="#ef964c" mb={2}>
              Step 3:
            </Text>
            <Text>Arrive early to set up and enjoy the scenic beauty.</Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontWeight="bold" color="#ef964c" mb={2}>
              Step 4:
            </Text>
            <Text>
              Participate in campfire activities and explore nearby spots.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        bg="#ef964c"
        backgroundImage={sun}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        mt="4%"
        py="5%"
        color="white"
        textAlign="center"
        borderRadius="8px"
      >
        <Heading
          fontSize="5xl"
          mb={10}
          maxW="900px"
          textAlign="center"
          mx="auto"
        >
          Ready for an Unforgettable Camping Experience?
        </Heading>
        <Text fontSize="lg" mb={12}>
          Discover the beauty of Palghar like never before. Book your spot now!
        </Text>
        <Button bg="white" _hover={{ bg: "" }} px={8} py={4}>
          Book Your Adventure
        </Button>
      </Box>

      {/* Slider for Other Activities */}
      <Box py={8} maxW="1400px" mx="auto">
        <Heading fontSize="40px" textAlign="center" py="2%" mb={6}>
          Other Activities in <span className="text-[#ef964c]">Palghar</span>
        </Heading>
        <Swiper spaceBetween={20} slidesPerView={4} loop>
          {[
            {
              title: "Beach Walk",
              img: "https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMuCsTZ5vPku8Ebnjoqkr2IWgLB0hJO7ZRJDGvp%3Ds1600-k-no&w=3840&q=75",
              link: "/beach",
            },
            {
              title: "Trekking",
              img: "https://assets.zeezest.com/blogs/PROD_Banner_1658501346271.jpg",
            },
            {
              title: "Water Sports",
              img: "https://media2.thrillophilia.com/images/photos/000/072/269/original/19.jpg?w=753&h=450&dpr=1.5",
            },
            {
              title: "Local Cuisine",
              img: "https://www.stayvista.com/blog/wp-content/uploads/2024/06/pexels-aditya-mara-425995080-17223836-scaled.jpg",
            },
            {
              title: "Temple Visit",
              img: "https://miro.medium.com/v2/resize:fit:12000/1*IVzNV9DpfLv4NUt93JAu0w.jpeg",
            },
          ].map((activity, index) => (
            <SwiperSlide key={index}>
              <Box
                onClick={() => handleRedirect(activity.link)}
                padding="6px"
                borderRadius="xl"
                overflow="hidden"
                border="1px solid #ef964c40"
                boxShadow="sm"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                cursor="pointer"
                transition="all 0.3s"
              >
                <Image
                  src={activity.img}
                  alt={activity.title}
                  borderRadius="10px"
                  w="100%"
                  h="200px"
                  objectFit="cover"
                />
                <Text
                  textAlign="center"
                  fontWeight="600"
                  fontSize="20px"
                  color="#ef964c"
                  py={3}
                >
                  {activity.title}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Night;
