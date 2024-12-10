import React, { useState, useContext } from "react"; // Import useContext
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../Lib/apiRequest";

import AuthContext from "../../Context/AuthContext";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const { updateUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data));

        toast({
          title: "Login successful.",
          description: "Welcome back!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        navigate("/");
      }
    } catch (err) {
      console.log(err);
      const errorMessage = err.response?.data?.message || "Login failed.";
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

  return (
    <Box
      maxWidth="400px"
      mx="auto"
      mt="12"
      p={8}
      borderWidth={1}
      borderRadius="lg"
      shadow="lg"
      bg="white"
      className="bg-white rounded-lg shadow-lg"
    >
      <Heading
        as="h2"
        size="lg"
        mb={6}
        textAlign="center"
        fontWeight="semibold"
      >
        Login to Your Account
      </Heading>

      {/* Added text "We're glad to see you again!" */}
      <Text fontSize="lg" color="gray.600" mb={6} textAlign="center">
        We're glad to see you again!
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="filled"
            focusBorderColor="teal.500"
            mb={3}
          />
        </FormControl>

        <FormControl mb={6} isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            focusBorderColor="teal.500"
            mb={3}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          isLoading={isLoading}
          type="submit"
          width="full"
          size="lg"
          borderRadius="md"
          mb={3}
        >
          Login
        </Button>

        <Text fontSize="sm" color="gray.500" textAlign="center">
          Don't have an account?{" "}
          <a href="/register" className="text-teal-500">
            Sign up
          </a>
        </Text>
      </form>
    </Box>
  );
}

export default Login;
