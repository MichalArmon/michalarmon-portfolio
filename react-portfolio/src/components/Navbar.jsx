import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#aboutMe" },
  { label: "Contact", href: "#contact" },
];

const navButtonStyles = {
  color: "#FFFFFF",
  bgcolor: "transparent",
  borderRadius: 0,
  px: 1,
  py: 1,
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "none",
  minWidth: "auto",
  position: "relative",

  "&:hover": {
    bgcolor: "transparent",
    color: "#F8B195",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 2,
    left: 0,
    width: "100%",
    height: 2,
    bgcolor: "#F8B195",
    transform: "scaleX(0)",
    transition: "transform 0.3s ease",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigation = (href) => {
    setOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",
          zIndex: 1100,
          mt: 2,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* LOGO */}
          <Box
            component="a"
            href="#home"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/SVG/logo1_1.svg"
              alt="Michal Armon"
              sx={{
                width: { xs: 120, md: 150 },
                height: "auto",
              }}
            />
          </Box>

          {/* DESKTOP NAVIGATION */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                disableRipple
                sx={navButtonStyles}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#FFFFFF",
              bgcolor: "rgba(255,255,255,0.08)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.15)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          zIndex: 1500,
          "& .MuiDrawer-paper": {
            width: { xs: "85vw", sm: 340 },
            maxWidth: 360,
            boxSizing: "border-box",
            bgcolor: "#355C7D",
            color: "#FFFFFF",
            px: 3,
            py: 3,
            border: "none",
            boxShadow: "-10px 0 40px rgba(0,0,0,0.25)",
          },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 6,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              letterSpacing: "0.2em",
              fontWeight: 700,
              color: "#F8B195",
            }}
          >
            NAVIGATION
          </Typography>

          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            sx={{ color: "#FFFFFF" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* MOBILE LINKS */}
        <Stack spacing={1} sx={{ width: "100%" }}>
          {links.map((link, index) => (
            <Button
              key={link.label}
              onClick={() => handleNavigation(link.href)}
              fullWidth
              disableRipple
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "left",
                color: "#FFFFFF",
                bgcolor: "transparent",
                fontSize: "1.5rem",
                fontWeight: 600,
                textTransform: "none",
                borderRadius: 0,
                py: 2,
                px: 1,
                borderBottom: "1px solid rgba(255,255,255,0.15)",

                "&:hover": {
                  color: "#F8B195",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              {link.label}

              <Typography
                component="span"
                sx={{
                  color: "#F8B195",
                  fontSize: 11,
                  fontWeight: 500,
                }}
              >
                0{index + 1}
              </Typography>
            </Button>
          ))}
        </Stack>

        {/* FOOTER */}
        <Box sx={{ mt: "auto", pt: 6 }}>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 11,
              letterSpacing: "0.12em",
            }}
          >
            MICHAL ARMON / PORTFOLIO
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
