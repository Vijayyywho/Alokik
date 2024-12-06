"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Logo = (props) => (
  <svg
    height="2rem"
    viewBox="0 0 48 48"
    width="2rem"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={useColorModeValue("gray.700", "white")} d="M12 12h24v24H12z" />
  </svg>
);

const ListHeader = ({ children }) => (
  <Text fontWeight="500" fontSize="xl" mb={2}>
    {children}
  </Text>
);

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#f1f1f1")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderRadius="10px"
    >
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={8}>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Link href="#">About Us</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Link href="#">Help Center</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Legal</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Status</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Follow Us</ListHeader>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">LinkedIn</Link>
          </Stack>

          <Stack align="flex-start">
            <ListHeader>Subscribe to Our Newsletter</ListHeader>
            <Stack direction="row">
              <Input
                placeholder="Your email address"
                bg={useColorModeValue("gray.100", "gray.800")}
                border={0}
                _focus={{
                  bg: useColorModeValue("gray.200", "gray.900"),
                }}
              />
              <IconButton
                bg={useColorModeValue("blue.400", "blue.600")}
                color="white"
                _hover={{
                  bg: useColorModeValue("blue.500", "blue.700"),
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box py={10}>
        <Container
          as={Stack}
          maxW="6xl"
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Logo />
          <Text>© 2024 Love. All rights reserved Alokik</Text>
          <Stack direction="row" spacing={6}>
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter boxSize="6" />} // Adjusts the icon size
              variant="ghost"
              colorScheme="gray"
              fontSize="1.5rem" // Adjusts the button font size
            />
            <IconButton
              as="a"
              href="#"
              aria-label="YouTube"
              icon={<FaYoutube boxSize="6" />}
              variant="ghost"
              colorScheme="gray"
              fontSize="1.5rem"
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram boxSize="6" />}
              variant="ghost"
              colorScheme="gray"
              fontSize="1.5rem"
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
