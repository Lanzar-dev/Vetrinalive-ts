import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { boxStyles } from "./styles";

import { BasicCardProps } from "../../utils/app.model";
import { NavBarProps } from "../../utils/app.model";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  //   padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  transition: "ease-in .2s",
}));

const BoxWrapper = ({ children, open }) => {
  return (
    <BoxContainer sx={open ? boxStyles.mainOpen : boxStyles.mainClose}>
      <DrawerHeader />
      {children}
    </BoxContainer>
  );
};

export default BoxWrapper;
