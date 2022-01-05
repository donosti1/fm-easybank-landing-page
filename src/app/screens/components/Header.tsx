import React, {useEffect, useState} from "react";
import {
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Icon,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

import Logo from "./Logo";
const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef(null);
  const menuItems = [
    {id: 0, label: "Home"},
    {id: 1, label: "About"},
    {id: 2, label: "Contact"},
    {id: 3, label: "Blog"},
    {id: 4, label: "Careers"},
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = menuItems.map((mi) => (
    <Button
      key={mi.id}
      sx={{
        ":hover::before": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          height: "4px",
          width: "70%",
          background:
            "-webkit-linear-gradient(left, var(--chakra-colors-primary-500) 0%, var(--chakra-colors-primary-300) 100%)",

          /* borderBottom: "2px solid black", */
        },
        "::before": {
          content: "''",
          display: "block",
          position: "absolute",
          bottom: "0",
          height: "4px",
          width: "0%",
          background:
            "-webkit-linear-gradient(left, var(--chakra-colors-primary-500) 0%, var(--chakra-colors-primary-300) 100%)",
          transition: "all .4s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        },
      }}
      variant="header-link"
    >
      {mi.label}
    </Button>
  ));

  return (
    <Stack
      backgroundColor="white"
      height={["10vh", "12vh", "10vh"]}
      justifyContent="center"
      paddingBottom={[scrollPosition > 64 ? 2 : 2, 0]}
      paddingTop={[scrollPosition > 64 ? 2 : 2, 0]}
      position={["fixed", "relative"]}
      width="100%"
      zIndex="100"
    >
      <Container
        backgroundColor="white"
        height={["auto", "100%"]}
        maxWidth={["container.sm", "container.xl"]}
        zIndex="100"
      >
        <Stack
          alignContent="center"
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          height={["auto", "100%"]}
          justifyContent="space-between"
        >
          <Link>
            <Logo fill="black" identifier="header" />
          </Link>
          <Stack
            alignItems="center"
            direction="row"
            display={["none", "flex"]}
            height="100%"
            spacing={[2, 0]}
          >
            {menu}
          </Stack>
          <Button display={["none", "flex"]} variant="request-invite">
            Request Invite
          </Button>
          <Button
            ref={btnRef}
            display={["flex", "none"]}
            variant="header-menu-button"
            zIndex="1000"
            onClick={isOpen ? onClose : onOpen}
          >
            <Icon as={isOpen ? AiOutlineClose : AiOutlineMenu} color="black" h={6} w={6} />
          </Button>
          <Modal isOpen={isOpen} motionPreset="none" size="md" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <Stack>
                  {menuItems.map((mi) => (
                    <Button key={mi.id} variant="mobile-menu-link">
                      {mi.label}
                    </Button>
                  ))}
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
