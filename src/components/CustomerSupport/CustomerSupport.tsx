import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import BasicCard from "../../common/BasicCard/BasicCard";
import { customerStyles } from "./styles";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import Avatar from "@mui/material/Avatar";
import CardTitle from "../../common/CardTitle/CardTitle";

const ColorButton = styled(Button)({
  fontWeight: 600,
  fontSize: "14px",
  color: "#FFFFFF",
  background: "#21B8F9",
  padding: "15px 46px",
  textTransform: "none",
  boxShadow:
    "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
  borderRadius: "5px",
  "&:hover": {
    background: "#21B8F9",
    opacity: "0.7",
  },
});

const CustomerSupport = () => {
  return (
    <BasicCard>
      <Box sx={customerStyles.wrapper}>
        <Box sx={customerStyles.top}>
          <CardTitle
            titleIcon={<HeadphonesOutlinedIcon />}
            title={"Customer support"}
          />
        </Box>
        <Box sx={customerStyles.middle}>
          <Avatar
            sx={customerStyles.middleImg}
            alt="John Doe"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography sx={customerStyles.middlePercDetails}>
            Simone is here to help you.
          </Typography>
        </Box>
        <Box sx={customerStyles.bottom}>
          <ColorButton size="large" variant="contained">
            Contact us
          </ColorButton>
        </Box>
      </Box>
    </BasicCard>
  );
};

export default CustomerSupport;
