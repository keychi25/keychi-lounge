import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";

export const FormRequest = (props: HTMLChakraProps<"form">) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>Request Form</FooterHeading>
        <Text>
          ご連絡はこちらから。
          <br />
          確認メールに返信してください。
        </Text>
        <Stack spacing="4" direction={{ base: "column", md: "row" }}>
          <Input
            bg={useColorModeValue("white", "inherit")}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor={useColorModeValue("blue.500", "blue.300")}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue("gray.500", "whiteAlpha.700"),
            }}
          />
          <Button
            type="submit"
            colorScheme="blue"
            flexShrink={0}
            width={{ base: "full", md: "auto" }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};
