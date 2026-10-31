import { useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion, useReducedMotion } from "motion/react";
import * as THREE from "three";

const palettes = [
  {
    background: "#C9B5FF",
    accent: "#FF72B6",
    metal: "#A888FF",
    text: "#211634",
  },
  {
    background: "#FFB7C8",
    accent: "#FF633D",
    metal: "#FF72A0",
    text: "#451C35",
  },
  {
    background: "#A5DBE8",
    accent: "#BCFF5A",
    metal: "#6EDDEA",
    text: "#163F4A",
  },
];

function Sculpture({ palette, reducedMotion }) {
  const group = useRef();
  const material = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.16;
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        state.pointer.y * 0.18,
        2,
        delta,
      );
    }

    if (material.current) {
      material.current.color.lerp(
        new THREE.Color(palette.metal),
        Math.min(1, delta * 3),
      );
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={reducedMotion ? 0 : 1.8}
        rotationIntensity={reducedMotion ? 0 : 0.2}
        floatIntensity={reducedMotion ? 0 : 0.55}
      >
        {/* MAIN SCULPTURE */}
        <mesh castShadow>
          <torusKnotGeometry args={[1.45, 0.48, 240, 32, 2, 3]} />
          <meshPhysicalMaterial
            ref={material}
            color={palette.metal}
            metalness={0.65}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.08}
            iridescence={1}
            iridescenceIOR={1.3}
            iridescenceThicknessRange={[100, 700]}
          />
        </mesh>

        {/* INNER GLOW OBJECT */}
        <mesh scale={0.65}>
          <icosahedronGeometry args={[0.8, 3]} />
          <meshBasicMaterial
            color={palette.accent}
            transparent
            opacity={0.22}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

function Scene({ palette, reducedMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.8], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={2} />

      <hemisphereLight args={["#ffffff", "#7846c9", 2]} />

      <directionalLight position={[4, 6, 5]} intensity={5} color="#ffffff" />

      <directionalLight position={[-5, 1, 3]} intensity={5} color="#ff6fbe" />

      <pointLight
        position={[0, -3, 3]}
        intensity={75}
        distance={12}
        color="#7df8ff"
      />

      <Sculpture palette={palette} reducedMotion={reducedMotion} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </Canvas>
  );
}

function Landing03() {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const palette = palettes[paletteIndex];

  const changePalette = () => {
    setPaletteIndex((prev) => (prev + 1) % palettes.length);
  };

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100svh",
        bgcolor: palette.background,
        color: palette.text,
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        transition: "background-color 0.8s ease",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* BACKGROUND GRADIENT */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: `
            radial-gradient(circle at 75% 20%, 
              rgba(255,255,255,0.65), transparent 45%),
            radial-gradient(circle at 15% 85%,
              ${palette.accent}55, transparent 50%)
          `,
          transition: "background 0.8s",
        }}
      />

      {/* TOP NAVIGATION */}
      <Box
        sx={{
          px: { xs: 3, md: 7 },
          pt: { xs: 3, md: 5 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: 27, md: 36 },
            letterSpacing: "-0.09em",
          }}
        >
          CHROMA<span style={{ color: palette.accent }}>●</span>
        </Typography>

        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.18em",
          }}
        >
          DIGITAL OBJECTS / 001
        </Typography>
      </Box>

      {/* HERO */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          minHeight: { xs: 760, md: 650 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* OVERSIZED TYPOGRAPHY */}
        <Box
          component={motion.div}
          initial={reducedMotion ? false : { opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          sx={{
            position: "absolute",
            zIndex: 0,
            top: { xs: "10%", md: "13%" },
            width: "100%",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: "clamp(95px, 24vw, 390px)",
              fontWeight: 900,
              lineHeight: 0.85,
              letterSpacing: "-0.105em",
              m: 0,
              whiteSpace: "nowrap",
              transform: "translateX(-0.045em)",
            }}
          >
            FORM
          </Typography>
        </Box>

        {/* 3D SCULPTURE */}
        <Box
          component={motion.div}
          initial={
            reducedMotion ? false : { opacity: 0, scale: 0.65, rotate: -20 }
          }
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          sx={{
            position: "absolute",
            width: { xs: "100%", md: "75%" },
            height: { xs: 490, md: "100%" },
            maxWidth: 1050,
            top: { xs: "21%", md: "2%" },
            zIndex: 2,
            cursor: "grab",
            "&:active": { cursor: "grabbing" },
          }}
        >
          <Scene palette={palette} reducedMotion={reducedMotion} />
        </Box>

        {/* LEFT EDITORIAL COPY */}
        <Box
          component={motion.div}
          initial={reducedMotion ? false : { opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          sx={{
            position: "absolute",
            left: { xs: "6%", md: "7%" },
            bottom: { xs: "7%", md: "15%" },
            zIndex: 4,
            maxWidth: { xs: 290, md: 380 },
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: "0.25em",
              mb: 2,
            }}
          >
            BEYOND THE ORDINARY
          </Typography>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 35, md: 58 },
              letterSpacing: "-0.07em",
              lineHeight: 1.03,
              mb: 2,
            }}
          >
            Reality,
            <br />
            reimagined.
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              lineHeight: 1.8,
              maxWidth: 270,
              opacity: 0.7,
            }}
          >
            An exploration of shape, movement, light and digital expression.
          </Typography>
        </Box>

        {/* RIGHT INTERACTION */}
        <Box
          component={motion.div}
          initial={reducedMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          sx={{
            position: "absolute",
            right: { xs: "6%", md: "7%" },
            bottom: { xs: "32%", md: "18%" },
            zIndex: 5,
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.15em",
              mb: 2,
            }}
          >
            DRAG TO ROTATE ↗
          </Typography>

          <Button
            onClick={changePalette}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: palette.text,
              color: palette.background,
              borderRadius: "100px",
              px: { xs: 2.5, md: 4 },
              py: 1.8,
              fontWeight: 900,
              fontSize: 11,
              letterSpacing: "0.1em",
              transition: "all 0.3s",
              "&:hover": {
                bgcolor: palette.accent,
                color: palette.text,
                transform: "translateY(-4px)",
              },
            }}
          >
            SHIFT THE COLOR
          </Button>
        </Box>
      </Box>

      {/* BOTTOM BAR */}
      <Box
        sx={{
          px: { xs: 3, md: 7 },
          pb: { xs: 3, md: 4 },
          pt: 2,
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          zIndex: 5,
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: "0.15em",
        }}
      >
        <Box>AN INTERACTIVE EXPERIENCE</Box>
        <Box>© CHROMA 2026</Box>
      </Box>
    </Box>
  );
}

export default Landing03;
