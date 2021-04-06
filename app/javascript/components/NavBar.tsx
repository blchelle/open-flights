import React from "react";
import { Flex, Heading, HStack, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      justify="space-between"
      py={3}
      px={16}
      w="100%"
      alignItems="center"
      bg="black"
      color="white"
    >
      <Heading size="md">OpenFlights</Heading>
      <HStack spacing={4}>
        <Link>
          <Text fontWeight="bold" size="lg">
            Home
          </Text>
        </Link>
        <Link>
          <Text fontWeight="bold" size="lg">
            Log Out
          </Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
