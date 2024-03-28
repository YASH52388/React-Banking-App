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
      <Link href="mailto:yashbhoy27@gmail.com" isExternal mb="2">
          <Flex align="center">
            <Icon as={FaEnvelope} mr="2" />
            <Text>Email: yashbhoy27@gmail.com </Text>
          </Flex>
        </Link>
        <Link href="https://www.linkedin.com/in/yash-bhoy-053231233" isExternal mb="2">
          <Flex align="center">
            <Icon as={FaLinkedin} mr="2" />
            <Text>LinkedIn: Yash bhoy</Text>
          </Flex>
        </Link>
        <Link href="https://github.com/YASH52388" isExternal mb="2">
          <Flex align="center">
            <Icon as={FaGithub} mr="2" />
            <Text>GitHub: YASH52388</Text>
          </Flex>
        </Link>
        <Link href="https://x.com/yash52388?t=3BMvXVkPGQ7lR7qJyPWVnQ&s=09" isExternal>
          <Flex align="center">
            <Icon as={FaTwitter} mr="2" />
            <Text>Twitter: yash52388</Text>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
}

export default Aboutus;
