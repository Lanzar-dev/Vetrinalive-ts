import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { appstoreCardSyles } from "./styles";
import phoneImg from "../../assets/phoneImg.svg";
import appstoreImg from "../../assets/appstoreImg.svg";
import googleplayImg from "../../assets/googleplayImg.svg";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const AppstoreCard = () => {
  return (
    <BasicCard sx={appstoreCardSyles.appCard}>
      <Box sx={appstoreCardSyles.content}>
        <Box sx={appstoreCardSyles.description}>
          <Typography sx={appstoreCardSyles.info}>
            Sell your <br /> products on <br /> your exclusive <br /> APP
            published <br /> on the stores
          </Typography>
          <Box sx={appstoreCardSyles.showMore}>
            <Typography sx={appstoreCardSyles.moreInfo}>Show more</Typography>
            <ArrowForwardOutlinedIcon />
          </Box>
        </Box>
        <img src={phoneImg} alt="phone" loading="lazy" />
      </Box>
      <Box sx={appstoreCardSyles.logo}>
        <img src={appstoreImg} alt="phone" loading="lazy" />
        <img src={googleplayImg} alt="phone" loading="lazy" />
      </Box>
    </BasicCard>
  );
};

export default AppstoreCard;
