import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { VERSION } from "../../nonview/constants/Version";

export default function VersionWidget() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="caption" component="div">
        Sri Lanka News by @nuuuwan
      </Typography>
      <Typography variant="caption" component="div">
        Last Update {VERSION}
      </Typography>
    </Grid>
  );
}
