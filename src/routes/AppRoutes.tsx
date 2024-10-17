import NotFound from "@pages/NotFound";
import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Home = lazy(() => import("@pages/home"));
const Multimedia = lazy(() => import("@pages/Multimedia"));
const Blog = lazy(() => import("@pages/Blog"));
const AirReading = lazy(() => import("@pages/AirReading"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/blog" element={
          
          <React.Suspense>
           <Blog />
        </React.Suspense>
          
          
        } />
        <Route path="/air-reading" element={<AirReading />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
