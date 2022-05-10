import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes/AppRoutes";
import { CssBaseline } from "@mui/material";

// const drawerWidth = 240;

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainPage />}>
          {routes.map(({ path, element, id }) => (
            <Route path={path} element={element} key={id} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
