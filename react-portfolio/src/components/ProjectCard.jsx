import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import GitHubIcon from "@mui/icons-material/GitHub";
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

  const imageContent = (
    <Box
      sx={{
        width: "100%",
        aspectRatio: {
          xs: "4 / 3",
          sm: "16 / 10",
        },
        position: "relative",
        overflow: "hidden",
        bgcolor: "#F4F0F5",
        borderRadius: {
          xs: "12px",
          sm: "14px",
        },
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
            sx={{ fontSize: { xs: 34, md: 42 } }}
          />
        </Box>
      )}

      {/* IMAGE ARROW */}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            transition: disableAnimations
              ? "none"
              : "background-color .3s ease, color .3s ease",
          }}
        >
          <NorthEastIcon sx={{ fontSize: { xs: 19, sm: 21 } }} />
        </Box>
      )}
    </Box>
  );

  return (
    <MotionCard
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
        overflow: "visible",
        position: "relative",

        "@media (hover: hover) and (pointer: fine)": {
          "& .project-image-link:hover .project-image": {
            transform: disableAnimations ? "none" : "scale(1.035)",
          },

          "& .project-image-link:hover .project-arrow": {
            bgcolor: "#F67280",
            color: "#FFFFFF",
          },
        },
      }}
    >
      {/* PROJECT IMAGE LINK */}
      {project.link ? (
        <Box
          {...linkProps}
          className="project-image-link"
          aria-label={`View ${project.title}`}
          sx={{
            width: "100%",
            display: "block",
            textDecoration: "none",
            borderRadius: "14px",

            "&:focus-visible": {
              outline: "2px solid #F67280",
              outlineOffset: 4,
            },
          }}
        >
          {imageContent}
        </Box>
      ) : (
        imageContent
      )}

      {/* PROJECT CONTENT */}
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
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#B07891",
            mb: { xs: 1.2, md: 1.5 },
          }}
        >
          {project.category || "SELECTED WORK"}
        </Typography>

        {/* TITLE */}
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
            mb: 1.5,
            color: "#292532",
            overflowWrap: "break-word",
          }}
        >
          {project.title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#77727D",
            fontSize: { xs: 13.5, sm: 14 },
            lineHeight: 1.8,
            mb: 3,
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
                  borderRadius: "6px",
                  bgcolor: "#F6F0F5",
                  border: "1px solid #EEE5EF",
                  color: "#76677D",
                  fontSize: { xs: 10, sm: 11 },
                  fontWeight: 500,

                  "& .MuiChip-label": {
                    px: { xs: 1, sm: 1.3 },
                  },
                }}
              />
            ))}
          </Stack>
        )}

        {/* BOTTOM LINKS */}
        <Box
          sx={{
            mt: "auto",
            pt: 1.5,
            borderTop: "1px solid #EEE9EF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            minWidth: 0,
          }}
        >
          {/* LIVE PROJECT */}
          {project.link ? (
            <Box
              {...linkProps}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                minHeight: 44,
                minWidth: 0,
                textDecoration: "none",
                color: "#C06C84",
                transition: "color 0.2s ease",

                "&:hover": {
                  color: "#292532",
                },

                "&:focus-visible": {
                  outline: "2px solid #F67280",
                  outlineOffset: 3,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 11 },
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                EXPLORE PROJECT
              </Typography>

              <NorthEastIcon
                sx={{
                  fontSize: 17,
                  flexShrink: 0,
                }}
              />
            </Box>
          ) : (
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#C06C84",
              }}
            >
              PROJECT PREVIEW
            </Typography>
          )}

          {/* GITHUB */}
          {project.github && (
            <Tooltip title="View Source Code" arrow>
              <IconButton
                component="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                sx={{
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  borderRadius: "12px",
                  bgcolor: "#F6F0F5",
                  border: "1px solid #EEE5EF",
                  color: "#292532",
                  transition:
                    "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",

                  "@media (hover: hover) and (pointer: fine)": {
                    "&:hover": {
                      bgcolor: "#C06C84",
                      color: "#FFFFFF",
                      transform: "translateY(-2px)",
                    },
                  },

                  "&:focus-visible": {
                    outline: "2px solid #F67280",
                    outlineOffset: 3,
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 23 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>
    </MotionCard>
  );
}

export default ProjectCard;
