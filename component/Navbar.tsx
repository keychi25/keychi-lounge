import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    id: "my-profile",
    label: "My profile",
  },
  {
    id: "work",
    label: "Works",
  },
  {
    id: "blog",
    label: "Blogs",
  },
  {
    id: "skill",
    label: "My Skills",
  },
];

const scroll = function (idStr: string) {
  const thisPageY = window.pageYOffset;
  const toPageY = document.getElementById(idStr)!.getBoundingClientRect().top;
  if (toPageY == 0) {
    // 何もしない
  } else if (thisPageY !== 0) {
    window.scrollTo({
      left: 0,
      top: toPageY + thisPageY,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      left: 0,
      top: toPageY,
      behavior: "smooth",
    });
  }
};

const Header = (props: Props) => {
  const { isOpen } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading
          as="h1"
          size="lg"
          letterSpacing={"tighter"}
          onClick={() => scroll("site-description")}
        >
          <Text fontSize="2xl">Keychi&apos;s Lounge</Text>
        </Heading>
      </Flex>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack direction={"row"} spacing={4}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label} onClick={() => scroll(navItem.id)}>
              <Button colorScheme="teal" fontSize="2xl">
                {navItem.label}
              </Button>
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};
export default Header;
