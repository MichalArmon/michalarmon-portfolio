import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
  Button,
} from "@mui/material";

function ProjectCard({ project }) {
  return (
    <Card sx={{ height: "100%", borderRadius: 3, overflow: "hidden" }}>
      {project.image ? (
        <CardMedia
          component="img"
          height="220"
          image={project.image}
          alt={project.title}
        />
      ) : (
        <Box sx={{ height: 220, bgcolor: "#6C5B7B" }} />
      )}

      <CardContent>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {project.title}
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {project.description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
          {project.technologies.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>

        {project.link && (
          <Button href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
