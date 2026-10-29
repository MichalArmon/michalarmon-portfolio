import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
  Button,
  CardActionArea,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ProjectCard({ project }) {
  const isExternal = project.link?.startsWith("http");

  const linkProps = isExternal
    ? {
        component: "a",
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {
        component: RouterLink,
        to: project.link,
      };

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {/* Clickable image */}
      {project.link ? (
        <CardActionArea
          {...linkProps}
          sx={{
            height: 220,
            overflow: "hidden",
            "&:hover img": {
              transform: "scale(1.05)",
            },
          }}
        >
          {project.image ? (
            <CardMedia
              component="img"
              height="220"
              image={project.image}
              alt={project.title}
              sx={{ transition: "transform 0.3s ease" }}
            />
          ) : (
            <Box
              sx={{
                height: 220,
                bgcolor: "#6C5B7B",
              }}
            />
          )}
        </CardActionArea>
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

        {project.link && <Button {...linkProps}>View Project</Button>}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
