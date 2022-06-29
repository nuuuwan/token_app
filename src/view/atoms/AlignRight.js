import Box from "@mui/material/Box";

export default function AlignCenter({ children }) {
  return (
    <Box display="flex" justifyContent="flex-end">
      {children}
    </Box>
  );
}
