import { useEffect, useRef } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

function LogoAnimation({ onEnter }) {
  const isMobile = useMediaQuery("(max-width:899px)");
  const enteredRef = useRef(false);

  const handleEnter = () => {
    if (enteredRef.current) return;
    enteredRef.current = true;
    onEnter();
  };

  useEffect(() => {
    if (!isMobile) return;

    const timer = setTimeout(handleEnter, 3800);
    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        zIndex: 9999,
        overflow: "hidden",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background:
          "radial-gradient(ellipse at 50% 42%, #436B8A 0%, #355C7D 35%, #203B55 100%)",

        // Original logo animations
        "@keyframes rotateLeft": {
          to: {
            transform: "rotate(90deg) scale(1.4) translateY(-10px)",
          },
        },
        "@keyframes moveAndRotateRight": {
          "0%, 20%": {
            transform: "translateX(350px)",
          },
          "50%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "rotate(-90deg) scale(1.4)",
          },
        },
        "@keyframes fadeIn": {
          to: { opacity: 1 },
        },
        "@keyframes riseIn": {
          from: {
            opacity: 0,
            transform: "translateY(15px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "@keyframes lineReveal": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      }}
    >
      {/* Subtle architectural grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: {
            xs: "52px 52px",
            md: "80px 80px",
          },
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 80%)",
        }}
      />

      {/* Top branding */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 30, md: 45 },
          left: { xs: 25, md: 60 },
          opacity: 0,
          animation: "fadeIn 1s ease 2.2s forwards",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Courier New', monospace",
            fontSize: "0.7rem",
            letterSpacing: 3,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          MICHAL ARMON
        </Typography>
      </Box>

      {/* Side detail */}
      <Typography
        sx={{
          position: "absolute",
          top: { xs: 35, md: 49 },
          right: { xs: 25, md: 60 },
          fontFamily: "'Courier New', monospace",
          fontSize: "0.65rem",
          letterSpacing: 2,
          color: "rgba(255,255,255,0.5)",
          opacity: 0,
          animation: "fadeIn 1s ease 2.2s forwards",
        }}
      >
        PORTFOLIO / 2026
      </Typography>

      {/* Center content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: -3,
        }}
      >
        {/* Original animated logo */}
        <Box
          onClick={handleEnter}
          aria-label="Enter portfolio"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleEnter();
            }
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: { xs: "3.5rem", md: "5rem" },
            fontFamily: "'Courier New', monospace",
            cursor: "pointer",
            userSelect: "none",
            whiteSpace: "nowrap",
            transition: "filter 0.3s ease",
            "&:hover": {
              filter: "drop-shadow(0 0 18px rgba(255,255,255,0.17))",
            },
          }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              animation: "rotateLeft 1.2s ease-out 0.6s forwards",
            }}
          >
            {"<"}
          </Box>

          <Box
            component="span"
            sx={{
              display: "inline-block",
              mr: 1,
              animation: "moveAndRotateRight 1.5s ease-out forwards",
            }}
          >
            {">"}
          </Box>

          <Box
            component="span"
            sx={{
              fontWeight: 200,
              opacity: 0,
              animation: "fadeIn 1s ease forwards",
              mt: 1,
            }}
          >
            ichal
          </Box>
        </Box>

        {/* Thin animated divider */}
        <Box
          sx={{
            width: { xs: 160, md: 220 },
            height: "1px",
            mt: { xs: 1.5, md: 2 },
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
            transform: "scaleX(0)",
            animation: "lineReveal 0.9s ease 1.8s forwards",
          }}
        />

        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: "0.7rem", md: "0.85rem" },
            fontFamily: "'Courier New', monospace",
            letterSpacing: { xs: 2, md: 4 },
            color: "rgba(255,255,255,0.75)",
            opacity: 0,
            textAlign: "center",
            animation: "riseIn 1s ease 2s forwards",
          }}
        >
          ARCHITECT{" "}
          <Box component="span" sx={{ color: "#F8B195" }}>
            →
          </Box>{" "}
          DEVELOPER
        </Typography>

        <Typography
          sx={{
            mt: 2,
            px: 3,
            fontSize: { xs: "0.75rem", md: "0.9rem" },
            fontFamily: "Arial, sans-serif",
            fontWeight: 300,
            letterSpacing: 1,
            textAlign: "center",
            color: "rgba(255,255,255,0.48)",
            opacity: 0,
            animation: "riseIn 1s ease 2.25s forwards",
          }}
        >
          Designing spaces. Building experiences.
        </Typography>
      </Box>

      {/* Enter action */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "11%", md: "10%" },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          opacity: 0,
          animation: "riseIn 0.8s ease 2.3s forwards",
        }}
      >
        <Button
          onClick={handleEnter}
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            color: "white",
            fontFamily: "'Courier New', monospace",
            fontSize: { xs: "0.75rem", md: "0.85rem" },
            letterSpacing: 2.5,
            fontWeight: 400,
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 0,
            px: { xs: 3, md: 4 },
            py: 1.5,
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.8)",
              transform: "translateY(-3px)",
            },
            "& .MuiButton-endIcon": {
              transition: "transform 0.3s ease",
            },
            "&:hover .MuiButton-endIcon": {
              transform: "translateX(5px)",
            },
          }}
        >
          ENTER PORTFOLIO
        </Button>

        {isMobile && (
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontFamily: "'Courier New', monospace",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 1,
            }}
          >
            OPENING AUTOMATICALLY
          </Typography>
        )}
      </Box>

      {/* Bottom frame */}
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          left: { xs: 25, md: 60 },
          right: { xs: 25, md: 60 },
          display: "flex",
          justifyContent: "space-between",
          opacity: 0,
          animation: "fadeIn 1s ease 2.5s forwards",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.6rem",
            letterSpacing: 2,
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Courier New', monospace",
          }}
        >
          DESIGN × CODE
        </Typography>

        <Typography
          sx={{
            fontSize: "0.6rem",
            letterSpacing: 2,
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Courier New', monospace",
          }}
        >
          01 / 01
        </Typography>
      </Box>
    </Box>
  );
}

export default LogoAnimation;
