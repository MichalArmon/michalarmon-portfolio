import { Box } from "@mui/material";

function LandingBackground() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        background:
          "linear-gradient(135deg, #B624B4 0%, #E62991 55%, #C126B8 100%)",

        "@keyframes floatShape": {
          "0%, 100%": {
            transform: "translate(0, 0) rotate(-15deg)",
          },
          "50%": {
            transform: "translate(-35px, 25px) rotate(-12deg)",
          },
        },

        "@keyframes floatShapeTwo": {
          "0%, 100%": {
            transform: "translate(0, 0) rotate(20deg)",
          },
          "50%": {
            transform: "translate(30px, -30px) rotate(24deg)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& > *": {
            animation: "none !important",
          },
        },
      }}
    >
      {/* Large flowing shape */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "115vw", md: "85vw" },
          height: { xs: "90vh", md: "130vh" },
          top: { xs: "-25%", md: "-45%" },
          left: { xs: "-60%", md: "-30%" },
          borderRadius: "40% 60% 65% 35% / 50% 40% 60% 50%",
          background:
            "linear-gradient(145deg, #EF5AA7 0%, #F12A94 65%, #C621A8 100%)",
          animation: "floatShape 16s ease-in-out infinite",
        }}
      />

      {/* Right purple shape */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "90vw", md: "58vw" },
          height: { xs: "60vh", md: "100vh" },
          top: { xs: "30%", md: "8%" },
          right: { xs: "-55%", md: "-18%" },
          borderRadius: "65% 35% 40% 60% / 55% 60% 40% 45%",
          background:
            "linear-gradient(145deg, #9829B5 0%, #C529AE 50%, #E62991 100%)",
          opacity: 0.75,
          animation: "floatShapeTwo 19s ease-in-out infinite",
        }}
      />

      {/* Soft highlight */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 280, md: 580 },
          height: { xs: 280, md: 580 },
          bottom: "-35%",
          left: "35%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,142,196,0.55), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Thin decorative curve */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 450, md: 900 },
          height: { xs: 450, md: 900 },
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.15)",
          top: "-40%",
          right: "-20%",
        }}
      />
    </Box>
  );
}

export default LandingBackground;
