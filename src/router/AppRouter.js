import React, { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const UsersPage = lazy(() => import("../pages/User"));

const AppRouter = () => {
  return (
    <Suspense fallback="loading component...">
      <Routes>
        <Route index element={<UsersPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
