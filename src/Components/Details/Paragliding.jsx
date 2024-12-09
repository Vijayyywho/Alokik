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

import PhotoGallery from "./Photo";

const photos = [
  "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/322583026_1906191973063838_7805012442530849157_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vwXjWUrtZscQ7kNvgGm5w8D&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=A9qdZvL40qBos4pjRWmpuVp&oh=00_AYAYLgtdcVCeiguxRFhX6dGGQpr2uJWkioLVBn6lGwgRkA&oe=675C6B3C",
  "https://scontent.fbom20-1.fna.fbcdn.net/v/t39.30808-6/320811422_6088783684489676_7591698778509650908_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iYmBAMn4SCEQ7kNvgHryV6M&_nc_zt=23&_nc_ht=scontent.fbom20-1.fna&_nc_gid=Aktr0aImcEpEpxAPIgmnsl0&oh=00_AYDxQnUIveY7cly1ULhqz5Zf6OXEfCMS_-SjemyN6tS9Aw&oe=675C85FC",
  "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/279712774_5469395949739172_9162443475917798132_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=S2-1NvZ06NwQ7kNvgFWzn7E&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=A6AWCYLnIaHxRbMUhKYpfTh&oh=00_AYDfhhRS1tQsahIMggWGAFBwRSv3I_O2xChf62RA9zlC6g&oe=675C7E05",
  "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/278134937_5408728325805935_1598172610424814468_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=FdUatUqbc1sQ7kNvgH6W_6w&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=Aw5DiLkYHckBuO_xss0aGMX&oh=00_AYAypkju13gBZYbLj45nJnay7MlpBKYzWrtgL71nUwkEUg&oe=675C7665",
  "https://scontent.fbom20-1.fna.fbcdn.net/v/t39.30808-6/276139908_5352845354727566_247773432058608560_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=_f8swT_vIOkQ7kNvgHZnccY&_nc_zt=23&_nc_ht=scontent.fbom20-1.fna&_nc_gid=AO7Qxzw03PBV2le2hvFkENt&oh=00_AYCUJrAviKUaRJG6IfQPoM4IPQatt1nj9ApFkVttqe_0ug&oe=675C7AC7",
  "https://scontent.fbom20-2.fna.fbcdn.net/v/t1.6435-9/148664298_4074794882532626_8724403024566489003_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2jJxfmSsdS4Q7kNvgGkIiuO&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=A9e8xDE4MvaxLw23_X8RBPp&oh=00_AYDNhLLHWWl_UZnU1A1RuSW5Lry70_WCRKcD7jNFvDhEaQ&oe=677E17B9",
  "https://scontent.fbom20-1.fna.fbcdn.net/v/t1.6435-9/101558174_3374374679241320_7495327799731375038_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=AFAXbQEmix8Q7kNvgHvxYhq&_nc_zt=23&_nc_ht=scontent.fbom20-1.fna&_nc_gid=A6vMmpOQT4Xk7nWPHR7Itlf&oh=00_AYAaLw9r_Pe2UOAJdtXN3itFxGZRjV4VGCjpYXgbgLS6AA&oe=677E24DF",
  "https://scontent.fbom20-2.fna.fbcdn.net/v/t1.6435-9/49657228_2314824561863009_1020758553385762816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=yIsHWTrSDmYQ7kNvgEHihTT&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=AcJ0ICAXSNB8coAxvjfVaLC&oh=00_AYBZIAM4WfnsFbX9VELHSGFK1Xqj1eTkWPHLL8oAsCnOhg&oe=677E39AF",
];

