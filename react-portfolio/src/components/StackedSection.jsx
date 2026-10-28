import { Box } from "@mui/material";

function StackedSection({ id, children, index = 0, long = false }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: long ? "relative" : "sticky",
        top: long ? "auto" : 0,
        minHeight: "100vh",
        zIndex: index + 1,
        backgroundColor: "background.default",
        isolation: "isolate",
      }}
    >
      {children}
    </Box>
  );
}

export default StackedSection;
