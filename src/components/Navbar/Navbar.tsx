import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { navbarStyles } from "./styles";
import { styled, useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import Badge from "@mui/material/Badge";
import zapImg from "../../assets/zap.svg";

import { NavBarProps } from "../../utils/app.model";

const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<NavBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    paddingLeft: "16px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = ({ open, setOpen, title }: NavBarProps) => {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar sx={navbarStyles.appBar} position="fixed" open={open}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={navbarStyles.pageTitle} variant="h3" noWrap>
          {title}
        </Typography>
        <Box sx={navbarStyles.notification}>
          <img src={zapImg} alt="notification" />
          <Badge badgeContent={2} color="error">
            <Typography sx={navbarStyles.text}>What’s new</Typography>
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
