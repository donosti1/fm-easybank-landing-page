import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
      h1: {
        color: "white",
      },
    },
  },
  colors: {
    primary: {
      50: "hsl(0, 0%, 98%)",
      100: "hsl(220, 16%, 96%)",
      200: "hsl(136, 65%, 71%)",
      300: "hsl(136, 65%, 51%)",
      400: "hsl(192, 70%, 71%)",
      500: "hsl(192, 70%, 51%)",
      700: "hsl(233, 8%, 62%)",
      900: "hsl(233, 26%, 24%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "'Public Sans', sans-serif",
  },
  components: {
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        outline: {
          px: 12,
          pt: 4,
          pb: 2,
          textTransform: "uppercase",
          borderColor: "black",
          borderRadius: "sm",
          letterSpacing: "2px",
          _hover: {
            color: "white",
            bg: "black",
          },
        },
        "footer-link": {
          h: 8,
          color: "white",
          borderRadius: 0,
          paddingInlineStart: ["inherit", 0],
          paddingInlineEnd: ["inherit", 0],
          _hover: {color: "primary.300"},
        },
        "header-link": {
          color: "primary.700",
          fontWeight: "400",
          height: "100%",
        },
        "request-invite": {
          bgGradient: "linear(to-r,primary.300, primary.500)",
          color: "white",
          w: 48,
          borderRadius: "full",
          _hover: {
            bgGradient: "linear(to-r,primary.200, primary.400)",
          },
        },
        "mobile-menu-link": {
          color: "white",
          textTransform: "uppercase",
          h: 12,
          fontSize: "2xl",
          fontWeight: "300",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "primary.900",
      },
    },
  },
});
