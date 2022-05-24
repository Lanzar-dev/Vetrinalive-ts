import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

import { BasicCardProps } from "../../utils/app.model";

const CardWrapper = styled(Card)({
  borderRadius: "10px",
  padding: "6px",
  boxShadow:
    "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
});

const BasicCard = ({ children, sx }: BasicCardProps) => {
  return (
    <CardWrapper sx={sx}>
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

export default BasicCard;
