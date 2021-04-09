import React from "react";
import { useHistory } from "react-router-dom";
import { Button, DarkMode, Flex, Heading, HStack } from "@chakra-ui/react";

const NavBar = () => {
  const history = useHistory();

  return (
    <Flex
      justify="space-between"
      px={16}
      py={4}
      w="100%"
      alignItems="center"
      bg="black"
      color="white"
    >
      <Heading size="md">OpenFlights</Heading>
      <HStack spacing={2}>
        <DarkMode>
          <Button variant="ghost" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button variant="ghost">Log Out</Button>
        </DarkMode>
      </HStack>
    </Flex>
  );
};

export default NavBar;
