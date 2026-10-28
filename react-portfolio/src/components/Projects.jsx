import { Box, Container, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Ban Tao Resort",
    description: "A full-stack resort management and booking application.",
    technologies: ["React", "MUI", "Node.js", "MongoDB"],
    image: "",
    link: "",
  },
  {
    id: 2,
    title: "Django Articles",
    description: "A full-stack article management platform.",
    technologies: ["React", "Django", "Python"],
    image: "",
    link: "",
  },
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" fontWeight={700} mb={2}>
        My Projects
      </Typography>

      <Typography color="text.secondary" mb={5}>
        A selection of my work in software development and design.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, md: 6 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
