import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  useMediaQuery,
} from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import { Link as RouterLink } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const MotionCard = motion.create(Card);

function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion();
  const isMobile = useMediaQuery("(max-width:899px)");
  const disableAnimations = reduceMotion || isMobile;

  const isExternal = /^https?:\/\//i.test(project.link ?? "");

  const linkProps = !project.link
    ? {}
    : isExternal
      ? {
          component: "a",
          href: project.link,
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {
          component: RouterLink,
          to: project.link,
          target: "_blank",
          rel: "noopener noreferrer",
        };

  return (
    <MotionCard
      {...linkProps}
      initial={disableAnimations ? false : { opacity: 0, y: 35 }}
      whileInView={disableAnimations ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={project.link && !disableAnimations ? { y: -6 } : undefined}
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "transparent",
        color: "#292532",
        borderRadius: 0,
        overflow: "visible",
        border: "none",
        boxShadow: "none",
        textDecoration: "none",
        cursor: project.link ? "pointer" : "default",
        position: "relative",

        "&:hover .project-image": {
          transform: disableAnimations ? "none" : "scale(1.04)",
        },

        "&:hover .project-arrow": {
          bgcolor: "#F67280",
          color: "#FFFFFF",
          transform: disableAnimations ? "none" : "translate(3px, -3px)",
        },

        "&:hover .project-title": {
          color: "#C06C84",
        },

        "&:focus-visible": {
          outline: "2px solid #F67280",
          outlineOffset: 6,
        },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          position: "relative",
          bgcolor: "#F4F0F5",
          borderRadius: "14px",
          flexShrink: 0,
        }}
      >
        {project.image ? (
          <Box
            component="img"
            className="project-image"
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: disableAnimations ? "none" : "transform .5s ease",
              willChange: "auto",
            }}
          />
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#B6A8BF",
              background:
                "linear-gradient(135deg, #F8B19533, #C06C8433, #6C5B7B33)",
            }}
          >
            <ImageNotSupportedOutlinedIcon sx={{ fontSize: 42 }} />
          </Box>
        )}

        {/* FLOATING ARROW */}
        {project.link && (
          <Box
            className="project-arrow"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 44,
              height: 44,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,.94)",
              color: "#383043",
              boxShadow: "0 4px 18px rgba(30,25,40,.10)",
              backdropFilter: isMobile ? "none" : "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: disableAnimations
                ? "none"
                : "background-color .3s ease, color .3s ease, transform .3s ease",
            }}
          >
            <NorthEastIcon sx={{ fontSize: 21 }} />
          </Box>
        )}
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          pt: 3,
          pb: 2,
          px: 0.5,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* CATEGORY */}
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B07891",
            mb: 1.5,
          }}
        >
          {project.category || "SELECTED WORK"}
        </Typography>

        {/* TITLE */}
        <Typography
          component="h3"
          className="project-title"
          sx={{
            fontSize: { xs: 23, md: 27 },
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.035em",
            mb: 1.5,
            color: "#292532",
            transition: disableAnimations ? "none" : "color .3s ease",
          }}
        >
          {project.title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#77727D",
            fontSize: 14,
            lineHeight: 1.8,
            mb: 3,
            flexGrow: 1,
          }}
        >
          {project.description}
        </Typography>

        {/* TECHNOLOGIES */}
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
          {project.technologies?.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                height: 28,
                borderRadius: "6px",
                bgcolor: "#F6F0F5",
                border: "1px solid #EEE5EF",
                color: "#76677D",
                fontSize: 11,
                fontWeight: 500,
                "& .MuiChip-label": {
                  px: 1.3,
                },
              }}
            />
          ))}
        </Stack>

        {/* LINK */}
        <Box
          sx={{
            mt: "auto",
            pt: 2,
            borderTop: "1px solid #EEE9EF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#C06C84",
            }}
          >
            {project.link ? "EXPLORE PROJECT" : "PROJECT PREVIEW"}
          </Typography>

          {project.link && (
            <NorthEastIcon
              sx={{
                fontSize: 18,
                color: "#C06C84",
              }}
            />
          )}
        </Box>
      </Box>
    </MotionCard>
  );
}

export default ProjectCard;
