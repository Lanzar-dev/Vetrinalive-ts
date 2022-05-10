import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { marketCardStyles } from "./styles";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import MarketScrollCard from "../../common/MarketScrollCard/MarketScrollCard";
import domain from "../../assets/domain.svg";

const MarketplaceCard = () => {
  const firstCardImg = () => (
    <>
      <img src={domain} alt="domain" />
    </>
  );
  const firstCardText = () => (
    <>
      <Typography>
        Connect your own <br /> domain
      </Typography>
    </>
  );
  const secondCardImg = () => (
    <Box sx={marketCardStyles.scrollText}>
      <Typography sx={marketCardStyles.prodNum}>+50</Typography>
      <Typography sx={marketCardStyles.prodText}>Prodittion</Typography>
    </Box>
  );
  const secondCardText = () => (
    <>
      <Typography>
        50 Additional <br /> Products
      </Typography>
    </>
  );

  return (
    <BasicCard>
      <Box sx={marketCardStyles.wrapper}>
        <Box sx={marketCardStyles.top}>
          <Box sx={marketCardStyles.title}>
            <DashboardCustomizeOutlinedIcon sx={marketCardStyles.icon} />
            <Typography sx={marketCardStyles.text}>
              Extensions Marketplace
            </Typography>
          </Box>
        </Box>
        <Box sx={marketCardStyles.middle}>
          {/* horizontal scroll cards */}
          <MarketScrollCard
            background="#FFA26B"
            content={firstCardImg()}
            text={firstCardText()}
          />
          <MarketScrollCard
            background="#00C48C"
            content={secondCardImg()}
            text={secondCardText()}
          />
          <MarketScrollCard
            background="#21B8F9"
            content={secondCardImg()}
            text={secondCardText()}
          />
        </Box>
        <Box sx={marketCardStyles.bottom}>
          <Typography sx={marketCardStyles.bottomText}>
            Discover all extensions
          </Typography>
          <ArrowForwardOutlinedIcon />
        </Box>
      </Box>
    </BasicCard>
  );
};

export default MarketplaceCard;
