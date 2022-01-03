import React from "react";
import {Button, Container, Grid, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";

import Logo from "./components/Logo";
const firstMenu = ["About Us", "Contact", "Blog"];
const secondMenu = ["Careers", "Support", "Privacy Policy"];

const CustomMenuItem = ({menuItems}: {menuItems: string[]}) => {
  const productMenuList = menuItems.map((mi) => (
    <Button
      key={mi}
      fontSize="sm"
      fontWeight="500"
      justifyContent={["center", "flex-start"]}
      variant="footer-link"
    >
      {mi}
    </Button>
  ));

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[2, 2]}>
      {productMenuList}
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebookSquare},
    {id: 1, icon: FaYoutube},
    {id: 2, icon: FaTwitter},
    {id: 3, icon: FaPinterest},
    {id: 4, icon: FaInstagram},
  ];
  const icons = item.map((it) => (
    <Button key={it.id} variant="unstyled">
      <Icon _hover={{color: "primary.300"}} as={it.icon} color="white" height={6} width={6} />
    </Button>
  ));

  return (
    <Stack direction="row" justifyContent={["center", "flex-end"]} spacing={0}>
      {icons}
    </Stack>
  );
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="primary.900"
      paddingBottom={[8, 16]}
      paddingTop={[8, 8]}
      role="contentinfo"
    >
      <Container maxWidth="container.xl">
        <Grid rowGap={[6, 8]} templateColumns={["repeat(1,1fr)", "repeat(4,1fr)"]} width="100%">
          <Stack
            alignItems={["center", "flex-start"]}
            justifyContent="space-between"
            spacing={[6, 0]}
          >
            <Logo fill="white" />
            <SocialNetworks />
          </Stack>
          <Stack direction={["column", "row"]} gridColumn={["1", "2/4"]} spacing={[0, 24]}>
            <CustomMenuItem menuItems={firstMenu} />
            <CustomMenuItem menuItems={secondMenu} />
          </Stack>
          <Stack
            alignItems={["center", "flex-end"]}
            justifyContent="space-between"
            spacing={[6, 0]}
          >
            <Button variant="request-invite">Request Invite</Button>
            <Text color="primary.700" textAlign={["center", "right"]}>
              © Easybank. All rights reserved.
            </Text>
          </Stack>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;
