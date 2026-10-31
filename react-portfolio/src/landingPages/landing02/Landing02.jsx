import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useReducedMotion } from "motion/react";

const M = motion;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1400&auto=format&fit=crop&q=90";

// Replace with the real AURA website when available
const WEBSITE_URL = "https://example.com";

const colors = {
  burgundy: "#420C28",
  pink: "#FF8FB6",
  cream: "#FFF0E8",
};

function Landing02() {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100svh",
        bgcolor: colors.burgundy,
        color: colors.cream,
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* GLOWING BACKGROUND */}
      <Box
        component={M.div}
        animate={reduceMotion ? {} : { scale: [1, 1.2, 1], x: [0, 60, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: "80vw",
          height: "80vw",
          maxWidth: 1000,
          maxHeight: 1000,
          borderRadius: "50%",
          background: "radial-gradient(circle, #B62965 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.65,
          top: "-35%",
          right: "-25%",
          zIndex: -1,
        }}
      />

      {/* BRAND BAR */}
      <Box
        sx={{
          px: { xs: 3, md: 7 },
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Arial, sans-serif",
            fontSize: { xs: 28, md: 38 },
            fontWeight: 900,
            letterSpacing: "-0.09em",
          }}
        >
          AURA®
        </Typography>

        <Typography
          sx={{
            fontSize: 10,
            letterSpacing: "0.2em",
            fontWeight: 700,
          }}
        >
          BEAUTY WITHOUT RULES
        </Typography>
      </Box>

      {/* HERO */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 720, md: 620 },
          px: 3,
        }}
      >
        {/* OVERSIZED BACKGROUND WORD */}
        <Box
          component={M.div}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          sx={{
            position: "absolute",
            width: "100%",
            top: { xs: "20%", md: "7%" },
            left: 0,
            textAlign: "center",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial Black, Arial, sans-serif",
              fontSize: "clamp(110px, 26vw, 460px)",
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.115em",
              color: colors.pink,
            }}
          >
            AURA
          </Typography>
        </Box>

        {/* PRODUCT VISUAL */}
        <Box
          component={M.div}
          initial={reduceMotion ? false : { opacity: 0, y: 120, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -6 }}
          transition={{
            duration: 1.4,
            delay: 0.25,
            type: "spring",
            stiffness: 65,
            damping: 17,
          }}
          sx={{
            position: "absolute",
            zIndex: 2,
            width: { xs: "65%", sm: 330, md: 390 },
            height: { xs: 380, md: 510 },
            top: { xs: "24%", md: "19%" },
            left: { xs: "18%", md: "39%" },
            boxShadow: "25px 35px 80px rgba(20,0,12,.45)",
            overflow: "hidden",
            border: "7px solid rgba(255,255,255,.1)",
          }}
        >
          <Box
            component={M.img}
            src={HERO_IMAGE}
            alt="AURA beauty campaign"
            animate={reduceMotion ? {} : { scale: [1, 1.12, 1] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              display: "block",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* MAIN COPY */}
        <Box
          component={M.div}
          initial={reduceMotion ? false : { opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          sx={{
            position: "absolute",
            zIndex: 3,
            left: { xs: "7%", md: "8%" },
            bottom: { xs: "8%", md: "15%" },
            maxWidth: { xs: "85%", md: 520 },
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.35em",
              mb: 2,
            }}
          >
            NOT JUST SKINCARE.
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: {
                xs: "clamp(54px, 12vw, 80px)",
                md: "clamp(80px, 8vw, 130px)",
              },
              lineHeight: 0.88,
              fontWeight: 400,
              letterSpacing: "-0.07em",
              m: 0,
              mb: 4,
              textShadow: "0 10px 35px rgba(30,0,20,.35)",
            }}
          >
            Your skin.
            <Box component="span" sx={{ display: "block" }}>
              Your rules.
            </Box>
          </Typography>

          <Box
            component={M.div}
            whileHover={reduceMotion ? {} : { x: 8 }}
            whileTap={reduceMotion ? {} : { scale: 0.97 }}
            sx={{ display: "inline-block" }}
          >
            <Button
              component="a"
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                bgcolor: colors.pink,
                color: colors.burgundy,
                borderRadius: 0,
                px: 4,
                py: 2,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.12em",
                "&:hover": {
                  bgcolor: colors.cream,
                },
              }}
            >
              DISCOVER AURA
            </Button>
          </Box>
        </Box>

        {/* VERTICAL CAMPAIGN LABEL */}
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: 35,
            top: "43%",
            writingMode: "vertical-rl",
            fontSize: 11,
            letterSpacing: "0.3em",
            fontWeight: 700,
          }}
        >
          THE NEW ERA OF BEAUTY — 2026
        </Typography>

        {/* OUTLINED DECORATIVE CIRCLE */}
        <Box
          component={M.div}
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            right: { xs: "-22%", md: "6%" },
            bottom: { xs: "26%", md: "3%" },
            width: { xs: 170, md: 280 },
            height: { xs: 170, md: 280 },
            border: "1px dashed rgba(255,143,182,.6)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* BOTTOM STRIP */}
      <Box
        sx={{
          bgcolor: colors.pink,
          color: colors.burgundy,
          px: { xs: 3, md: 7 },
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          position: "relative",
          zIndex: 5,
        }}
      >
        <Typography sx={{ fontSize: 10, fontWeight: 800, letterSpacing: 2 }}>
          BOLD BY NATURE
        </Typography>
        <Typography sx={{ fontSize: 10, fontWeight: 800, letterSpacing: 2 }}>
          AURA © 2026
        </Typography>
      </Box>
    </Box>
  );
}

export default Landing02;
