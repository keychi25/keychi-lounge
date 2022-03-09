import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./footer/Copyright";
import { LinkGrid } from "./footer/LinkGrid";
import { Logo } from "./footer/Logo";
import { SocialMediaLinks } from "./footer/SocialMediaLinks";
import { FormRequest } from "./footer/FormRequest";
import { Props } from "framer-motion/types/types";

const Footer = (props: Props) => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{ base: "4", md: "8" }}
    {...props}
  >
    <Stack spacing="10">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
      >
        <Box flex="1">
          <Logo />
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "10", md: "20" }}
        >
          <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} flex="1" />
          <FormRequest width={{ base: "full", md: "sm" }} />
        </Stack>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
