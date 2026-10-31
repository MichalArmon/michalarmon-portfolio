import { Box, Button, Container, Typography, Stack } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const colors = {
  ink: "#292532",
  muted: "#77727D",
  rose: "#C06C84",
  peach: "#F8B195",
  purple: "#6C5B7B",
  blue: "#355C7D",
  pale: "#F8F6F8",
};

function About() {
  return (
    <Box
      id="aboutMe"
      component="section"
      sx={{
        bgcolor: colors.pale,
        color: colors.ink,
        overflow: "hidden",
        scrollMarginTop: { xs: "72px", md: "88px" },
      }}
    >
      {/* INTRODUCTION */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "auto", md: "720px" },
          display: "flex",
          alignItems: "flex-end",
          bgcolor: { xs: colors.pale, md: colors.blue },
          color: { xs: colors.ink, md: "#FFFFFF" },
        }}
      >
        {/* DESKTOP PHOTO */}
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

        {/* DESKTOP OVERLAY */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                90deg,
                rgba(29, 31, 47, 0.86) 0%,
                rgba(49, 45, 66, 0.72) 45%,
                rgba(53, 92, 125, 0.10) 100%
              )
            `,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            pt: { xs: 3, md: 18 },
            pb: { xs: 9, md: 12 },
            px: { xs: 3, md: 4 },
          }}
        >
          {/* MOBILE PORTRAIT */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Box
              component="img"
              src="/img/about2-mobile.jpg"
              alt="Michal Armon"
              loading="lazy"
              decoding="async"
              sx={{
                display: "block",
                width: "min(80vw, 330px)",
                height: "auto",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
                boxShadow: "0 18px 48px rgba(53,92,125,0.15)",
              }}
            />
          </Box>

          {/* EYEBROW */}
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: { xs: colors.rose, md: colors.peach },
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            ABOUT / MICHAL ARMON
          </Typography>

          {/* TITLE */}
          <Typography
            component="h2"
            sx={{
              maxWidth: 870,
              fontSize: {
                xs: "clamp(2.6rem, 9vw, 4rem)",
                md: "clamp(4rem, 6vw, 6rem)",
              },
              fontWeight: 700,
              letterSpacing: "-0.065em",
              lineHeight: 1.07,
              mb: 4,
            }}
          >
            From designing spaces to building{" "}
            <Box
              component="span"
              sx={{
                color: { xs: colors.rose, md: colors.peach },
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              digital experiences.
            </Box>
          </Typography>

          {/* INTRO */}
          <Typography
            sx={{
              maxWidth: 680,
              fontSize: { xs: 16, md: 20 },
              lineHeight: 1.85,
              color: {
                xs: colors.muted,
                md: "rgba(255,255,255,0.86)",
              },
              mb: 5,
            }}
          >
            I'm Michal, a developer with a background in architecture and urban
            planning. My work brings together design thinking, technical
            problem-solving, and a longstanding interest in how people interact
            with the spaces and systems around them.
          </Typography>

          <Button
            href="#projects"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              px: 0,
              py: 1.5,
              borderRadius: 0,
              color: { xs: colors.blue, md: "#FFFFFF" },
              borderBottom: {
                xs: `1px solid ${colors.blue}`,
                md: "1px solid rgba(255,255,255,0.55)",
              },
              textTransform: "none",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.02em",
              "&:hover": {
                bgcolor: "transparent",
                color: { xs: colors.rose, md: colors.peach },
              },
            }}
          >
            Explore my work
          </Button>
        </Container>
      </Box>

      {/* EDITORIAL ABOUT SECTION */}
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 8, md: 15 },
          pb: { xs: 9, md: 18 },
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(180px, 0.65fr) minmax(0, 1.6fr)",
            },
            columnGap: { md: 10 },
            rowGap: 4,
          }}
        >
          {/* SECTION LABEL */}
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: colors.rose,
                mb: 2,
              }}
            >
              01 / THE BACKGROUND
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                color: colors.muted,
              }}
            >
              A different route into development.
            </Typography>
          </Box>

          {/* EDITORIAL COPY */}
          <Box>
            <Typography
              component="h3"
              sx={{
                fontSize: {
                  xs: "1.7rem",
                  md: "clamp(2.1rem, 3.5vw, 3.2rem)",
                },
                fontWeight: 600,
                letterSpacing: "-0.045em",
                lineHeight: 1.3,
                mb: 5,
                maxWidth: 800,
              }}
            >
              I approach software much as I approached architecture: by looking
              at the whole system while paying attention to the details that
              shape the experience.
            </Typography>

            <Stack
              spacing={3}
              sx={{
                maxWidth: 740,
                "& p": {
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.9,
                  color: colors.muted,
                  m: 0,
                },
              }}
            >
              <Typography component="p">
                Before moving into software development, I spent more than a
                decade working in architecture and urban planning. That
                experience taught me to navigate complex requirements, think
                spatially and systematically, and turn abstract ideas into
                coherent, workable solutions.
              </Typography>

              <Typography component="p">
                What drew me to programming was the opportunity to apply that
                same way of thinking in a different medium. I enjoy
                understanding how things fit together, solving the problems
                beneath the surface, and creating interfaces that feel as
                considered as the systems behind them.
              </Typography>

              <Typography component="p">
                I studied Full-Stack Development at HackerU and have since been
                building projects with React, JavaScript, Node.js, Python, and
                Django, exploring both front-end experiences and the
                architecture that supports them.
              </Typography>

              <Typography component="p">
                I'm particularly interested in work where thoughtful design and
                solid engineering strengthen one another. I bring curiosity,
                visual sensitivity, and an appreciation for structure to
                everything I build.
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* DIVIDER */}
        <Box
          sx={{
            height: "1px",
            bgcolor: "rgba(108,91,123,0.18)",
            mt: { xs: 9, md: 13 },
            mb: { xs: 6, md: 8 },
          }}
        />

        {/* BACKGROUND / FOCUS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 5, md: 10 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: colors.rose,
                mb: 2,
              }}
            >
              BACKGROUND
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 23, md: 30 },
                fontWeight: 600,
                letterSpacing: "-0.04em",
              }}
            >
              Architecture & Urban Planning
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: colors.rose,
                mb: 2,
              }}
            >
              CURRENT FOCUS
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 23, md: 30 },
                fontWeight: 600,
                letterSpacing: "-0.04em",
              }}
            >
              Full-Stack Development
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
