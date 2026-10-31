import {
  Box,
  Container,
  Typography,
  InputBase,
  FormControl,
  FormLabel,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useForm, ValidationError } from "@formspree/react";

const colors = {
  ink: "#FFFFFF",
  muted: "rgba(255,255,255,0.75)",
  rose: "#F8B195",
  purple: "#F8B195",
  blue: "#FFFFFF",
  pale: "#355C7D",
};

const labelStyles = {
  color: colors.ink,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  mb: 1.5,
  "&.Mui-focused": {
    color: colors.rose,
  },
};

const inputStyles = {
  width: "100%",
  color: "#FFFFFF",
  fontSize: { xs: 16, md: 18 },
  fontWeight: 400,
  lineHeight: 1.6,
  px: 0,
  py: 1.7,
  borderBottom: "1px solid rgba(255,255,255,0.35)",
  borderRadius: 0,
  transition: "border-color 0.25s ease",

  "&:hover": {
    borderColor: "#F8B195",
  },

  "&.Mui-focused, &:focus-within": {
    borderBottom: "1px solid #F8B195",
  },

  "& input, & textarea": {
    color: "#FFFFFF",
    WebkitTextFillColor: "#FFFFFF",
    caretColor: "#F8B195",
  },

  "& input::placeholder, & textarea::placeholder": {
    color: "rgba(255,255,255,0.55)",
    opacity: 1,
  },

  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #355C7D inset",
    WebkitTextFillColor: "#FFFFFF !important",
    caretColor: "#FFFFFF",
  },
};

function Contact() {
  const [state, handleSubmit, reset] = useForm("xoeewogq");

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        bgcolor: "#355C7D",
        color: "#FFFFFF",
        overflow: "hidden",
        scrollMarginTop: { xs: "72px", md: "88px" },
        pt: { xs: 9, md: 16 },
        pb: { xs: 12, md: 20 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* SECTION LABEL */}
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: colors.rose,
            mb: { xs: 3, md: 5 },
          }}
        >
          04 / CONTACT
        </Typography>

        {/* HEADER */}
        <Box
          sx={{
            maxWidth: 950,
            mb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "clamp(2.9rem, 11vw, 4.5rem)",
                md: "clamp(5rem, 8vw, 8rem)",
              },
              fontWeight: 700,
              letterSpacing: "-0.075em",
              lineHeight: 1.02,
              mb: 4,
            }}
          >
            Have something
            <Box
              component="span"
              sx={{
                display: "block",
                fontWeight: 400,
                fontStyle: "italic",
                color: colors.rose,
              }}
            >
              in mind?
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 620,
              fontSize: { xs: 16, md: 20 },
              lineHeight: 1.8,
              color: colors.muted,
            }}
          >
            Whether you're exploring a collaboration, considering me for a role,
            or simply interested in connecting, I'd be glad to hear from you.
          </Typography>
        </Box>

        {/* CONTENT GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(180px, 0.7fr) minmax(0, 1.4fr)",
            },
            gap: { xs: 7, md: 12 },
            alignItems: "start",
          }}
        >
          {/* LEFT COLUMN */}
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: colors.rose,
                mb: 3,
              }}
            >
              START A CONVERSATION
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 23, md: 30 },
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: "-0.035em",
                maxWidth: 300,
              }}
            >
              Good work begins with a thoughtful conversation.
            </Typography>

            <Box
              sx={{
                width: 50,
                height: 2,
                bgcolor: colors.rose,
                mt: 4,
              }}
            />
          </Box>

          {/* RIGHT COLUMN — FORM */}
          <Box>
            {state.succeeded ? (
              <Stack
                spacing={3}
                sx={{
                  py: 5,
                  borderTop: `1px solid ${colors.rose}`,
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: { xs: 28, md: 36 },
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Thank you for reaching out.
                </Typography>

                <Typography
                  sx={{
                    color: colors.muted,
                    fontSize: 17,
                    lineHeight: 1.8,
                  }}
                >
                  Your message has been sent successfully. I look forward to
                  reading it.
                </Typography>

                <Button
                  onClick={reset}
                  endIcon={<ArrowOutwardIcon />}
                  sx={{
                    alignSelf: "flex-start",
                    px: 0,
                    py: 1.5,
                    color: colors.blue,
                    borderRadius: 0,
                    textTransform: "none",
                    fontSize: 14,
                    fontWeight: 700,
                    borderBottom: `1px solid ${colors.blue}`,
                    "&:hover": {
                      bgcolor: "transparent",
                      color: colors.rose,
                    },
                  }}
                >
                  Send another message
                </Button>
              </Stack>
            ) : (
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={5}>
                  {/* NAME */}
                  <FormControl fullWidth required>
                    <FormLabel htmlFor="contact-name" sx={labelStyles}>
                      Name
                    </FormLabel>

                    <InputBase
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      sx={inputStyles}
                      inputProps={{
                        "aria-label": "Name",
                      }}
                    />
                  </FormControl>

                  {/* EMAIL */}
                  <FormControl fullWidth required>
                    <FormLabel htmlFor="contact-email" sx={labelStyles}>
                      Email
                    </FormLabel>

                    <InputBase
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      sx={inputStyles}
                      inputProps={{
                        "aria-label": "Email",
                      }}
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </FormControl>

                  {/* MESSAGE */}
                  <FormControl fullWidth required>
                    <FormLabel htmlFor="contact-message" sx={labelStyles}>
                      Message
                    </FormLabel>

                    <InputBase
                      id="contact-message"
                      name="message"
                      required
                      multiline
                      minRows={4}
                      placeholder="Tell me a little about what you have in mind..."
                      sx={inputStyles}
                      inputProps={{
                        "aria-label": "Message",
                      }}
                    />

                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </FormControl>

                  {/* FORM ERRORS */}
                  {state.errors && !state.succeeded && (
                    <ValidationError errors={state.errors} />
                  )}

                  {/* SUBMIT */}
                  <Box sx={{ pt: 2 }}>
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      endIcon={<ArrowOutwardIcon />}
                      sx={{
                        px: 0,
                        py: 1.5,
                        borderRadius: 0,
                        textTransform: "none",
                        color: colors.blue,
                        fontSize: 16,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        borderBottom: `1px solid ${colors.blue}`,
                        transition: "color 0.25s ease, border-color 0.25s ease",
                        "&:hover": {
                          bgcolor: "transparent",
                          color: colors.rose,
                          borderColor: colors.rose,
                        },
                        "&.Mui-disabled": {
                          color: colors.muted,
                        },
                      }}
                    >
                      {state.submitting ? "Sending..." : "Send message"}
                    </Button>
                  </Box>
                </Stack>
              </Box>
            )}
          </Box>
        </Box>

        {/* BOTTOM LINE */}
        <Box
          sx={{
            mt: { xs: 12, md: 18 },
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              color: colors.muted,
              fontSize: 12,
              letterSpacing: "0.04em",
            }}
          >
            MICHAL ARMON / PORTFOLIO
          </Typography>

          <Typography
            sx={{
              color: colors.muted,
              fontSize: 12,
            }}
          >
            Designed with intention. Built with care.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
