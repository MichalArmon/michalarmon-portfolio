import { useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

function LogoAnimation({ onEnter }) {
  const isMobile = useMediaQuery("(max-width:899px)");

  useEffect(() => {
    if (!isMobile) return;

    // Automatically enter after the animation
    const timer = setTimeout(onEnter, 2800);

    return () => clearTimeout(timer);
  }, [isMobile, onEnter]);

  return (
    <Box
      onWheel={isMobile ? onEnter : undefined}
      onTouchMove={isMobile ? onEnter : undefined}
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
        onClick={onEnter}
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: { xs: "3.5rem", md: "5rem" },
          fontFamily: "inherit",
          cursor: "pointer",
        }}
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
            mt: 1,
          }}
        >
          ichal
        </Box>
      </Box>

      <Typography
        sx={{
          mt: -2.5,
          color: "#ccc",
          fontSize: { xs: "1rem", md: "1.5rem" },
          fontFamily: "Arial, sans-serif",
          opacity: 0,
          animation: "fadeIn 1s ease 2s forwards",
        }}
      >
        ARCHITECT &gt; DEVELOPER
      </Typography>

      <Button
        onClick={onEnter}
        sx={{
          position: "absolute",
          bottom: { xs: "12%", md: "10%" },
          color: "white",
          fontFamily: "'Courier New', monospace",
          fontSize: { xs: "0.9rem", md: "1rem" },
          letterSpacing: 3,
          opacity: 0,
          animation: "fadeIn 0.8s ease 2s forwards",
          borderBottom: "1px solid rgba(255,255,255,0.5)",
          borderRadius: 0,
          px: 2,
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "white",
          },
        }}
      >
        ENTER SITE ↓
      </Button>
    </Box>
  );
}

export default LogoAnimation;
