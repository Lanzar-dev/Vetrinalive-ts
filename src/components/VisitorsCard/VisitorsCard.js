import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { visitorsCardStyles } from "./styles";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import BasicDatePicker from "../../common/DatePicker/DatePicker";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CardTitle from "../../common/CardTitle/CardTitle";

const VisitorsCard = () => {
  return (
    <BasicCard>
      <Box sx={visitorsCardStyles.wrapper}>
        <Box sx={visitorsCardStyles.top}>
          <CardTitle
            titleIcon={<VisibilityOutlinedIcon />}
            title={"Visitors"}
          />

          <BasicDatePicker />
        </Box>
        <Box sx={visitorsCardStyles.middle}>
          <Typography sx={visitorsCardStyles.middleTitle}>1824</Typography>
        </Box>
        <Box sx={visitorsCardStyles.bottom}>
          <Typography sx={visitorsCardStyles.bottomText}>
            Do you want more visits? Contact us!
          </Typography>
          <ArrowForwardOutlinedIcon />
        </Box>
      </Box>
    </BasicCard>
  );
};

export default VisitorsCard;
