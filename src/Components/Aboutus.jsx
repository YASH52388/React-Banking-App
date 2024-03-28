import React from "react";
import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Aboutus() {
  return (
    <Box w="100%" h="auto" bg="lightblue" p="4">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        About Us
      </Text>
      <Flex direction="column">
        <Link href="mailto:your.email@example.com" isExternal mb="2">
          <Flex align="center">
            <Icon as={FaEnvelope} mr="2" />
            <Text>Email: your.email@example.com</Text>
          </Flex>
        </Link>
        <Link href="https://www.linkedin.com/in/yourusername" isExternal mb="2">
          <Flex align="center">
            <Icon as={FaLinkedin} mr="2" />
            <Text>LinkedIn: yourusername</Text>
          </Flex>
        </Link>
        <Link href="https://github.com/yourusername" isExternal mb="2">
          <Flex align="center">
            <Icon as={FaGithub} mr="2" />
            <Text>GitHub: yourusername</Text>
          </Flex>
        </Link>
        <Link href="https://twitter.com/yourusername" isExternal>
          <Flex align="center">
            <Icon as={FaTwitter} mr="2" />
            <Text>Twitter: yourusername</Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}

export default Aboutus;
