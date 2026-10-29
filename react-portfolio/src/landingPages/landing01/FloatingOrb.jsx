import { useState } from "react";
import { Box } from "@mui/material";

const rings = [
  {
    rotation: "rotateZ(-25deg) rotateX(68deg)",
    duration: "9s",
    color: "rgba(255,255,255,0.85)",
  },
  {
    rotation: "rotateZ(55deg) rotateX(65deg)",
    duration: "13s",
    color: "rgba(255,192,220,0.9)",
  },
  {
    rotation: "rotateZ(110deg) rotateX(72deg)",
    duration: "17s",
    color: "rgba(255,255,255,0.55)",
  },
];

function FloatingOrb() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientY - rect.top) / rect.height - 0.5;

    const y = (event.clientX - rect.left) / rect.width - 0.5;

    setRotation({
      x: -x * 25,
      y: y * 25,
    });
  };

  return (
    <Box
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 350, md: 650 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1000px",
        pointerEvents: { xs: "none", md: "auto" },

        "@keyframes spinRing": {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },

        "@keyframes orbPulse": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.06)",
          },
        },

        "@keyframes floatParticle": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-35px)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& *": {
            animation: "none !important",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: 320, md: 540 },
          height: { xs: 320, md: 540 },
          transformStyle: "preserve-3d",
          transform: `
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
          `,
          transition: "transform 0.3s ease",
        }}
      >
        {/* Outer glow */}
        <Box
          sx={{
            position: "absolute",
            inset: "10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,180,220,0.3), transparent 70%)",
            filter: "blur(35px)",
          }}
        />

        {/* Main sphere */}
        <Box
          sx={{
            position: "absolute",
            inset: "25%",
            borderRadius: "50%",
            background: `radial-gradient(
              circle at 30% 25%,
              #FFE5F0 0%,
              #FF99BC 20%,
              #F67280 45%,
              #C06C84 70%,
              #6C5B7B 100%
            )`,
            boxShadow: `
              inset -35px -35px 60px rgba(53,92,125,0.5),
              0 0 80px rgba(255,180,220,0.35)
            `,
            animation: "orbPulse 6s ease-in-out infinite",
          }}
        />

        {/* Rotating orbital rings */}
        {rings.map((ring, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              inset: "8%",
              transformStyle: "preserve-3d",
              transform: ring.rotation,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: `2px solid ${ring.color}`,
                boxShadow: "0 0 15px rgba(255,255,255,0.2)",
                animation: `spinRing ${ring.duration} linear infinite`,
              }}
            />
          </Box>
        ))}

        {/* Floating particles */}
        {[
          { top: "12%", left: "12%", size: 12, delay: "0s" },
          { top: "25%", right: "8%", size: 17, delay: "1s" },
          { bottom: "18%", left: "8%", size: 14, delay: "2s" },
          { bottom: "12%", right: "15%", size: 20, delay: "3s" },
        ].map((particle, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #FFE5F0, #F8B195)",
              boxShadow: "0 0 20px rgba(255,255,255,0.45)",
              top: particle.top,
              bottom: particle.bottom,
              left: particle.left,
              right: particle.right,
              animation: `floatParticle 4s ease-in-out ${particle.delay} infinite`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default FloatingOrb;
