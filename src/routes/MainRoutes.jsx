import React from "react";
import {Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

// import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home/Home";
import { MyWork } from "../pages/MyWork/MyWork";
import { Projects } from "../pages/Projects/Projects";

export const MainRoutes = () => {
  return (
    <MainLayout>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/my-work" element={<MyWork/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Routes>
      </div>
    </MainLayout>
  );
};
