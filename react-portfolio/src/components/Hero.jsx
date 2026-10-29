import { Box, Button, Container, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SouthIcon from "@mui/icons-material/South";

const circles = [
  {
    size: { xs: 270, md: 560 },
    top: { xs: "5%", md: "3%" },
    right: { xs: "-180px", md: "-150px" },
    background:
      "radial-gradient(circle at 30% 25%, rgba(248,177,149,0.9), rgba(192,108,132,0.65) 50%, rgba(53,92,125,0.45) 100%)",
    animation: "floatOne 12s ease-in-out infinite",
  },
  {
    size: { xs: 230, md: 390 },
    top: { xs: "35%", md: "38%" },
    right: { xs: "-120px", md: "110px" },
    background:
      "radial-gradient(circle at 30% 30%, rgba(246,114,128,0.65), rgba(108,91,123,0.5) 65%, rgba(53,92,125,0.2))",
    animation: "floatTwo 15s ease-in-out infinite",
  },
  {
    size: { xs: 130, md: 220 },
    bottom: { xs: "8%", md: "8%" },
    right: { xs: "28%", md: "3%" },
    background:
      "radial-gradient(circle at 30% 25%, #F8B195, #F67280 45%, #6C5B7B 100%)",
    animation: "floatOne 10s ease-in-out infinite",
  },
];

function Hero() {
  return (
    <Box
      component="header"
      id="home"
      sx={{
        minHeight: "100svh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        isolation: "isolate",
        color: "#fff",
        py: { xs: 13, md: 10 },

        background: `linear-gradient(
          135deg,
          #F8B195 0%,
          #F67280 28%,
          #C06C84 55%,
          #6C5B7B 78%,
          #355C7D 100%
        )`,

        "@keyframes floatOne": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(-25px, 25px)",
          },
        },

        "@keyframes floatTwo": {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(20px, -30px)",
          },
        },

        "@keyframes fadeUp": {
          from: {
            opacity: 0,
            transform: "translateY(25px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& *": {
            animation: "none !important",
          },
        },
      }}
    >
      {/* Decorative circles */}
      {circles.map((circle, index) => (
        <Box
          key={index}
          aria-hidden="true"
          sx={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            top: circle.top,
            bottom: circle.bottom,
            right: circle.right,
            borderRadius: "50%",
            background: circle.background,
            animation: circle.animation,
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
      ))}

      {/* Architectural outlines */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: { xs: 350, md: 680 },
          height: { xs: 350, md: 680 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.25)",
          top: { xs: "10%", md: "-15%" },
          right: { xs: "-240px", md: "-240px" },
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: { xs: 300, md: 530 },
          height: { xs: 300, md: 530 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.18)",
          bottom: { xs: "-180px", md: "-300px" },
          right: { xs: "-100px", md: "100px" },
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      {/* Subtle architectural line */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: "13%",
          bottom: "13%",
          left: { xs: "20px", md: "5%" },
          borderLeft: "1px solid rgba(255,255,255,0.15)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: 760,
            animation: "fadeUp 1s ease-out both",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.7rem", md: "0.85rem" },
              letterSpacing: "0.3em",
              fontWeight: 500,
              textTransform: "uppercase",
              mb: 3,
              opacity: 0.85,
            }}
          >
            Architect Turned Developer
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "3.3rem",
                sm: "4.8rem",
                md: "6.2rem",
              },
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: "-0.05em",
              mb: 4,
            }}
          >
            Building Digital
            <Box
              component="span"
              sx={{
                display: "block",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Experiences.
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 540,
              fontSize: {
                xs: "1rem",
                md: "1.2rem",
              },
              lineHeight: 1.9,
              opacity: 0.92,
              mb: 5,
            }}
          >
            I'm Michal — combining architectural thinking, thoughtful design and
            code to turn ideas into interactive digital experiences.
          </Typography>

          <Button
            variant="contained"
            href="#projects"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: "#355C7D",
              color: "white",
              borderRadius: "40px",
              px: 4.5,
              py: 1.7,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",

              "&:hover": {
                bgcolor: "#26445E",
                transform: "translateY(-3px)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.2)",
              },
            }}
          >
            Explore My Work
          </Button>
        </Box>
      </Container>

      {/* Bottom details */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 25, md: 35 },
          left: { xs: 25, md: "7%" },
          right: { xs: 25, md: "7%" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            opacity: 0.65,
          }}
        >
          01 / INTRODUCTION
        </Typography>

        <Box
          component="a"
          href="#projects"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "white",
            opacity: 0.8,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
            }}
          >
            SCROLL TO EXPLORE
          </Typography>
          <SouthIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