const Paragliding = () => {
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
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/b5/8a/27/space-apple.jpg?w=1200&h=900&s=1"
              alt="Campsite Main Image"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h={{ base: "250px", md: "450px" }}
            />
          </Box>
          <Box>
            <Image
              src="https://imgmedia.lbb.in/media/2021/01/5ffc13f88cb26612da73a12a_1610355704831.jpg"
              alt="Campsite Side Image 1"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="220px"
              mb={4}
            />
            <Image
              src="https://media2.thrillophilia.com/images/photos/000/227/412/original/1586865395_25MPAEROSPORTS6.jpg?"
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
          SpaceApple <span className="text-[#ef964c]">Paragliding </span>
        </Heading>
        <Text
          fontSize="19px"
          maxW="1200"
          p={5}
          mx="auto"
          textAlign="justify"
          color="gray.800"
        >
          <strong className="text-xl  ">
            Overview of Spaceapple Paragliding, Virar
          </strong>
          <br /> <br />
          Spaceapple Paragliding, located in Virar, offers a thrilling
          experience for adventure enthusiasts looking to explore the skies.
          Known for its picturesque aerial views, this paragliding service takes
          you soaring over the lush greenery, hills, and rivers of the region.
          It provides a peaceful yet exhilarating experience as you glide
          through the open air, giving you a chance to enjoy the natural beauty
          of Virar from above.
          <br />
          <br />
          <strong className="text-xl  ">
            Experience for All Skill Levels
          </strong>{" "}
          <br /> <br />
          Whether you're a first-time flyer or a seasoned adventurer, Spaceapple
          Paragliding caters to all levels of experience. For beginners, they
          offer tandem flights, where you'll be paired with a skilled instructor
          who ensures a safe and smooth journey. For more experienced
          paragliders, there are solo flying options available. The professional
          instructors are highly trained and provide a detailed pre-flight
          briefing to ensure your safety and comfort.
          <br />
          <br />
          <strong className="text-xl  ">
            Group Bookings and Special Occasions
          </strong>{" "}
          <br /> <br />
          Spaceapple Paragliding is also a great option for group bookings,
          making it an excellent choice for corporate outings, celebrations, or
          group adventures. Whether you're looking to mark a special occasion or
          simply enjoy a day of adventure with friends or colleagues, Spaceapple
          ensures a memorable and safe experience for everyone involved. With
          top-notch equipment and a commitment to safety, Spaceapple Paragliding
          in Virar offers an unforgettable aerial adventure.
        </Text>
      </Box>

      {/* Map Section */}
      <Heading textAlign="center" mb={6} pt={12}>
        <span className="text-[#ef964c]">Find Hill Zill &nbsp;</span>: Location
        & Map
      </Heading>
      <div className="travel flex items-center justify-between p-10 bg-[#f0f8ff] rounded-[30px]">
        <div className="map w-1/2 h-[400px]">
          <iframe
            title="Campsite Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8691388422476!2d72.77083837521513!3d19.461208081824367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa4172aeadff%3A0xe1bc082907a6c1a!2sSpace%20Apple%20Paramotoring%20Training%20%26%20Joyrides!5e0!3m2!1sen!2sin!4v1733735328021!5m2!1sen!2sin"
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

      <PhotoGallery
        photos={photos}
        title={
          <span>
            Explore the Thrills of{" "}
            <span style={{ color: "#ef964c" }}> Spaceapple Paragliding</span>
          </span>
        }
        style={{ height: "90%", objectPosition: "top" }} // This focuses the image from the top
      />

      {/* Steps Section */}
      {/* <Box maxW="100%" mx="auto" padding="55px 0px ">
        <Heading
          as="h3"
          fontSize="4xl"
          mb={6}
          padding="25px"
          textAlign="center"
        >
          Capture Your <span className="text-[#ef964c]"> Special </span>{" "}
          Ocassion
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
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Pre-wedding shoot
            </Text>
            <Text>
              Make your golden period memorable and capture frames that you
              shall love all through your life
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
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Family portrait
            </Text>
            <Text>A single frame that captures all your loved ones</Text>
          </Box>
          <Box
            p={6}
            border="1px solid"
            borderColor="#ef964c"
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
          >
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Proposal Set
            </Text>
            <Text>
              Got a dream proposal in mind but need the perfect setting? We've
              got you covered!
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
            <Text fontSize="2xl" fontWeight="600" color="#ef964c" mb={2}>
              Maternity & child shoot
            </Text>
            <Text>
              Come here and make your precious bond inevitable. Capturing the
              purest form of love{" "}
            </Text>
          </Box>
        </SimpleGrid>
      </Box> */}

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

export default Paragliding;
