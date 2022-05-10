import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { marketScrollStyles } from "./styles";

const MarketScrollCard = ({ content, text, background }) => {
  return (
    <Box sx={marketScrollStyles.container}>
      <Card sx={{ ...marketScrollStyles.card, background }}>
        <CardContent>{content}</CardContent>
      </Card>
      <Typography sx={marketScrollStyles.marketText}>
        {/* Connect your own <br /> domain */}
        {text}
      </Typography>
    </Box>
  );
};

export default MarketScrollCard;
