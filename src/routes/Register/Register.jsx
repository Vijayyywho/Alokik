import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Import Google icon from react-icons
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom"; // Import useNavigate and RouterLink for navigation
import apiRequest from "../../lib/apiRequest"; // Adjust the path as necessary

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      if (res.status === 201) {
        toast({
          title: "Registration successful.",
          description: "You can now log in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Redirect to login page
        navigate("/login"); // Adjust the path if your login route is different
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Registration failed.";
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    console.log("Google login initiated");
  };

  return (
    <>
      <div className="main">
        <img src="" alt="" />
        <Box
          maxWidth="500px"
          mx="auto"
          mt="20px"
          p={5}
          borderWidth={1}
          borderRadius="md"
        >
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Create an Account
          </Heading>
          <Text fontSize="md" mb={5} textAlign="center">
            Welcome! Create your account to get started
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4} isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
              width="full"
            >
              Register
            </Button>
          </form>
          <Text textAlign="center" my={4}>
            OR
          </Text>
          <Button
            type="button"
            colorScheme="gray" // Adjust color scheme for Google styling
            onClick={handleGoogleLogin}
            width="full"
            leftIcon={<FcGoogle />} // Use Google icon directly from react-icons
          >
            Continue with Google
          </Button>

          {/* Already have an account link */}
          <Text textAlign="center" mt={6} fontSize="sm">
            Already have an account?{" "}
            <Link as={RouterLink} to="/login" color="teal.500">
              Login
            </Link>
          </Text>
        </Box>
      </div>
    </>
  );
}

export default Register;
