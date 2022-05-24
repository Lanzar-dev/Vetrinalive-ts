import React from "react";
import { Box, Typography } from "@mui/material";
import BasicCard from "../../common/BasicCard/BasicCard";
import { InviteFriendStyles } from "./styles";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CardTitle from "../../common/CardTitle/CardTitle";

const InviteFriend = () => {
  return (
    <BasicCard>
      <Box sx={InviteFriendStyles.wrapper}>
        <Box sx={InviteFriendStyles.top}>
          <CardTitle
            titleIcon={<GroupOutlinedIcon />}
            title={"Invite friend"}
          />
        </Box>
        <Box sx={InviteFriendStyles.middle}>
          <Typography sx={InviteFriendStyles.middlePercDetails}>
            <span style={InviteFriendStyles.products}>Receive 50 products</span>{" "}
            by inviting a friend who subscribes to a plan. Your friend will
            receive a 30% discount coupon valid for any plan.
          </Typography>
        </Box>
        <Box sx={InviteFriendStyles.bottom}>
          <Typography sx={InviteFriendStyles.bottomText}>
            Start inviting friends!
          </Typography>
          <ArrowForwardOutlinedIcon />
        </Box>
      </Box>
    </BasicCard>
  );
};

export default InviteFriend;
