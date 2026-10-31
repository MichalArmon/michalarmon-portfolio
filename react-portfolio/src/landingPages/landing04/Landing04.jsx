import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useReducedMotion } from "motion/react";

const colors = {
  yellow: "#F8DB66",
  red: "#DE4734",
  brown: "#34231C",
  cream: "#FFF9EC",
};

const images = {
  coffee:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&auto=format&fit=crop&q=90",
};

// Replace with the actual café website URL.
const WEBSITE_URL = "https://example.com";

function Landing04() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0, y = 40) => ({
    initial: reducedMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <Box
      component="main"
      dir="rtl"
      sx={{
        bgcolor: colors.yellow,
        color: colors.brown,
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        fontFamily: "'Heebo', 'Arial', sans-serif",
      }}
    >
      {/* TOP BAR */}
      <Box
        sx={{
          px: { xs: 3, md: 7 },
          py: { xs: 3, md: 4 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 5,
        }}
      >
        <Box component={motion.div} {...reveal(0.1, -25)}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: 29, md: 38 },
              letterSpacing: "-0.08em",
              lineHeight: 1,
            }}
          >
            קפה רגע<span style={{ color: colors.red }}>.</span>
          </Typography>
        </Box>
      </Box>

      {/* HERO */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: 1600,
          mx: "auto",
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 2 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          alignItems: "center",
          gap: { xs: 3, md: 5 },
          position: "relative",
        }}
      >
        {/* RIGHT - TEXT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
          }}
        >
          <Box component={motion.div} {...reveal(0.25)}>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 16 },
                fontWeight: 800,
                mb: 3,
                color: colors.red,
              }}
            >
              ☀ בוקר טוב, תל אביב!
            </Typography>
          </Box>

          <Box component={motion.div} {...reveal(0.4, 75)}>
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "clamp(65px, 14vw, 105px)",
                  md: "clamp(85px, 8vw, 145px)",
                },
                lineHeight: 0.95,
                letterSpacing: "-0.085em",
                m: 0,
              }}
            >
              יש מצב
              <br />
              <Box component="span" sx={{ color: colors.red }}>
                לקפה?
              </Box>
            </Typography>
          </Box>

          <Box component={motion.div} {...reveal(0.65)}>
            <Typography
              sx={{
                mt: 4,
                mb: 4,
                maxWidth: 380,
                fontSize: { xs: 17, md: 20 },
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              אספרסו מדויק, מאפה שעושה שמח וקצת זמן לעצמך.
              <br />
              אצלנו תמיד יש מקום לעוד רגע.
            </Typography>
          </Box>

          <Box component={motion.div} {...reveal(0.85)}>
            <Box
              component={motion.div}
              whileHover={reducedMotion ? {} : { y: -5, rotate: -2 }}
              whileTap={reducedMotion ? {} : { scale: 0.96 }}
              sx={{ display: "inline-block" }}
            >
              <Button
                component="a"
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  bgcolor: colors.brown,
                  color: colors.cream,
                  px: 4,
                  py: 2,
                  borderRadius: "100px",
                  fontFamily: "inherit",
                  fontWeight: 800,
                  fontSize: 16,
                  gap: 1,
                  boxShadow: "6px 6px 0px #DE4734",
                  transition: "all .25s",
                  "&:hover": {
                    bgcolor: colors.red,
                    boxShadow: "3px 3px 0px #34231C",
                  },
                }}
              >
                בואו לקפה
              </Button>
            </Box>
          </Box>
        </Box>

        {/* LEFT - IMAGE */}
        <Box
          sx={{
            height: { xs: 410, md: "min(68vh, 650px)" },
            minHeight: { md: 460 },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* RED BACKGROUND SHAPE */}
          <Box
            component={motion.div}
            initial={
              reducedMotion ? false : { scale: 0.6, rotate: -15, opacity: 0 }
            }
            animate={{ scale: 1, rotate: -7, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            sx={{
              position: "absolute",
              width: "90%",
              height: "85%",
              bgcolor: colors.red,
              borderRadius: "47% 53% 44% 56% / 51% 40% 60% 49%",
              transformOrigin: "center",
            }}
          />

          {/* MAIN IMAGE */}
          <Box
            component={motion.div}
            initial={reducedMotion ? false : { opacity: 0, y: 90, rotate: 7 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{
              duration: 1.2,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
              width: "76%",
              height: "82%",
              position: "relative",
              zIndex: 2,
              border: "9px solid #FFF9EC",
              boxShadow: "14px 20px 0px rgba(52,35,28,.17)",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <Box
              component={motion.img}
              src={images.coffee}
              alt="כוס קפה טרייה בבית הקפה"
              animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* ROTATING STAMP */}
          <Box
            component={motion.div}
            animate={reducedMotion ? {} : { rotate: 360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            sx={{
              width: { xs: 100, md: 145 },
              height: { xs: 100, md: 145 },
              borderRadius: "50%",
              bgcolor: colors.cream,
              border: "3px dashed",
              borderColor: colors.brown,
              position: "absolute",
              top: { xs: "-1%", md: "1%" },
              right: { xs: "-1%", md: "0%" },
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "4px 5px 0px rgba(52,35,28,.15)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, md: 19 },
                fontWeight: 900,
                lineHeight: 1.2,
              }}
            >
              קפה
              <br />
              באהבה
              <br />♥
            </Typography>
          </Box>

          {/* SMALL NOTE */}
        </Box>
      </Box>

      {/* MOVING BOTTOM STRIP */}
      <Box
        sx={{
          bgcolor: colors.brown,
          color: colors.cream,
          py: 2.5,
          overflow: "hidden",
          position: "relative",
          zIndex: 6,
        }}
      >
        <Box
          component={motion.div}
          animate={reducedMotion ? {} : { x: ["0%", "50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            display: "flex",
            width: "max-content",
            whiteSpace: "nowrap",
            direction: "rtl",
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Typography
              key={i}
              component="span"
              sx={{
                fontSize: { xs: 13, md: 17 },
                fontWeight: 900,
                letterSpacing: "0.02em",
                mx: 3,
              }}
            >
              קפה חזק ✳ מאפים טריים ✳ אנשים טובים ✳
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Landing04;
