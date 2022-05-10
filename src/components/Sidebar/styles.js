export const sidebarStyles = {
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    img: {
      marginLeft: "10px",
    },
  },
  mainList: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    [`& .active, & .MuiListItem-container`]: {
      color: "#21B8F9",
      borderLeft: "3px solid #21B8F9",
      background: "#F7F7F7",
      fontWeight: "bold",
      "& svg": {
        fill: "#21B8F9",
      },
    },
  },
  mainLinks: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    // color: "#233B53",
  },
  subLinksBg: {
    background: "#E9F8FE",
  },
  greenCircle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#00C48C",
    color: "#FFFFFF",
    fontSize: "12px",
  },
  bottom: {
    p: 2,
    mt: "40px",
  },
  bottomLabel: {
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "20px",
    color: "#546679",
    marginBottom: "10px",
  },
  bottomForm: {
    mt: 1,
    minWidth: "100%",
  },
  sublink: {
    pl: 6,
    // marginRight: "10px",
  },
  divider: {
    margin: "24px 0px",
  },
  icons: {
    minWidth: "48px",
  },
};
