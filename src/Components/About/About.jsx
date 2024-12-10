import "./About.scss";
import ticket from "../../../public/ticket.svg";
import baloon from "../../../public/balloon.svg";
import diamond from "../../../public/diamond.svg";
import medal from "../../../public/medal.svg";
import mock from "../../../public/mock.webp";
import { FaPlay } from "react-icons/fa";
import Carousal from "./Slider";
import { motion } from "framer-motion";
import SmoothScroll from "../SmoothScroll";

import Footer from "../Footer/Footer";

import one from "../../../public/one.webp";
import two from "../../../public/two.webp";
import three from "../../../public/three.webp";
import TourSinglePage from "./New";
import AnimatedDiv from "../AnimateDiv";

const About = () => {
  return (
    <>
      <div className="about">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="heading"
        >
          <h1>About Alokik </h1>
          <p>
            A tropical paradise made for animal lovers replete with monkey
            caves, dog foundations, and dolphins in the wild.
          </p>
        </motion.div>

        <AnimatedDiv>
          <div className="contentt">
            <div className="left">
              <h1>
                Hello. Our agency has been present for over 29 years in the
                market. We make the most of all our customers.
              </h1>
            </div>
            <div className="right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation &nbsp ullamco
                <br />
                <br />
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="video">
            <div className="play">
              <FaPlay size={40} color="#000" cursor="pointer" />
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="why">
            <h1>Why Choose Us</h1>
            <div className="items">
              <div className="box">
                <img src={ticket} alt="" />
                <h1>Ulitmate Flexibility</h1>
                <p>
                  You're in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </p>
              </div>
              <div className="box">
                <img src={baloon} alt="" />
                <h1>Ulitmate Flexibility</h1>
                <p>
                  You're in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </p>
              </div>
              <div className="box">
                <img src={diamond} alt="" />
                <h1>Ulitmate Flexibility</h1>
                <p>
                  You're in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </p>
              </div>
              <div className="box">
                <img src={medal} alt="" />
                <h1>Ulitmate Flexibility</h1>
                <p>
                  You're in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </p>
              </div>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="travel">
            <div className="text">
              <h1>
                We Make <br /> World Travel Easy
              </h1>
              <p>
                Traveling under your own power and at your own pace, you'll
                connect more meaningfully with your destination and have more
                fun!
              </p>
              <motion.button whileTap={{ scale: 0.9, rotate: 3 }}>
                Explore More
              </motion.button>
            </div>
            <div className="specs">
              <div className="two">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  className="boxx"
                >
                  <img src={diamond} alt="" />

                  <h1>240</h1>
                  <p>Total Destination</p>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  className="boxx"
                >
                  <img src={medal} alt="" />
                  <h1>240</h1>
                  <p>Total Destination</p>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={(event) => {}}
                onHoverEnd={(event) => {}}
                className="one"
              >
                <div className="boxxx">
                  <img src={baloon} alt="" />
                  <h1>240</h1>
                  <p>Total Destination</p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="banner">
            <div className="left">
              <h1>Get 5% off your 1st app booking</h1>
              <p>
                Booking's better on the app. Use promo code "TourBooking" to
                save!
              </p>

              <p>Subscribe to Newsletter</p>
              <input type="text" placeholder="Email" name="" id="" />
              <button>Send</button>
            </div>
            <div className="right">
              <img src={mock} alt="" />
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="teams">
            <h1>Meet the team</h1>
            <div className="all">
              <div className="team">
                <img src={one} alt="" />
                <h1>Anish Thakur</h1>
                <p>Program Managager</p>
              </div>
              <div className="team">
                <img src={two} alt="" />
                <h1>Anish Thakur</h1>
                <p>Program Managager</p>
              </div>
              <div className="team">
                <img src={three} alt="" />
                <h1>Anish Thakur</h1>
                <p>Program Managager</p>
              </div>
              <div className="team">
                <img src={one} alt="" />
                <h1>Anish Thakur</h1>
                <p>Program Managager</p>
              </div>
              <div className="team">
                <img src={two} alt="" />
                <h1>Anish Thakur</h1>
                <p>Program Managager</p>
              </div>
            </div>
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="logos">
            <h1>Trusted by all the largest travel brands</h1>
            <Carousal />
          </div>
        </AnimatedDiv>

        <Footer />
      </div>
    </>
  );
};

export default About;
