import { Box, Typography } from "@mui/material";
import React from "react";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { welcomeStyles } from "./styles";

const WelcomeBanner = () => {
  return (
    <Box sx={welcomeStyles.welcomeLayer}>
      <Typography sx={welcomeStyles.welcomeText}>Welcome Toheeb!</Typography>
      <Box sx={welcomeStyles.welcomeLinks}>
        <Typography sx={welcomeStyles.welcomeLink}>
          app.vetrinalive.it/fenoh-store
        </Typography>
        <LaunchOutlinedIcon sx={welcomeStyles.welcomeIcon} />
      </Box>
    </Box>
  );
};

export default WelcomeBanner;
