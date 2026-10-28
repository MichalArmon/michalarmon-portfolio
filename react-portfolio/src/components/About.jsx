import { Box, Button, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box
      id="aboutMe"
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "white",
        overflow: "hidden",

        "@keyframes slideInLeft": {
          from: {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }}
    >
      {/* HEADER WITH BACKGROUND IMAGE */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "65vh", md: "750px" },
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          color: "white",
        }}
      >
        {/* Background image */}
        <Box
          component="img"
          src="/img/about2.jpg"
          alt="About Michal"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              to top,
              rgba(53, 92, 125, 0.95) 0%,
              rgba(108, 91, 123, 0.65) 45%,
              rgba(0, 0, 0, 0.1) 100%
            )`,
          }}
        />

        {/* Heading content */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            pb: { xs: 6, md: 10 },
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              animation: "slideInLeft 1.2s ease-out forwards",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.8rem", md: "5rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Nice to meet you,
              <br />
              I'm Michal.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontWeight: 300,
                mb: 3,
              }}
            >
              Former Architect.{" "}
              <Box component="span" sx={{ fontWeight: 700 }}>
                Current Developer.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                lineHeight: 1.8,
                maxWidth: 750,
                mb: 4,
              }}
            >
              I develop websites and applications with creative thinking,
              technical precision, and attention to detail. I combine design,
              code, and real-world experience to create digital experiences that
              work.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="#projects"
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
              MY WORK
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ABOUT TEXT */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 7, md: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: 950,
            mx: "auto",
            color: "#1C1C1C",
            fontSize: { xs: "1.05rem", md: "1.4rem" },
            lineHeight: 1.9,

            "& p": {
              mb: 4,
            },

            "& p:first-of-type": {
              fontWeight: 600,
            },
          }}
        >
          <Typography component="p" sx={{ fontSize: "inherit" }}>
            My name is Michal Armon. I'm a web and application developer with
            over 10 years of experience in architecture and urban planning. I
            discovered coding out of curiosity and stayed because I found
            everything I've always loved: problem-solving, systems thinking, and
            attention to the smallest details.
          </Typography>

          <Typography component="p" sx={{ fontSize: "inherit" }}>
            Today, I combine a broad design perspective with technical
            knowledge. I build accessible interfaces, responsive websites, and
            interactive experiences designed around people.
          </Typography>

          <Typography component="p" sx={{ fontSize: "inherit" }}>
            I studied Full Stack Development at HackerU, working with
            technologies such as JavaScript, React, HTML, CSS, and Node.js,
            alongside creative tools including Photoshop, Illustrator, and After
            Effects.
          </Typography>

          <Typography component="p" sx={{ fontSize: "inherit" }}>
            I believe in clean work, continuous learning, and creating solutions
            that don't just look good, but work well. When I'm away from the
            screen, you'll probably find me running, hiking, or simply looking
            at the world as if it were a wireframe.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
