export const marketCardStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "24px",
  },
  title: {
    display: "flex",
  },
  icon: {
    marginRight: "16px",
    transform: "scaleY(-1)",
  },
  text: {
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "25px",
    color: "#103B66",
  },
  middle: {
    marginBottom: "6px",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    gap: "50px",
    overflowY: "hidden",
    "&::-webkit-scrollbar": {
      width: "0",
    },
    cursor: "pointer",
  },
  middleTitle: {
    fontWeight: 500,
    fontSize: "42px",
    lineHeight: "61px",
    color: "#103B66",
  },
  bottom: {
    display: "flex",
    color: "#21B8F9",
    cursor: "pointer",
  },
  bottomText: {
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "20px",
    textDecorationLine: "underline",
    marginRight: "12px",
  },
  scrollText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  prodNum: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
  prodText: {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#FFFFFF",
  },
  // orange: {
  //   background: "#FFA26B",
  // },
  // green: {
  //   background: "#00C48C",
  // },
  // blue: {
  //   background: "#21B8F9",
  // },
};
