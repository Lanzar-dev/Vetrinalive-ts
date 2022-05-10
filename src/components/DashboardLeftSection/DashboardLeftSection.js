import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import VisitorsCard from "../VisitorsCard/VisitorsCard";
import OrdersCard from "../OrdersCard/OrdersCard";
import AppstoreCard from "../AppstoreCard/AppstoreCard";
import MarketplaceCard from "../MarketplaceCard/MarketplaceCard";
import News from "../News/News";

const contents = [
  {
    id: "1",
    cardContent: <VisitorsCard />,
  },
  {
    id: "2",
    cardContent: <OrdersCard />,
  },
  {
    id: "3",
    cardContent: <AppstoreCard />,
  },
  {
    id: "4",
    cardContent: <MarketplaceCard />,
  },
];

const DashboardLeftSection = () => {
  return (
    <Box>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {contents.map((content) => (
          <Grid key={content.id} item xs={12} md={6}>
            {content.cardContent}
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <News />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardLeftSection;
