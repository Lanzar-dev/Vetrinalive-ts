import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { marketScrollStyles } from "./styles";

import { ScrollCardProps } from "../../utils/app.model";

const MarketScrollCard = ({ content, text, background }: ScrollCardProps) => {
  return (
    <Box sx={marketScrollStyles.container}>
      <Card sx={{ ...marketScrollStyles.card, background }}>
        <CardContent>{content}</CardContent>
      </Card>
      <Typography sx={marketScrollStyles.marketText}>{text}</Typography>
    </Box>
  );
};

export default MarketScrollCard;
