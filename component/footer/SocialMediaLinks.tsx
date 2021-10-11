import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="#" aria-label="LinkedIn" />
    <IconButton as="a" href="https://github.com/keychi25" aria-label="GitHub" />
    <IconButton
      as="a"
      href="https://twitter.com/f_keychi_ktk"
      aria-label="Twitter"
    />
  </ButtonGroup>
);
