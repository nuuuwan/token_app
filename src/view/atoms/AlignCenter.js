import Stack from "@mui/material/Stack";

export default function AlignCenter({ children }) {
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      {children}
    </Stack>
  );
}
