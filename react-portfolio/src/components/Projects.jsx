import { Box, Container, Typography, Grid } from "@mui/material";
import { motion, useReducedMotion } from "motion/react";
import ProjectCard from "./ProjectCard";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

// PROJECT DATA
const landingPages = [
  {
    id: "landing-1",
    title: "Business Landing Page",
    description:
      "A playful landing page with floating elements, soft gradients, and subtle motion that brings the design to life.",
    technologies: ["React", "MUI", "CSS Animations"],
    image: "/img/landing-pages/landing01.png",
    link: "/landing-pages/landing01",
  },
  {
    id: "landing-2",
    title: "AURA — Beauty Campaign",
    description:
      "A bold beauty campaign pairing oversized typography with striking product photography and cinematic motion.",
    technologies: ["React", "MUI", "Motion"],
    image: "/img/landing-pages/landing02.png",
    link: "/landing-pages/landing02",
  },
  {
    id: "landing-3",
    title: "CHROMA — Interactive 3D",
    description:
      "An interactive 3D sculpture exploring the relationship between shape, light, and color. Made to move, rotate, and respond.",
    technologies: ["React", "Three.js", "React Three Fiber", "Drei", "Motion"],
    image: "/img/landing-pages/landing03.png",
    link: "/landing-pages/landing03",
  },
  {
    id: "landing-4",
    title: "Cafe Rega — Coffee & Culture",
    description:
      "A playful take on Tel Aviv café culture, with bold Hebrew typography, warm colors, and lively animations.",
    technologies: ["React", "MUI", "Motion", "RTL"],
    image: "/img/landing-pages/landing04.png",
    link: "/landing-pages/landing04",
  },
];

const apiProjects = [
  {
    id: "api-1",
    title: "Ban Tao Resort",
    description: "A full-stack resort management and booking application.",
    technologies: ["React", "MUI", "Node.js", "MongoDB"],
    image: "/img/api/ban-tao.png",
    link: "https://ban-tao-resort.netlify.app/resort",
  },
  {
    id: "api-2",
    title: "Article Hub — Full-Stack Publishing Platform",
    description:
      "A full-stack editorial platform featuring article management, user roles, favorites, comments, and interactive machine learning tools for predicting article views.",
    technologies: [
      "React",
      "MUI",
      "Python",
      "Django REST",
      "PostgreSQL",
      "JWT",
      "Scikit-learn",
      "Motion",
    ],
    image: "/img/api/article-hub.png",
    link: "https://article-hub-qa2w.onrender.com/",
  },
  {
    id: "api-3",
    title: "ClassFlow — Education Management",
    description:
      "A full-stack platform for managing students, classes, and assignments, with attendance tracking, personalized student insights, and AI-powered tools for teachers.",
    technologies: [
      "React",
      "MUI",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "AI Integration",
    ],
    image: "/img/api/class-flow.png",
    link: "https://classflow-project.netlify.app",
  },
];

const showcaseProjects = [
  {
    id: "showcase-1",
    title: "AMMS — Architecture Portfolio",
    description:
      "An architectural portfolio showcasing my work as an architect, from residential design to architectural projects and visualizations. A clean, visually driven website where architecture, space, and design take center stage.",
    technologies: ["React", "Vite", "Web Design", "Architecture"],
    image: "/img/showcase/AMMS.png",
    link: "https://amms.co.il",
  },
];

const categories = [
  {
    id: "landing-pages",
    number: "01",
    title: "Landing Pages",
    description:
      "Small experiences with a big visual impact. A collection of playful layouts, motion, and interactive design.",
    projects: landingPages,
  },
  {
    id: "api-projects",
    number: "02",
    title: "API & Full-Stack",
    description:
      "Beyond the interface. Applications built around real functionality, data, and the systems that connect them.",
    projects: apiProjects,
  },
  {
    id: "showcase-websites",
    number: "03",
    title: "Showcase Websites",
    description:
      "Thoughtful digital spaces where visual identity meets interaction.",
    projects: showcaseProjects,
  },
];

