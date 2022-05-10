import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { newsStyles } from "./styles";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import NewsCard from "../NewsCard/NewsCard";
import { useApi } from "../../useApi";
import { Loading } from "../../common/Loader/Loader";

const apiKey = "2697581c63f8446d8f0110b9b67a2c60";
const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;

const News = () => {
  const { loading, news } = useApi(url);

  if (loading) return <Loading />;

  return (
    <Box sx={newsStyles.main}>
      <Box sx={newsStyles.top}>
        <Box sx={newsStyles.title}>
          <FeedOutlinedIcon sx={newsStyles.titleIcon} />
          <Typography sx={newsStyles.titleText}>Latest news</Typography>
        </Box>
        <Box sx={newsStyles.blogLink}>
          <Typography sx={newsStyles.blogLinkTitle}>Visit our blog</Typography>
          <LaunchOutlinedIcon sx={newsStyles.blogLinkIcon} />
        </Box>
      </Box>
      <Box sx={newsStyles.bottom}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {news?.articles.map((newsItem) => (
            <Grid data-testid="gridItems" item xs={12} md={6} key={newsItem.id}>
              <NewsCard newsItem={newsItem} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default News;
