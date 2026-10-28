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
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#aboutMe" },
  { label: "Contact", href: "/contact" },
];

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
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="a"
            href="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src="/SVG/logo1_1.svg"
              alt="Michal Armon"
              sx={{ width: 100 }}
            />
          </Box>

          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                sx={{
                  color: "white",
                  fontSize: "1.1rem",
                  "&:hover": { color: "#F8B195" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "white",
            }}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack sx={{ p: 3, minWidth: 220 }} spacing={2}>
          {links.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
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
