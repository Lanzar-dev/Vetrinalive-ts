export const dashboardStyles = {
  mainOpen: {
    display: "flex",
    flexDirection: "column",
    background: "#E5E5E5",
    position: "relative",
    minHeight: "100vh",
    width: "calc(100vw - 240px)",
    transition: "ease-in .2s",
  },
  mainClose: {
    display: "flex",
    flexDirection: "column",
    background: "#E5E5E5",
    position: "relative",
    minHeight: "100vh",
    width: "calc(100vw - 50px)",
    transition: "ease-in .2s",
  },
  // welcomeLayer: {
  //   width: "100%",
  //   height: "200px",
  //   p: "40px",
  //   background:
  //     "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  bottomLayer: {
    // height: "200px",
    width: "100%",
    p: "0 41px",
    // height: "100px",
    // background: "yellow",

    zIndex: 1,
    // position: "absolute",
    // marginTop: "-50px",
    margin: "-50px auto 0 auto",
    // display: "flex",
    // gap: "24px",
  },
  welcomeText: {
    fontWeight: 600,
    fontSize: "34px",
    lineHeight: "39px",
    color: "#FFFFFF",
  },
  welcomeLinks: {
    display: "flex",
    justifyContent: "center",
    mt: "7px",
    color: "#FFFFFF",
  },
  welcomeLink: {
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "22px",
    textDecorationLine: "underline",
  },
  welcomeIcon: {
    marginLeft: "16px",
  },
};
