import React, { useState } from "react";
import "./Palghar.scss";
import { motion } from "framer-motion";
import Slider from "react-slick";
import AnimatedDiv from "../AnimateDiv";
import { FaPlay } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Footer from "../Footer/Footer";
import ImageGallery from "../Details/ImgActivity";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { title } from "process";

const ExplorePalghar = ({ title }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Popular");

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseClick = () => {
    setIsVideoPlaying(false);
  };

  const tabs = ["Popular", "Temples", "Nature", "Beaches", "Historic"];

  const tabImages = {
    Popular: [
      {
        url: "https://kelvalushgreen.com/wp-content/uploads/2017/01/ganda-creak-sunset.jpg",
        title: "Danda Khadi Bridge",
      },
      {
        url: "https://cdn.s3waas.gov.in/s3a9a1d5317a33ae8cef33961c34144f84/uploads/bfi_thumb/2020110966-oy5o9e8oq9xa160awj0rodwsd3e590sak8xqo05e2y.jpg",
        title: "Shirgaon Fort",
      },
      {
        url: "https://kelvalushgreen.com/wp-content/uploads/2017/01/Ashapuri-Temple-1.jpg",
        title: "Ashapuri Temple Edwan",
      },
      {
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/85/da/be/caption.jpg?w=900&h=-1&s=1",
        title: "Jai Vilas Palace Jawhar",
      },
    ],
    Temples: [
      {
        url: "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/465111372_7996643547101944_6804445444004103775_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SKyAsE1pZSEQ7kNvgFPgXC5&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=AsDar6whCLULyEw7_vHqnjw&oh=00_AYB18hS0qodnuMs6h8eQmBVRmCWc4OHyHFc7cYrvb8EqaA&oe=675485EE",
        title: "Mahalaxmi Temaple Dahanu",
      },
      {
        url: "https://www.jivdanidevi.com/jivdani-mata-photo/jivdani-mandir-mountain.JPG",
        title: "Jivdani Temple Virar",
      },
      {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3UtvwZ1JG7sn4WJODxnr37yTXEama_lFz0wviw7vOrJTFHormkej3CPeNqNBAkRDxzJV5GX7DRTgkZIqwaypCwTn6fHuhfgSxEGzrOkqXl1khVeIkwOg-gJvLPBuYTLA4wTW5tRw95Jp-/s1600/ecovillage3.jpg",
        title: "Govardhan Eco Village",
      },
      {
        url: "https://kelvalushgreen.com/wp-content/uploads/2017/01/Shitladevi-temple-kelva-beach.jpg",
        title: "Shitladevi Temple",
      },
    ],
    Nature: [
      {
        url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/fa/f8/61/fun.jpg",
        title: "Kelve Dam",
      },
      {
        url: "https://lh5.googleusercontent.com/p/AF1QipPiQaVjlse9vv4Wpk_s_uB8QXmxSeEGN13z8F0D=w675-h390-n-k-no",
        title: "Tungareshwar Wildlife Sanctuary",
      },
      {
        url: "https://lh5.googleusercontent.com/p/AF1QipOnRYXz62VwR4LdgW07afh4i2JXstgTOb_5d5XB=w675-h390-n-k-no",
        title: "Surya Dam",
      },
      {
        url: "https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/269591765_2074088569418929_2782041559785027075_n.jpg?stp=dst-jpg_p843x403_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=di1G_olW7g0Q7kNvgHSUHF5&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=A1qZu8MolABiZ6F7eaTXnYF&oh=00_AYD_EUynb8m0rltXelQywKEovLJgrAnzUoYXvlWF0ZCknQ&oe=675478D6",
        title: "Kalmandavi Waterfall Jawhar",
      },
      {
        url: "https://www.shutterstock.com/image-photo/dabhosa-waterfalls-jawhar-600nw-506988895.jpg",
        title: "Dhabosa Waterfall Jawhar",
      },
    ],
    Historic: [
      {
        url: "https://www.tourmyindia.com/images/vasai-fort-maharashtra1.jpg",
        title: "Vasai Fort",
      },
      {
        url: "https://www.tripnight.com/public/thumbs/monuments/8417/DzVdJx40bstR_468_738.jpg",
        title: "Arnala Fort",
      },
      {
        url: "https://sceneloc8.com/wp-content/uploads/2024/03/3-88.png",
        title: "Shirgaon Fort",
      },
    ],
    Beaches: [
      {
        url: "https://im.rediff.com/getahead/2024/jan/16beach-shirgaon.jpg",
        title: "Shirgaon Beach",
      },
      {
        url: "https://konkanguide.com/admin/img/Chinchani%20beach-1.jpg",
        title: "Chinchani Beach",
      },
      {
        url: "https://c.ndtvimg.com/2022-03/12l3dam_car_625x300_10_March_22.jpg",
        title: "Bordi Beach",
      },
      {
        url: "https://sceneloc8.com/wp-content/uploads/2024/03/kelva-beach-3.png",
        title: "Kelve Beach",
      },
      {
        url: "https://sandee.com/_next/image?url=https%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMuCsTZ5vPku8Ebnjoqkr2IWgLB0hJO7ZRJDGvp%3Ds1600-k-no&w=3840&q=75",
        title: "Nandgaon Beach",
      },
      {
        url: "https://r1imghtlak.mmtcdn.com/0698ec7a98f111eb95ee0242ac110002.jpg",
        title: "Navapur Beach Virar",
      },
    ],
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="explore">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="heading"
      >
        <h1>Visit Palghar</h1>
        <p>Ready For A Holiday? Here's a list of things to do in Palghar</p>
      </motion.div>

      {/* Title and Tabs */}
      <div className="tabs-section">
        <h2>Top Places to Visit</h2>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel for Images */}
      <div className="tab-content">
        <Slider {...sliderSettings}>
          {tabImages[activeTab]?.map((image, index) => (
            <div key={index} className="carousel-slide">
              <div className="image-container">
                <img src={image.url} alt={`${activeTab} ${index + 1}`} />
                <div className="overlay">
                  <h3 className="image-title">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* About Palghar Section */}
      <section className="history-palghar">
        <div className="history-container">
          <div className="history-text">
            <h2>History of Palghar</h2>
            <p>
              Palghar, a serene coastal district in Maharashtra, India, is a
              blend of natural beauty, cultural heritage, and traditional charm.
              Located just a few hours from Mumbai, it offers a tranquil escape
              with its pristine beaches, lush greenery, and historic sites. The
              district is home to vibrant tribal communities, whose art and
              culture add a unique flavor to the region. Attractions like Kelva
              Beach, Shirgaon Fort, and the famous Tarapur Atomic Power Station
              highlight its diversity, blending nature, history, and modernity.{" "}
              <br />
              <br />
              Known for its agricultural richness, Palghar thrives on the
              cultivation of chikoo (sapota), a key export. It is also dotted
              with temples and festivals that reflect its spiritual essence. The
              easygoing vibe, coupled with its scenic landscapes, makes Palghar
              an emerging destination for those seeking peace and a connection
              to nature away from the hustle of urban life.
            </p>
          </div>
          <div className="history-image">
            <img
              src="https://media.istockphoto.com/id/1408852412/photo/palghar-india-25-february-2022-picture-of-palghar-railway-station-along-with-its-board.jpg?s=612x612&w=0&k=20&c=yBKAUtW4bSB4VEwDKT3q0UubQFLD2o76aIqR5Um39TY="
              alt="History of Palghar"
            />
          </div>
        </div>
      </section>

      <ImageGallery title="Must try expriences in Palghar. " />

      <AnimatedDiv>
        <div className="video">
          {!isVideoPlaying ? (
            <div className="play" onClick={handlePlayClick}>
              <FaPlay size={40} color="#000" cursor="pointer" />
            </div>
          ) : (
            <div className="video-player">
              <div className="close" onClick={handleCloseClick}>
                <FaTimes size={30} color="#000" cursor="pointer" />
              </div>
              <iframe
                width="1300"
                height="515"
                src="https://www.youtube.com/embed/C5zVf93beqc?si=xHSi3wiO0-sDjdl0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </AnimatedDiv>

      {/* Bento Grid Section */}
      <section className="bento-grid">
        <h2>
          Explore More About <span>Palghar</span>{" "}
        </h2>
        <p>
          Discover Palghar's beaches, temples, nature, and rich culture. There's
          something for everyone!
        </p>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://thumbs.dreamstime.com/b/indian-tribal-painting-warli-painting-style-maharashtra-india-58209695.jpg"
              alt="Warli Art - A Timeless Tradition"
            />
            <h3>Warli Art - A Timeless Tradition</h3>
          </div>
          <div className="grid-item">
            <img
              src="https://scontent.fbom20-2.fna.fbcdn.net/v/t39.30808-6/438240793_771619865065721_6348548637771730423_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jlwmMj4AH5kQ7kNvgF6fWuk&_nc_zt=23&_nc_ht=scontent.fbom20-2.fna&_nc_gid=AmmEj_xc7Jec4lGQANHh9N-&oh=00_AYCWPAMiHmYNCBNEoeCitoNIu3sGT8bbvv9zwNrMcpYbdQ&oe=6754C065"
              alt="Bento Item 2"
            />
            <h3>Bohada Tribal Mask Festival</h3>
          </div>
          <div className="grid-item">
            <img
              src="https://i.ytimg.com/vi/I2Je0OYvArw/maxresdefault.jpg"
              alt="Bento Item 3"
            />
            <h3>Dahanu Fest</h3>
          </div>
          <div className="grid-item">
            <img
              src="https://i.ytimg.com/vi/oJ7GIKaDNqI/maxresdefault.jpg"
              alt="Bento Item 4"
            />
            <h3>Fish Thali </h3>
          </div>
          <div className="grid-item">
            <img
              src="https://gumlet.assettype.com/esakal/2021-09/f595181f-684a-40eb-be9e-f673ea1666c3/Konkan_Seascapes_3_1130x650.jpg"
              alt="Bento Item 4"
            />
            <h3>Fishing</h3>
          </div>
          <div className="grid-item">
            <img
              src="https://i.ytimg.com/vi/TOYiRIIJ9vs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHlvyWA1PRUcs3f4tu5znynbMJOg"
              alt="Bento Item 4"
            />
            <h3>Ganesh Utsav</h3>
          </div>
        </div>
      </section>
      <Box
        bg="#ef964c"
        mt="4%"
        py={{ base: "4", md: "6" }}
        color="white"
        textAlign="center"
        borderRadius="15px"
        mb={{ base: "20px", md: "45px" }}
      >
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          pt={{ base: "15px", md: "25px" }}
          mb={{ base: "4", md: "10" }}
          maxW="90%"
          textAlign="center"
          mx="auto"
        >
          Ready for an Unforgettable Camping Experience?
        </Heading>
        <Text fontSize={{ base: "sm", md: "lg" }} mb={{ base: "6", md: "12" }}>
          Discover the beauty of Palghar like never before. Book your spot now!
        </Text>
        <Button
          bg="white"
          color="#ef964c"
          fontSize={{ base: "sm", md: "md" }}
          _hover={{ bg: "#ffe6cc" }}
          px={{ base: "6", md: "8" }}
          py={{ base: "3", md: "4" }}
        >
          Book Your Adventure
        </Button>
      </Box>

      <Footer />
    </div>
  );
};

export default ExplorePalghar;
