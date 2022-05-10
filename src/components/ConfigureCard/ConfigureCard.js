import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { configureStyles } from "./styles";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const ConfigureCard = () => {
  return (
    <BasicCard>
      <Box sx={configureStyles.wrapper}>
        <Box sx={configureStyles.top}>
          <Box sx={configureStyles.title}>
            <BuildOutlinedIcon sx={configureStyles.icon} />
            <Typography sx={configureStyles.text}>
              Configure your shop
            </Typography>
          </Box>
        </Box>
        <Box sx={configureStyles.middle}>
          <Box sx={configureStyles.middlePerc}>
            <Typography sx={configureStyles.middleTitlePerc}>45%</Typography>
            <Typography sx={configureStyles.middleTitle}>Completed</Typography>
          </Box>
          <Typography sx={configureStyles.middlePercDetails}>
            Complete all the steps to have a <br /> complete shop to best
            present to your <br /> customers.
          </Typography>
        </Box>
        <Box sx={configureStyles.bottom}>
          <Typography sx={configureStyles.bottomText}>
            Complete the setup!
          </Typography>
          <ArrowForwardOutlinedIcon />
        </Box>
      </Box>
    </BasicCard>
  );
};

export default ConfigureCard;
