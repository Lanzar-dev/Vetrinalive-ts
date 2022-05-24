import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Grid } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState<string>(null);
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.split("/")[1];
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid>
      <Navbar open={open} setOpen={setOpen} title={title} />
      <Sidebar open={open} setOpen={setOpen} />
      <Outlet context={[open, setOpen]} />
    </Grid>
  );
};

export default MainPage;
