import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#aboutMe" },
  { label: "Contact", href: "#contact" },
];

const navButtonStyles = {
  color: "white",
  backgroundColor: "transparent",
  borderRadius: 0,
  px: 1,
  py: 1,
  fontWeight: 500,
  fontSize: "1rem",
  textTransform: "none",
  position: "relative",
  minWidth: "auto",
  transition: "color 0.3s ease",

  "&:hover": {
    backgroundColor: "transparent",
    color: "#F8B195",
  },

  "&:active": {
    backgroundColor: "transparent",
  },

  "&.Mui-focusVisible": {
    outline: "2px solid rgba(255,255,255,0.7)",
    outlineOffset: 4,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 2,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#F8B195",
    transform: "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 0.3s ease",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
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
          {/* Logo */}
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

          {/* Desktop Navigation */}
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
                disableElevation
                sx={navButtonStyles}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#355C7D",
            color: "white",
            width: 260,
            px: 3,
            py: 5,
          },
        }}
      >
        <Stack spacing={3}>
          {links.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              disableRipple
              sx={{
                ...navButtonStyles,
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                fontSize: "1.15rem",
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}

export default Navbar;
