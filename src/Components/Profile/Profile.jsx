import React, { useContext, useEffect, Suspense, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../..Context/AuthContext";
import apiRequest from "../../Lib/apiRequest";
import Chat from "../Chat/Chat";
import List from "../List/List";
import "./Profile.scss";
import { useLoaderData } from "react-router-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Profile = () => {
  const { postResponse, chatResponse } = useLoaderData();

  console.log(chatResponse);

  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (chatResponse?.data?.length && !!chatResponse?.data) {
      setChats([...chatResponse?.data]);
    }
  }, [chatResponse?.data]);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      sessionStorage.removeItem("user");
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    currentUser && (
      <div className="profile">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link to="/profile/update">
                <Button colorScheme="teal">Update Profile</Button>
              </Link>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img src={currentUser.avatar || "/noavatar.jpg"} alt="Avatar" />
              </span>
              <span>
                Username: <b>{currentUser.username}</b>
              </span>
              <span>
                E-mail: <b>{currentUser.email}</b>
              </span>
              <Button colorScheme="red" onClick={onOpen}>
                Logout
              </Button>
            </div>

            <div className="title">
              <h1>My Listing</h1>
              <Link to="add">
                <Button colorScheme="teal">Create New Post</Button>
              </Link>
            </div>

            {/* User's Posts */}
            <Suspense fallback={<p>Loading...</p>}>
              <List posts={postResponse?.data?.userPosts || []} />
            </Suspense>

            <div className="title">
              <h1>Saved List</h1>
            </div>

            {/* Saved Posts */}
            <Suspense fallback={<p>Loading...</p>}>
              <List posts={postResponse?.data?.savedPosts || []} />
            </Suspense>
          </div>
        </div>

        {/* Chat Section */}
        <div className="chatContainer">
          <div className="wrapper">
            <Suspense fallback={<p>Loading...</p>}>
              <Chat chats={chats} setChats={setChats} />
            </Suspense>
          </div>
        </div>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Logout</ModalHeader>
            <ModalBody>
              <Text>Are you sure you want to log out?</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="red"
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
              >
                Logout
              </Button>
              <Button onClick={onClose} ml={3}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  );
};

export default Profile;
