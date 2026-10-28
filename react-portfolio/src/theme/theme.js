import { createTheme } from "@mui/material/styles";

const colors = {
  peach: "#F8B195",
  pink: "#F67280",
  rose: "#C06C84",
  purple: "#6C5B7B",
  blue: "#355C7D",
  dark: "#1C1C1C",
  white: "#FFFFFF",
};

export const gradients = {
  hero: `linear-gradient(
    to bottom,
    ${colors.peach} 0%,
    ${colors.pink} 25%,
    ${colors.rose} 50%,
    ${colors.purple} 75%,
    ${colors.blue} 100%
  )`,

  circle: `radial-gradient(
    circle,
    ${colors.peach} 0%,
    ${colors.pink} 50%,
    ${colors.blue} 100%
  )`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.pink,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: colors.dark,
      secondary: colors.purple,
    },
  },

  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "12px 28px",
          transition: "all 0.3s ease",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
        },
      },
    },
  },

  custom: {
    colors,
    gradients,
  },
});

export default theme;
