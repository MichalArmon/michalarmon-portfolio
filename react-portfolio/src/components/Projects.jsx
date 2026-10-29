import { Box, Container, Typography, Grid } from "@mui/material";

import ProjectCard from "./ProjectCard";

const landingPages = [
  {
    id: "landing-1",
    title: "Business Landing Page",
    description: "A promotional landing page.",
    technologies: ["React", "MUI"],
    image: "",
    link: "/landing-pages/landing01",
  },
  {
    id: "landing-2",
    title: "Here & Now",
    description:
      "A colorful promotional landing page featuring an animated gradient.",
    technologies: ["HTML", "CSS", "Animations"],
    image: "",
    link: "",
  },
  {
    id: "landing-3",
    title: "Coffee Landing Page",
    description:
      "A responsive coffee promotion page featuring a split-screen layout.",
    technologies: ["HTML", "CSS", "Animations"],
    image: "",
    link: "",
  },
  {
    id: "landing-4",
    title: "Nova & Co",
    description:
      "A modern business landing page with a striking visual identity.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    image: "",
    link: "",
  },
  {
    id: "landing-5",
    title: "Terra Exclusive",
    description: "A travel-inspired landing page with a creative image grid.",
    technologies: ["HTML", "CSS", "CSS Grid"],
    image: "",
    link: "",
  },
  {
    id: "landing-6",
    title: "Free Consultation",
    description:
      "A consultation landing page featuring a responsive contact form.",
    technologies: ["HTML", "CSS", "Responsive Design"],
    image: "",
    link: "",
  },
];

const apiProjects = [
  {
    id: "api-1",
    title: "Ban Tao Resort",
    description: "A full-stack resort management and booking application.",
    technologies: ["React", "MUI", "Node.js", "MongoDB"],
    image: "",
    link: "",
  },
  {
    id: "api-2",
    title: "Django Articles",
    description: "A full-stack article management platform.",
    technologies: ["React", "Django", "Python"],
    image: "",
    link: "",
  },
];

const showcaseProjects = [
  // Add showcase websites here.
];

const categories = [
  {
    id: "landing-pages",
    number: "01",
    title: "Landing Pages",
    description:
      "Creative, responsive landing pages with a focus on visual design and user experience.",
    projects: landingPages,
  },
  {
    id: "api-projects",
    number: "02",
    title: "API & Full-Stack Projects",
    description:
      "Applications that combine frontend interfaces, backend logic, and data.",
    projects: apiProjects,
  },
  {
    id: "showcase-websites",
    number: "03",
    title: "Showcase Websites",
    description:
      "Websites focused on branding, presentation, and interactive experiences.",
    projects: showcaseProjects,
  },
];

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        bgcolor: "background.default",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography variant="h3" fontWeight={700} mb={2}>
          My Projects
        </Typography>

        <Typography color="text.secondary" mb={{ xs: 7, md: 10 }}>
          A selection of my work in software development and design.
        </Typography>

        {/* Project Categories */}
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              mb: { xs: 9, md: 12 },
            }}
          >
            {/* Category Heading */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  color: "secondary.main",
                  mb: 1,
                }}
              >
                {category.number} / SELECTED WORK
              </Typography>

              <Typography
                component="h3"
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "2.8rem",
                  },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {category.title}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  maxWidth: 650,
                  lineHeight: 1.8,
                }}
              >
                {category.description}
              </Typography>
            </Box>

            {/* Project Cards */}
            <Grid container spacing={3}>
              {category.projects.map((project) => (
                <Grid key={project.id} size={{ xs: 12, md: 6 }}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>

            {/* Divider */}
            <Box
              sx={{
                mt: 8,
                height: "1px",
                backgroundColor: "divider",
              }}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Projects;
