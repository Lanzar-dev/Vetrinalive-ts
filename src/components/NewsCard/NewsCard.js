import React from "react";
import { Box, Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { newsCardStyles } from "./styles";

const NewsCard = ({ newsItem }) => {
  return (
    <Box sx={newsCardStyles.main}>
      <ImageListItem sx={newsCardStyles.blogImgBox}>
        <img
          sx={newsCardStyles.blogImg}
          src={newsItem.urlToImage}
          alt="blog Img"
        />
      </ImageListItem>
      <Box sx={newsCardStyles.description}>
        <Typography sx={newsCardStyles.blogTitle}>{newsItem.author}</Typography>
        <Typography sx={newsCardStyles.blogDetails}>
          {newsItem.title.substring(0, 40)}
        </Typography>
        <Typography sx={newsCardStyles.blogTime}>
          Estimated reading: 4 min
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCard;
