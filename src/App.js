import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";
import * as ModHome from "./modHome/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route path="/" element={<ModHome.Landing />} />
      </Routes>
    </Suspense>
  );
}

export default App;