function Projects() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, y = 35) => ({
    initial: reduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        pt: { xs: 6, md: 16 },
        pb: { xs: 0, md: 16 },
        overflow: "hidden",
        scrollMarginTop: { xs: "72px", md: "88px" },
      }}
    >
      <Container maxWidth="lg">
        {/* MAIN HEADING */}
        <Box sx={{ mb: { xs: 7, md: 16 } }}>
          <MotionTypography
            {...reveal(0, 20)}
            sx={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "secondary.main",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            SELECTED WORK / 2026
          </MotionTypography>

          <Box sx={{ overflow: "hidden", pb: 2 }}>
            <MotionTypography
              component="h2"
              {...reveal(0.1, 70)}
              sx={{
                fontSize: {
                  xs: "clamp(3.5rem, 11vw, 5.5rem)",
                  md: "clamp(5.5rem, 9vw, 8.5rem)",
                },
                fontWeight: 700,
                lineHeight: 0.98,
                letterSpacing: "-0.075em",
                m: 0,
              }}
            >
              My{" "}
              <Box
                component="span"
                sx={{
                  color: "#C06C84",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Projects.
              </Box>
            </MotionTypography>
          </Box>

          <MotionTypography
            {...reveal(0.3)}
            sx={{
              color: "text.secondary",
              fontSize: { xs: 16, md: 19 },
              lineHeight: 1.9,
              maxWidth: 600,
              mt: 4,
            }}
          >
            A selection of things I've built, designed, and experimented with —
            from expressive landing pages to full-stack applications.
          </MotionTypography>
        </Box>

        {/* CATEGORIES */}
        {categories
          .filter((category) => category.projects.length > 0)
          .map((category, index, filteredCategories) => {
            const isLast = index === filteredCategories.length - 1;

            return (
              <Box
                key={category.id}
                id={category.id}
                sx={{
                  position: "relative",
                  mb: {
                    xs: isLast ? 0 : 6,
                    md: isLast ? 0 : 12,
                  },
                  scrollMarginTop: "100px",
                }}
              >
                {/* CATEGORY HEADER */}
                <Box
                  sx={{
                    position: "relative",
                    mb: { xs: 4, md: 8 },
                  }}
                >
                  {/* DECORATIVE NUMBER */}
                  <MotionTypography
                    aria-hidden="true"
                    {...reveal(0, 20)}
                    sx={{
                      position: "absolute",
                      right: { xs: 0, md: 20 },
                      top: { xs: -30, md: -75 },
                      fontSize: { xs: 105, md: 190 },
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.09em",
                      color: "#C06C84",
                      opacity: 0.1,
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    {category.number}
                  </MotionTypography>

                  {/* EYEBROW */}
                  <MotionTypography
                    {...reveal(0.05)}
                    sx={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      color: "secondary.main",
                      mb: 2,
                      position: "relative",
                    }}
                  >
                    {category.number} / SELECTED WORK
                  </MotionTypography>

                  {/* CATEGORY TITLE */}
                  <Box sx={{ overflow: "hidden", pb: 2 }}>
                    <MotionTypography
                      component="h3"
                      {...reveal(0.12, 55)}
                      sx={{
                        fontSize: {
                          xs: "clamp(2.3rem, 7vw, 3.5rem)",
                          md: "clamp(3.2rem, 5vw, 5rem)",
                        },
                        fontWeight: 700,
                        letterSpacing: "-0.055em",
                        lineHeight: 1.08,
                        position: "relative",
                        m: 0,
                      }}
                    >
                      {category.title}
                    </MotionTypography>
                  </Box>

                  {/* CATEGORY DESCRIPTION */}
                  <MotionTypography
                    {...reveal(0.22)}
                    sx={{
                      fontSize: { xs: 15, md: 17 },
                      lineHeight: 1.85,
                      color: "text.secondary",
                      maxWidth: 620,
                      mt: 2,
                      position: "relative",
                    }}
                  >
                    {category.description}
                  </MotionTypography>
                </Box>

                {/* PROJECT GRID */}
                <Grid container spacing={{ xs: 5, md: 5 }} alignItems="stretch">
                  {category.projects.map((project) => (
                    <Grid
                      key={project.id}
                      size={{ xs: 12, md: 6 }}
                      sx={{ display: "flex" }}
                    >
                      <ProjectCard project={project} />
                    </Grid>
                  ))}
                </Grid>

                {/* ANIMATED DIVIDER */}
                <MotionBox
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  sx={{
                    display: {
                      xs: isLast ? "none" : "block",
                      md: "block",
                    },
                    mt: { xs: 5, md: 14 },
                    height: "1px",
                    width: "100%",
                    bgcolor: "divider",
                    transformOrigin: "left",
                  }}
                />
              </Box>
            );
          })}
      </Container>
    </Box>
  );
}

export default Projects;
