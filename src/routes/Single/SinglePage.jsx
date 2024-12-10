import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SinglePage.scss";
import MyMap from "../../Components/Map/MyMap";
import Slider from "../../Components/slider/Slider";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Image,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import AuthContext from "../../Context/AuthContext";
import apiRequest from "../../Lib/apiRequest";
import WhatsIncluded from "./Include";
import CustomerReviews from "./Review";
import Footer from "../../Components/Footer/Footer";

const SinglePage = () => {
  const post = useLoaderData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentUser } = useContext(AuthContext);
  const [saved, setSaved] = useState(post.isSaved);
  const [isOpen, setIsOpen] = useState(false);

  console.log(post.id);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    try {
      console.log("Sending receiverId:", post.user.id);
      const res = await apiRequest.post(
        "/chats",
        { receiverId: post.user.id },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );
      console.log("Chat created successfully:", res.data);

      navigate("/profile");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }

    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);

      setSaved((prev) => !prev);
    }
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? post.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === post.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  console.log(post.user.id);
  useEffect(() => {
    console.log(post);
  }, [post]);

  console.log(post?.postDetail?.amenities?.included); // Log included array
  console.log(post?.postDetail?.amenities?.excluded); // Log excluded array

  console.log("Amenities: ", post.amenities);
  console.log("Post Data: ", post);

  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images.slice(0, 4)} />
          <Button onClick={openModal} colorScheme="teal" mt={4}>
            See All Images
          </Button>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="Location Pin" />
                  <span>{post.address}</span>
                </div>
                <div className="price">₹{post.price}</div>
              </div>
              <div className=" user ">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>

            <div className="include">
              <CustomerReviews postId={post.id} title={post.title} />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} size="md" isCentered>
        <ModalOverlay bg="rgba(0, 0, 0, 0.7)" />
        <ModalContent width="70%" margin="auto">
          <ModalHeader>All Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justifyContent="center"
              alignItems="center"
              position="relative"
              height="50vh"
            >
              <IconButton
                icon={<ArrowLeftIcon />}
                onClick={prevImage}
                position="absolute"
                left={0}
                zIndex={2}
                colorScheme="teal"
                aria-label="Previous Image"
              />
              <Image
                src={post.images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                objectFit="contain"
                width="100%"
                height="100%"
              />
              <IconButton
                icon={<ArrowRightIcon />}
                onClick={nextImage}
                position="absolute"
                right={0}
                zIndex={2}
                colorScheme="teal"
                aria-label="Next Image"
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal} colorScheme="blue">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Swimming Pool</span>
                {post.postDetail.utilities === "owner" ? <p>Yes</p> : <p>No</p>}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Ac Rooms</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} Sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathrooms</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Beach</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m Away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m Away</p>
              </div>
            </div>
          </div>

          <p className="title">Location</p>
          <div className="mapContainer">
            <MyMap items={[post]} />
          </div>
          <div className="buttons">
            <button onClick={handleSendMessage}>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
            {/* Add WhatsIncluded component here */}
          </div>
        </div>
        <WhatsIncluded selectedAmenities={post.postDetail.amenities} />
      </div>
    </div>
  );
};

export default SinglePage;
