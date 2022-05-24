import * as React from "react";

import { Box, Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { dateStyles } from "./styles";

export default function BasicDatePicker() {
  return (
    <Box sx={dateStyles.month}>
      <Typography sx={dateStyles.monthText}>This month</Typography>
      <ExpandMore sx={dateStyles.expand} />
    </Box>
  );
}
