import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import { sidebarStyles } from "./styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

import {
  marketingSublinks,
  sidebarMenuItems,
  sidebarBottomMenuItems,
  selectMenuItems,
} from "../../common/sidebarItems";

import { useNavigate, NavLink } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 0,
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 0,
  },
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ open, setOpen }) => {
  const theme = useTheme();
  const [listOpen, setListOpen] = useState(false);
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  const [store, setStore] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setStore(event.target.value);
  };

  const handleClick = () => {
    setListOpen(!listOpen);
  };

  const handleCatalogue = () => {
    setCatalogueOpen(!catalogueOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={sidebarStyles.drawerHeader}>
        {/* hamburger */}
        <img src={logo} alt="vetrinalive" />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          edge="start"
          sx={
            {
              // marginRight: 5,
              // ...(open && { display: "none" }),
            }
          }
        >
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <List sx={sidebarStyles.mainList} component="nav">
        <ListItemButton component={NavLink} to="dashboard">
          <ListItemIcon sx={sidebarStyles.icons}>
            {/* map icons */}
            <HomeOutlinedIcon />
          </ListItemIcon>
          {/* map sidebar links */}
          <ListItemText sx={sidebarStyles.mainLinks} primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          component={NavLink}
          to="catalogue"
          onClick={handleCatalogue}
        >
          <ListItemIcon sx={sidebarStyles.icons}>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={sidebarStyles.mainLinks} primary="Catalogue" />
          {catalogueOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <ListItemButton component={NavLink} to="orders">
          <ListItemIcon sx={sidebarStyles.icons}>
            <ListOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={sidebarStyles.mainLinks} primary="Orders" />
          <Box sx={sidebarStyles.greenCircle}>14</Box>
        </ListItemButton>
        <ListItemButton component={NavLink} to="customers">
          <ListItemIcon sx={sidebarStyles.icons}>
            <PersonOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={sidebarStyles.mainLinks} primary="Customers" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon sx={sidebarStyles.icons}>
            <LanguageOutlinedIcon />
          </ListItemIcon>
          <ListItemText sx={sidebarStyles.mainLinks} primary="Marketing" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List sx={sidebarStyles.subLinksBg} component="div" disablePadding>
            {marketingSublinks.map((sublinks) => (
              <ListItemButton
                key={sublinks.id}
                sx={sidebarStyles.sublink}
                onClick={() => navigate(sublinks.route)}
              >
                <ListItemText
                  sx={sidebarStyles.mainLinks}
                  primary={sublinks.label}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        {sidebarMenuItems.map((item) => (
          <ListItemButton key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon sx={sidebarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={sidebarStyles.mainLinks} primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={sidebarStyles.divider} />
      <List>
        {sidebarBottomMenuItems.map((item) => (
          <ListItemButton key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon sx={sidebarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={sidebarStyles.mainLinks} primary={item.label} />
          </ListItemButton>
        ))}
      </List>
      <List sx={sidebarStyles.bottom}>
        {open && (
          <>
            <Typography sx={sidebarStyles.bottomLabel}>
              Select your shop
            </Typography>
            <FormControl sx={sidebarStyles.bottomForm}>
              <Select
                value={store}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {selectMenuItems.map((item) => (
                  <MenuItem key={item.key} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
