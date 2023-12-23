"use client";

import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Sets the original color mode value used by Chakra
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  // Sets the background
  global: (props: Object) => ({
    "html, body": {
      background: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
};

const theme = extendTheme({ config, fonts, styles, components });
export default theme;