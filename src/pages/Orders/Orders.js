import { Box } from "@mui/material";
import React from "react";
import BoxWrapper from "../../components/BoxWrapper/BoxWrapper";
import { styled } from "@mui/material/styles";

import { orderStyles } from "./styles";

const OrderBox = styled(Box)(({ theme }) => ({
  background: "#E5E5E5",
  height: "100vh",
}));

const Orders = ({ open }) => {
  return (
    <BoxWrapper open={open}>
      <OrderBox
        sx={open ? orderStyles.mainOpen : orderStyles.mainClose}
      ></OrderBox>
    </BoxWrapper>
  );
};

export default Orders;
