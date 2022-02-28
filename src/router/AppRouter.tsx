import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const UsersListPage = lazy(() => import("../pages/UsersList"));

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route index element={<UsersListPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
