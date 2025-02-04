import "./HomePage.scss";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useLoaderData } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import AnimatedDiv from "../Components/AnimateDiv";
import { motion } from "framer-motion"; // Import framer-motion
import Newlist from "../Components/List/Newlist";
import SearchBar from "../Components/SearchBar/SearchBar";
import Footer from "../Components/Footer/Footer";
import ClientLogo8 from "../Components/Testimonail/Testimonail";
import TourGrid from "../Components/Card/Banner";
import CardSlider from "../Components/Card/CardSlider";
import NewHomee from "../Components/Home/NewHomee";
import { listData } from "../Lib/dummydata";
import { Button } from "@chakra-ui/react";

import TempleDetail from "../Components/Details/Temple";
import TemplesList from "../Components/Details/Temple";
import ImageGallery from "../Components/Details/ImgActivity";
import Featured from "../Components/Featured";
const HomePage = () => {
  const { postResponse } = useLoaderData();
  const items = postResponse || [];
  const { currentUser } = useContext(AuthContext);

  const [showButton, setShowButton] = useState(true);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollPercent =
      (scrollPosition / (documentHeight - windowHeight)) * 100;

    if (scrollPercent > 15 && scrollPercent < 80) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to navigate to /map
  const openMap = () => {
    navigate("/map"); // Navigate to the /map page
  };

  return (
    <div className="homepage relative">
      {/* Animated Background */}

      <div className="content-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="textContainer"
        >
          <div className="wrapper">
            <motion.h1 className="title">
              Explore <span>Luxurious Resorts</span> Near You for the Perfect
              Getaway.
            </motion.h1>

            <motion.p>
              Discover top-rated resorts nearby for a relaxing and unforgettable
              escape for your next vacation, closer than you think.
            </motion.p>

            <SearchBar />

            {/* <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years Of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
              </div>
              <div className="box">
                <h1>500+</h1>
                <h2>Resorts Listed</h2>
              </div>
            </div> */}
          </div>
        </motion.div>

        <div className="imageContainer">
          <motion.img src="/treww.png" alt="Travel Bag" />
        </div>
      </div>

      <AnimatedDiv>
        <ImageGallery
          title={
            <span>
              Must try Expriences in{" "}
              <span style={{ color: "#ef964c" }}> Palghar </span>
            </span>
          }
        />
      </AnimatedDiv>

      <div className="cardSection">
        <AnimatedDiv>
          <motion.h2 className="cardSectionTitle">
            Top Resorts in <span>Palghar</span>
            <Link to="/list"></Link>
          </motion.h2>
        </AnimatedDiv>
        <AnimatedDiv>
          <Newlist items={items.slice(0, 4)} />
          <div className="flex mt-5 justify-center items-center h-10">
            <Link to="/list">
              <Button
                sx={{
                  bg: "#ef964c",
                  color: "#fff",
                  fontWeight: "600",
                  _hover: {
                    bg: "#d9773a", // Darker shade for hover
                    color: "#f0f0f0", // Slightly lighter text color on hover
                  },
                }}
              >
                View All Resorts
              </Button>
            </Link>
          </div>
          <Featured />
        </AnimatedDiv>
        <AnimatedDiv>
          <NewHomee />
        </AnimatedDiv>

        <AnimatedDiv>
          <TourGrid />
        </AnimatedDiv>

        <Footer />
      </div>

      {/* Button to open map by navigating to /map */}
      {showButton && (
        <button
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-3 px-5 bg-[#ef964c] text-white rounded-full shadow-lg text-md z-50"
          onClick={openMap} // Navigate to /map on click
        >
          Open Map
        </button>
      )}
    </div>
  );
};

export default HomePage;
