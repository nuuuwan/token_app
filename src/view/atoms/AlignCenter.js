import Stack from "@mui/material/Stack";

export default function AlignCenter({ children }) {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {children}
    </Stack>
  );
}
