import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home, MyWork, Projects } from "../pages/index";


export const MainRoutes = () => {
  return (
    <MainLayout>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-work" element={<MyWork />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </MainLayout>
  );
};
