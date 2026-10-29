import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
} from "@mui/material";
import LandingBackground from "./LandingBackground";
import FloatingOrb from "./FloatingOrb";

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "5px",
    color: "#222",
    transition: "all 0.3s ease",

    "& fieldset": {
      borderColor: "transparent",
    },

    "&:hover fieldset": {
      borderColor: "rgba(211,28,117,0.5)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#D31C75",
      borderWidth: "2px",
    },
  },

  "& .MuiInputBase-input": {
    py: 1.5,
    fontSize: "1rem",
  },
};

function Landing01() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Portfolio demo — no data is sent.
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100svh",
        position: "relative",
        isolation: "isolate",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",

        py: { xs: 10, md: 8 },

        "@keyframes slideUp": {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& *": {
            animation: "none !important",
          },
        },
      }}
    >
      {/* Animated background */}
      <LandingBackground />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          alignItems: "center",
          gap: { xs: 4 },
        }}
      >
        {/* Form panel */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 530,
            boxSizing: "border-box",
            bgcolor: " #7e5c882f",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.53)",
            borderRadius: "8px",
            boxShadow: "0 25px 70px rgba(43,0,51,0.22)",
            color: "#fff",
            p: {
              xs: 4,
              sm: 5,
              md: 7,
            },

            textAlign: "left",

            animation: "slideUp 0.8s ease-out both",
            transition: "box-shadow 0.4s ease",

            "&:hover": {
              boxShadow: "0 30px 80px rgba(43,0,51,0.3)",
            },
          }}
        >
          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.5rem",
              },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Let's Move You Forward.
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                md: "1.1rem",
              },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.88)",
              mb: 4,
            }}
          >
            Professional, personalized solutions designed to help you reach your
            goals with confidence. Let's take the next step together.
          </Typography>

          {submitted ? (
            <Stack spacing={2}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                Thanks for your interest!
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                This is a portfolio demo. No information has been sent.
              </Typography>

              <Button
                onClick={handleReset}
                sx={{
                  color: "#fff",
                  alignSelf: "flex-start",
                  textTransform: "none",
                  px: 0,
                  "&:hover": {
                    color: "#F67280",
                    background: "transparent",
                  },
                }}
              >
                Start Again
              </Button>
            </Stack>
          ) : (
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {/* Name */}
                <Box>
                  <Typography
                    component="label"
                    htmlFor="landing01-name"
                    sx={{
                      display: "block",
                      mb: 1,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    Full Name
                  </Typography>

                  <TextField
                    id="landing01-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    fullWidth
                    size="small"
                    sx={fieldStyles}
                  />
                </Box>

                {/* Email */}
                <Box>
                  <Typography
                    component="label"
                    htmlFor="landing01-email"
                    sx={{
                      display: "block",
                      mb: 1,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </Typography>

                  <TextField
                    id="landing01-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    fullWidth
                    size="small"
                    sx={fieldStyles}
                  />
                </Box>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  disableRipple
                  sx={{
                    alignSelf: "flex-start",
                    mt: 1,
                    bgcolor: "#D31C75",
                    color: "#fff",
                    borderRadius: "4px",
                    px: 5,
                    py: 1.4,
                    fontSize: "1rem",
                    fontWeight: 700,
                    textTransform: "none",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      bgcolor: "#B01061",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
        <FloatingOrb />
      </Container>
    </Box>
  );
}

export default Landing01;
