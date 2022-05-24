import React from "react";
import { Box } from "@mui/material";
import BoxWrapper from "../../components/BoxWrapper/BoxWrapper";
import { styled } from "@mui/material/styles";
import { NavBarProps } from "../../utils/app.model";

import { orderStyles } from "./styles";

const OrderBox = styled(Box)(({ theme }) => ({
  background: "#E5E5E5",
  height: "100vh",
}));

const Orders = ({ open }: NavBarProps) => {
  return (
    <BoxWrapper open={open}>
      <OrderBox
        sx={open ? orderStyles.mainOpen : orderStyles.mainClose}
      ></OrderBox>
    </BoxWrapper>
  );
};

export default Orders;
