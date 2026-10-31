import { Box, Button, Container, Typography } from "@mui/material";

function About() {
  return (
    <Box
      id="aboutMe"
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        bgcolor: "white",
        overflow: "hidden",
        scrollMarginTop: { xs: "72px", md: "88px" },

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
      {/* HEADER */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "auto", md: "750px" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-end" },
          overflow: "hidden",
          color: { xs: "#292532", md: "white" },
          bgcolor: { xs: "#FFFFFF", md: "transparent" },
        }}
      >
        {/* DESKTOP BACKGROUND IMAGE */}
        <Box
          component="img"
          src="/img/about2.jpg"
          alt=""
          aria-hidden="true"
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* DESKTOP GRADIENT */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
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

        {/* CONTENT */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            pt: { xs: 2, md: 0 },
            pb: { xs: 5, md: 10 },
            px: { xs: 3, md: 3 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              animation: {
                xs: "none",
                md: "slideInLeft 1.2s ease-out forwards",
              },
            }}
          >
            {/* MOBILE CIRCULAR PHOTO */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                mb: { xs: 3, sm: 4 },
              }}
            >
              <Box
                component="img"
                src="/img/about2-mobile.jpg"
                alt="Michal Armon"
                loading="lazy"
                decoding="async"
                sx={{
                  width: { xs: 290, sm: 330 },
                  height: { xs: 290, sm: 330 },
                  maxWidth: "85vw",
                  maxHeight: "85vw",
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                  border: "5px solid #FFFFFF",
                  boxSizing: "border-box",
                  boxShadow: "0 12px 40px rgba(53,92,125,0.18)",
                  flexShrink: 0,
                }}
              />
            </Box>

            {/* HEADING */}
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.35rem", md: "5rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: {
                  xs: "-0.04em",
                  md: "normal",
                },
                mb: 2,
              }}
            >
              Nice to meet you,
              <Box component="span" sx={{ display: "block" }}>
                I'm Michal.
              </Box>
            </Typography>

            {/* SUBHEADING */}
            <Typography
              sx={{
                fontSize: { xs: "1.3rem", md: "2.5rem" },
                fontWeight: 300,
                mb: 3,
                color: { xs: "#6C5B7B", md: "inherit" },
              }}
            >
              Former Architect.{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  color: {
                    xs: "#355C7D",
                    md: "inherit",
                  },
                }}
              >
                Current Developer.
              </Box>
            </Typography>

            {/* INTRO */}
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.4rem" },
                lineHeight: 1.8,
                maxWidth: 750,
                mb: 4,
                mx: { xs: "auto", md: 0 },
                color: {
                  xs: "#77727D",
                  md: "inherit",
                },
              }}
            >
              I develop websites and applications with creative thinking,
              technical precision, and attention to detail. I combine design,
              code, and real-world experience to create digital experiences that
              work.
            </Typography>

            {/* BUTTON */}
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
                boxShadow: "0 5px 16px rgba(53,92,125,0.2)",
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
          py: { xs: 5, md: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: 950,
            mx: "auto",
            color: "#1C1C1C",
            fontSize: {
              xs: "1.05rem",
              md: "1.4rem",
            },
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
