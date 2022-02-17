import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const UsersPage = lazy(() => import("../pages/User"));

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route index element={<UsersPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
