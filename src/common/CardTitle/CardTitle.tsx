import { Box, Typography } from "@mui/material";
import React from "react";
import { cardTitleStyles } from "./styles";

const CardTitle = ({
  titleIcon,
  title,
}: {
  titleIcon: React.ReactNode;
  title: string;
}) => {
  return (
    <Box sx={cardTitleStyles.title}>
      <Box sx={cardTitleStyles.icon}>{titleIcon}</Box>
      <Typography sx={cardTitleStyles.text}>{title}</Typography>
    </Box>
  );
};

export default CardTitle;
