import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { ordersCardStyles } from "./styles";
import BasicDatePicker from "../../common/DatePicker/DatePicker";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CardTitle from "../../common/CardTitle/CardTitle";

const OrdersCard = () => {
  return (
    <BasicCard>
      <Box sx={ordersCardStyles.wrapper}>
        <Box sx={ordersCardStyles.top}>
          <CardTitle titleIcon={<ListOutlinedIcon />} title={"Orders"} />

          <BasicDatePicker />
          {/* date */}
        </Box>
        <Box sx={ordersCardStyles.middle}>
          <Box sx={ordersCardStyles.middleOrders}>
            <Typography sx={ordersCardStyles.middleTitle}>
              Orders received:
            </Typography>
            <Typography sx={ordersCardStyles.middleAmt}>156</Typography>
          </Box>
          <Box sx={ordersCardStyles.middleEarnings}>
            <Typography sx={ordersCardStyles.middleTitle}>Earnings:</Typography>
            <Typography sx={ordersCardStyles.middleAmt}>€ 1893,24</Typography>
          </Box>
        </Box>
        <Box sx={ordersCardStyles.bottom}>
          <Typography sx={ordersCardStyles.bottomText}>
            10 free tips to increase your sales
          </Typography>
        </Box>
      </Box>
    </BasicCard>
  );
};

export default OrdersCard;
