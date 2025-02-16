import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3", // Main primary blue
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
  },
  secondary: {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50", // Main secondary green
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: "8px",
      fontWeight: "bold",
    },
    sizes: {
      md: {
        px: "6",
        py: "3",
      },
    },
    variants: {
      solid: {
        bg: "primary.500",
        color: "white",
        _hover: {
          bg: "primary.600",
        },
      },
      outline: {
        borderColor: "primary.500",
        color: "primary.500",
        _hover: {
          bg: "primary.100",
        },
      },
    },
  },
};

const styles = {
  global: {
    "html, body": {
      fontFamily: "'Inter', sans-serif",
      color: "gray.800",
      bg: "gray.50",
    },
    a: {
      color: "primary.500",
      _hover: {
        textDecoration: "underline",
      },
    },
  },
};

const theme = extendTheme({ colors, config, components, styles });

export default theme;
