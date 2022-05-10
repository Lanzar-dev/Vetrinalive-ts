import React from "react";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useOutletContext } from "react-router-dom";
import BoxWrapper from "../../components/BoxWrapper/BoxWrapper";
import { dashboardStyles } from "./styles";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import DashboardLeftSection from "../../components/DashboardLeftSection/DashboardLeftSection";
import DashboardRightSection from "../../components/DashboardRightSection/DashboardRightSection";
import Grid from "@mui/material/Grid";

// const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Dashboard = () => {
  const [open, setOpen] = useOutletContext();

  return (
    <BoxWrapper open={open}>
      <Box
        component="main"
        sx={open ? dashboardStyles.mainOpen : dashboardStyles.mainClose}
      >
        <DrawerHeader />
        <WelcomeBanner />
        <Box sx={dashboardStyles.bottomLayer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={8}>
              <DashboardLeftSection />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DashboardRightSection />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </BoxWrapper>
  );
};

export default Dashboard;
