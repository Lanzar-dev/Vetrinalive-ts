import { Box } from "@mui/material";
import React from "react";
import { Puff } from "react-loader-spinner";
import { loadingStyles } from "./styles";

export const Loading = () => (
  <Box sx={loadingStyles.main}>
    <Puff color="#21B8F9" height={500} width={100} />
  </Box>
);
