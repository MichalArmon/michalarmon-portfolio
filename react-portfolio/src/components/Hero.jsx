import { Box, Button, Container, Typography } from "@mui/material";

const circleGradient = `radial-gradient(
  circle,
  #F8B195 0%,
  #F67280 50%,
  #355C7D 100%
)`;

const circles = [
  {
    size: 420,
    top: "-180px",
    left: "-140px",
    gradient: "radial-gradient(circle, #F8B195, #C06C84)",
  },
  {
    size: 250,
    top: "12%",
    right: "-100px",
    gradient: "radial-gradient(circle, #C06C84, #6C5B7B)",
  },
  {
    size: 180,
    bottom: "-50px",
    left: "12%",
    gradient: "radial-gradient(circle, #F67280, #F8B195)",
  },
  {
    size: 110,
    bottom: "18%",
    right: "20%",
    gradient: "radial-gradient(circle, #6C5B7B, #355C7D)",
  },
];

function Hero() {
  return (
    <Box
      component="header"
      id="home"
      sx={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(
          to bottom,
          #F8B195 0%,
          #F67280 25%,
          #C06C84 50%,
          #6C5B7B 75%,
          #355C7D 100%
        )`,
        color: "white",
        py: 10,
      }}
    >
      {circles.map((circle, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            background: circleGradient,
            top: circle.top,
            bottom: circle.bottom,
            left: circle.left,
            right: circle.right,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
      ))}

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "3rem", md: "5.5rem" },
            fontWeight: 800,
            lineHeight: 1.15,
            mb: 3,
          }}
        >
          Hello, I'm Michal
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            fontWeight: 300,
            mb: 4,
          }}
        >
          Former Architect.{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Current Developer.
          </Box>
        </Typography>

        <Typography
          sx={{
            maxWidth: 650,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.3rem" },
            lineHeight: 1.8,
            mb: 5,
          }}
        >
          I combine architectural thinking, visual design, and software
          development to create thoughtful, interactive digital experiences.
        </Typography>

        <Button
          variant="contained"
          href="#projects"
          size="large"
          sx={{
            bgcolor: "#355C7D",
            color: "white",
            px: 5,
            py: 1.7,
            borderRadius: "30px",
            fontWeight: 700,
            "&:hover": {
              bgcolor: "#26445E",
            },
          }}
        >
          View My Work
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
