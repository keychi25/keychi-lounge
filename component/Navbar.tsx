import React from "react";
import { Flex, Heading, HStack, Text, Tooltip } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

const Navbar = (props: Props) => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="white"
      color="#81cac4"
      {...props}
    >
      <Flex mr={5}>
        <HStack spacing={8}>
          <Tooltip placement="auto-start">
            <Heading as="h2" size="lg" letterSpacing={"tighter"}>
              Keychi&apos;s Lounge
            </Heading>
          </Tooltip>
          <Tooltip placement="auto-end">
            <Text fontSize="sm">Keychi&apos;s Lounge</Text>
          </Tooltip>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
