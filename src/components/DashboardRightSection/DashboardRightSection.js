import React from "react";
import { Box } from "@mui/material";
// import { dashboardRightStyles } from "./styles";
import ConfigureCard from "../ConfigureCard/ConfigureCard";
import TrustPilotCard from "../TrustPilotCard/TrustPilotCard";
import { dashboardRightStyles } from "./styles";
import InviteFriend from "../InviteFriend/InviteFriend";
import CustomerSupport from "../CustomerSupport/CustomerSupport";

const DashboardRightSection = () => {
  return (
    <Box sx={dashboardRightStyles}>
      <ConfigureCard />
      <TrustPilotCard />
      <InviteFriend />
      <CustomerSupport />
    </Box>
  );
};

export default DashboardRightSection;
