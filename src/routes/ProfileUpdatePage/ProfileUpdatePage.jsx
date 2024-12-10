import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Stack,
  Image,
  useToast,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import AuthContext from "../../Context/AuthContext";
import apiRequest from "../../Lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../Components/Upload/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [formValues, setFormValues] = useState({
    username: currentUser.username,
    email: currentUser.email,
    password: "",
  });
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onOpen();
  };

  const handleConfirmUpdate = async () => {
    const { username, email, password } = formValues;

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      toast({
        title: "Profile updated.",
        description: "Your profile has been updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      toast({
        title: "Error.",
        description: error || "An error occurred while updating your profile.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      onClose();
    }
  };

  return (
    <Stack spacing={8} padding={8} align="center" bg="gray.50">
      <Heading as="h1" size="lg" textAlign="center" mb={4}>
        Update&nbsp;)
        <Text as="span" color="#ef964c">
          Profile
        </Text>
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
        {/* Avatar Section */}
        <GridItem>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding={4}
            boxShadow="lg"
            bg="white"
          >
            <Image
              src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
              alt="Avatar"
              borderRadius="full"
              boxSize="150px"
              mb={4}
              mx="auto"
            />
            <UploadWidget
              uwConfig={{
                cloudName: "Alokik",
                uploadPreset: "alokik",
                multiple: false,
                maxImageFileSize: 2000000,
                folder: "avatars",
              }}
              setState={setAvatar}
            />
          </Box>
        </GridItem>

        {/* Form Section */}
        <GridItem>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding={4}
            boxShadow="lg"
            bg="white"
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="username" mb={4}>
                <FormLabel>Username</FormLabel>
                <Input
                  name="username"
                  type="text"
                  value={formValues.username}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Leave blank to keep current password"
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button colorScheme="teal" width="full" type="submit">
                Update
              </Button>
              {error && (
                <Text color="red.500" mt={2}>
                  {error}
                </Text>
              )}
            </form>
          </Box>
        </GridItem>
      </Grid>

      {/* Confirmation Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Update</ModalHeader>
          <ModalBody>
            <Text>Are you sure you want to update your profile?</Text>
            <Text color="red.500" mt={2}>
              This action cannot be undone.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleConfirmUpdate}>
              Yes, Update
            </Button>
            <Button onClick={onClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}

export default ProfileUpdatePage;
