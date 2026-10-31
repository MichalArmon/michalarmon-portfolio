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
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={project.link && !disableAnimations ? { y: -6 } : undefined}
      elevation={0}
      sx={{
        width: "100%",
        minWidth: 0,
        height: "100%",

        display: "flex",
        flexDirection: "column",

        bgcolor: "transparent",
        color: "#292532",

        borderRadius: 0,
        border: "none",
        boxShadow: "none",
        textDecoration: "none",

        overflow: "visible",
        position: "relative",

        cursor: project.link ? "pointer" : "default",

        "@media (hover: hover) and (pointer: fine)": {
          "&:hover .project-image": {
            transform: disableAnimations ? "none" : "scale(1.035)",
          },

          "&:hover .project-arrow": {
            bgcolor: "#F67280",
            color: "#FFFFFF",
            transform: disableAnimations ? "none" : "translate(3px, -3px)",
          },

          "&:hover .project-title": {
            color: "#C06C84",
          },
        },

        "&:focus-visible": {
          outline: "2px solid #F67280",
          outlineOffset: 5,
        },
      }}
    >
      {/* PROJECT IMAGE */}
      <Box
        sx={{
          width: "100%",
          minWidth: 0,

          aspectRatio: {
            xs: "4 / 3",
            sm: "16 / 10",
          },

          overflow: "hidden",
          position: "relative",

          bgcolor: "#F4F0F5",

          borderRadius: {
            xs: "12px",
            sm: "14px",
          },

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

              transition: disableAnimations ? "none" : "transform 0.5s ease",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#B6A8BF",

              background:
                "linear-gradient(135deg, #F8B19533, #C06C8433, #6C5B7B33)",
            }}
          >
            <ImageNotSupportedOutlinedIcon
              sx={{
                fontSize: { xs: 34, md: 42 },
              }}
            />
          </Box>
        )}

        {/* FLOATING ARROW */}
        {project.link && (
          <Box
            className="project-arrow"
            sx={{
              position: "absolute",

              top: { xs: 12, sm: 16 },
              right: { xs: 12, sm: 16 },

              width: { xs: 40, sm: 44 },
              height: { xs: 40, sm: 44 },

              borderRadius: "50%",

              bgcolor: "rgba(255,255,255,0.96)",
              color: "#383043",

              boxShadow: "0 4px 18px rgba(30,25,40,.10)",

              backdropFilter: isMobile ? "none" : "blur(10px)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              pointerEvents: "none",

              transition: disableAnimations
                ? "none"
                : "background-color .3s ease, color .3s ease, transform .3s ease",
            }}
          >
            <NorthEastIcon
              sx={{
                fontSize: { xs: 19, sm: 21 },
              }}
            />
          </Box>
        )}
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          pt: { xs: 2.5, md: 3 },
          pb: { xs: 1.5, md: 2 },
          px: { xs: 0.25, md: 0.5 },

          minWidth: 0,
          flexGrow: 1,

          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* CATEGORY */}
        <Typography
          sx={{
            fontSize: { xs: 10, md: 10 },
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B07891",

            mb: { xs: 1.2, md: 1.5 },
          }}
        >
          {project.category || "SELECTED WORK"}
        </Typography>

        {/* PROJECT TITLE */}
        <Typography
          component="h3"
          className="project-title"
          sx={{
            fontSize: {
              xs: "clamp(1.3rem, 5vw, 1.55rem)",
              sm: 25,
              md: 27,
            },

            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.035em",

            mb: { xs: 1.5, md: 1.5 },

            color: "#292532",

            overflowWrap: "break-word",

            transition: disableAnimations ? "none" : "color 0.3s ease",
          }}
        >
          {project.title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#77727D",

            fontSize: {
              xs: 13.5,
              sm: 14,
            },

            lineHeight: {
              xs: 1.8,
              md: 1.8,
            },

            mb: { xs: 2.5, md: 3 },

            flexGrow: 1,

            overflowWrap: "break-word",
          }}
        >
          {project.description}
        </Typography>

        {/* TECHNOLOGIES */}
        {!!project.technologies?.length && (
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            gap={{ xs: 0.75, sm: 1 }}
            sx={{
              mb: { xs: 2.5, md: 3 },
              minWidth: 0,
            }}
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  height: { xs: 26, sm: 28 },

                  maxWidth: "100%",
                  minWidth: 0,

                  borderRadius: "6px",

                  bgcolor: "#F6F0F5",
                  border: "1px solid #EEE5EF",

                  color: "#76677D",

                  fontSize: { xs: 10, sm: 11 },
                  fontWeight: 500,

                  "& .MuiChip-label": {
                    px: { xs: 1, sm: 1.3 },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                }}
              />
            ))}
          </Stack>
        )}

        {/* PROJECT LINK */}
        <Box
          sx={{
            mt: "auto",
            pt: { xs: 1.75, md: 2 },

            borderTop: "1px solid #EEE9EF",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            gap: 2,
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 10, sm: 11 },
              fontWeight: 700,

              letterSpacing: {
                xs: "0.1em",
                sm: "0.12em",
              },

              color: "#C06C84",
            }}
          >
            {project.link ? "EXPLORE PROJECT" : "PROJECT PREVIEW"}
          </Typography>

          {project.link && (
            <NorthEastIcon
              sx={{
                fontSize: { xs: 17, sm: 18 },
                color: "#C06C84",
                flexShrink: 0,
              }}
            />
          )}
        </Box>
      </Box>
    </MotionCard>
  );
}

export default ProjectCard;
