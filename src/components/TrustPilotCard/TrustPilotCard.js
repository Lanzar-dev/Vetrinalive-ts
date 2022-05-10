import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { trustPilotStyles } from "./styles";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import vector from "../../assets/Vector.svg";

const TrustPilotCard = () => {
  return (
    <BasicCard sx={trustPilotStyles.main}>
      <Box sx={trustPilotStyles.wrapper}>
        <Box sx={trustPilotStyles.top}>
          <img src={vector} alt="star" sx={trustPilotStyles.icon} />
          <Typography sx={trustPilotStyles.text}>Trustpilot</Typography>
          {/* </Box> */}
        </Box>
        <Box sx={trustPilotStyles.middle}>
          <Typography sx={trustPilotStyles.middlePercDetails}>
            Show us your love by leaving a
            <span style={trustPilotStyles.positive}> positive</span> review on
            trust pilot and receive the extension of{" "}
            <span style={trustPilotStyles.addition}>
              50 additional products
            </span>
          </Typography>
        </Box>
        <Box sx={trustPilotStyles.bottom}>
          <Typography sx={trustPilotStyles.bottomText}>
            Write a review on Trustpilot
          </Typography>
          <ArrowForwardOutlinedIcon />
        </Box>
      </Box>
    </BasicCard>
  );
};

export default TrustPilotCard;
