import {
  Box,
  Container,
  Typography,
  Input,
  FormControl,
  FormLabel,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, ValidationError } from "@formspree/react";

const inputStyles = {
  color: "#fff",
  fontSize: "1rem",
  px: 1,
  py: 0.7,
  borderRadius: "4px",
  transition: "background-color 0.25s ease",

  "&:before": {
    borderBottom: "1px solid rgba(255,255,255,0.65)",
  },
  "&:hover:not(.Mui-disabled):before": {
    borderBottom: "1px solid white",
  },
  "&:after": {
    borderBottom: "1px solid white",
  },
  "&.Mui-focused": {
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  "& input, & textarea": {
    color: "#fff",
    WebkitTextFillColor: "#fff",
    caretColor: "#fff",
  },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #D98698 inset",
    WebkitTextFillColor: "#fff !important",
  },
};

const labelStyles = {
  color: "rgba(255,255,255,0.9)",
  mb: 1,
  fontSize: "0.95rem",
};

function Contact() {
  const [state, handleSubmit, reset] = useForm("xoeewogq");

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 7, md: 10 },
        color: "white",
        background:
          "linear-gradient(135deg, #F8B195, #F67280, #C06C84, #6C5B7B, #355C7D)",
        backgroundSize: "300% 300%",
        animation: "gradientMove 8s ease infinite",
        "@keyframes gradientMove": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
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
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: "20px",
            backgroundColor: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(8px)",
            p: { xs: 3, sm: 5, md: 6 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 600,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Let's Build Something Together.
          </Typography>

          <Typography sx={{ mb: 5, opacity: 0.9 }}>
            Whether you have a clear vision or just an idea, I'd love to hear
            about it.
          </Typography>

          {state.succeeded ? (
            <Stack spacing={3}>
              <Alert severity="success">
                Thanks for reaching out! Your message has been sent.
              </Alert>
              <Button
                variant="outlined"
                onClick={reset}
                sx={{
                  color: "white",
                  borderColor: "white",
                  alignSelf: "flex-start",
                }}
              >
                Send Another Message
              </Button>
            </Stack>
          ) : (
            <Stack spacing={3.5}>
              <FormControl fullWidth required>
                <FormLabel htmlFor="contact-name" sx={labelStyles}>
                  Name
                </FormLabel>
                <Input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  sx={inputStyles}
                />
              </FormControl>

              <FormControl fullWidth required>
                <FormLabel htmlFor="contact-email" sx={labelStyles}>
                  Email
                </FormLabel>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  sx={inputStyles}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormControl>

              <FormControl fullWidth required>
                <FormLabel htmlFor="contact-message" sx={labelStyles}>
                  What can I help you with?
                </FormLabel>
                <Input
                  id="contact-message"
                  name="message"
                  required
                  multiline
                  minRows={3}
                  sx={inputStyles}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormControl>

              <ValidationError errors={state.errors} />

              <Button
                type="submit"
                variant="contained"
                disabled={state.submitting}
                endIcon={<SendIcon />}
                sx={{
                  alignSelf: "flex-start",
                  mt: 1,
                  px: 4,
                  py: 1.5,
                  bgcolor: "#355C7D",
                  color: "white",
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: "#26445E",
                  },
                }}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
