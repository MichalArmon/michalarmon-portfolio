import { Box, Typography } from "@mui/material";

function LogoAnimation({ onEnter }) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        zIndex: 9999,
        backgroundColor: "#355C7D",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "'Courier New', monospace",
        overflow: "hidden",

        "@keyframes rotateLeft": {
          to: {
            transform: "rotate(90deg) scale(1.4) translateY(-10px)",
          },
        },

        "@keyframes moveAndRotateRight": {
          "0%, 20%": {
            transform: "translateX(350px)",
          },
          "50%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "rotate(-90deg) scale(1.4)",
          },
        },

        "@keyframes fadeIn": {
          to: { opacity: 1 },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: { xs: "3.5rem", md: "5rem" },
          fontFamily: "inherit",
          cursor: "pointer",
        }}
        onClick={onEnter}
      >
        <Box
          component="span"
          sx={{
            display: "inline-block",
            animation: "rotateLeft 1.5s ease-out 0.6s forwards",
          }}
        >
          {"<"}
        </Box>

        <Box
          component="span"
          sx={{
            display: "inline-block",
            mr: 1,
            animation: "moveAndRotateRight 1.5s ease-out forwards",
          }}
        >
          {">"}
        </Box>

        <Box
          component="span"
          sx={{
            fontWeight: 200,
            opacity: 0,
            animation: "fadeIn 1s ease forwards",
            marginTop: 1,
          }}
        >
          ichal
        </Box>
      </Box>

      <Typography
        component="button"
        onClick={onEnter}
        sx={{
          mt: -2.5,
          background: "none",
          border: "none",
          color: "#ccc",
          fontSize: { xs: "1rem", md: "1.5rem" },
          fontFamily: "Arial, sans-serif",
          cursor: "pointer",
          opacity: 0,
          animation: "fadeIn 1s ease 2s forwards",
          "&:hover": {
            color: "white",
          },
        }}
      >
        ARCHITECT &gt; DEVELOPER
      </Typography>
    </Box>
  );
}

export default LogoAnimation;
