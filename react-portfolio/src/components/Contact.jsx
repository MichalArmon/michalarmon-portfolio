import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect to an API or email service here.
    console.log("Contact form data:", formData);
    setSubmitted(true);
  };

  const fieldStyles = {
    "& .MuiInputBase-root": {
      color: "white",
      fontSize: "1.1rem",
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.85)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(255,255,255,0.7)",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        color: "white",
        py: { xs: 10, md: 12 },

        background:
          "linear-gradient(135deg, #F8B195, #F67280, #C06C84, #6C5B7B, #355C7D)",
        backgroundSize: "300% 300%",
        animation: "gradientMove 8s ease infinite",

        "@keyframes gradientMove": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          animation: "none",
        },
      }}
    >
      <Container maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            border: "1px solid rgba(255,255,255,0.7)",
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.19)",
            backdropFilter: "blur(10px)",
            padding: {
              xs: "40px 24px",
              sm: "60px 50px",
              md: "100px 80px",
            },
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 600,
              mb: 6,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Let's Get in Touch
          </Typography>

          <Typography
            sx={{
              mb: 5,
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            Have a project in mind or just want to say hello? Leave your details
            and I'll get back to you.
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                variant="standard"
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                sx={fieldStyles}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                variant="standard"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                sx={fieldStyles}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                type="email"
                variant="standard"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={fieldStyles}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                variant="standard"
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                sx={fieldStyles}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              mt: 7,
              px: 5,
              py: 1.6,
              bgcolor: "#355C7D",
              color: "white",
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1.1rem",
              "&:hover": {
                bgcolor: "#26445E",
              },
            }}
          >
            Send Message
          </Button>

          {submitted && (
            <Alert severity="info" sx={{ mt: 3 }}>
              Form validated locally. Message delivery is not connected yet.
            </Alert>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
