import React from "react";
import {Button, Container, Image, Heading, Stack, Text} from "@chakra-ui/react";

import Header from "./components/Header";

const Hero: React.FC = () => {
  return (
    <Stack
      backgroundColor="primary.50"
      backgroundImage={[
        "url('/assets/bg-intro-mobile.svg')",
        "url('/assets/bg-intro-desktop.svg')",
      ]}
      backgroundPosition={["50% 0%", "230% 75%"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["contain", "80%"]}
    >
      <Stack
        height={["auto", "88vh"]}
        justifyContent="center"
        overflowY={["hidden", "inherit"]}
        paddingBottom={[8, 0]}
        paddingTop={[80, 0]}
        position="relative"
      >
        <Container maxWidth={["container.sm", "container.xl"]}>
          <Stack
            alignItems={["center", "flex-start"]}
            padding={[4, 8]}
            spacing={[8, 6]}
            width={["100%", "45%"]}
          >
            <Heading
              as="h1"
              fontSize={["3xl", "5xl"]}
              fontWeight="300"
              lineHeight={["1.2", "1.2"]}
              textAlign={["center", "left"]}
            >
              Next generation digital banking
            </Heading>
            <Text
              color="primary.700"
              fontSize={["md", "lg"]}
              lineHeight={["inherit", "1.6"]}
              textAlign={["center", "left"]}
            >
              Take your financial life online. Your Easybank account will be a one-stop-shop for
              spending, saving, budgeting, investing, and much more.
            </Text>
            <Button variant="request-invite">Request Invite</Button>
          </Stack>
        </Container>
        <Image
          alt="app mockup"
          position="absolute"
          right={["0%", -40]}
          src="assets/image-mockups.png"
          top={[-12, -48]}
          transform={["scale(.85)", "scale(.85)"]}
        />
      </Stack>
    </Stack>
  );
};

export default Hero;
