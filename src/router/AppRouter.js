import React, { lazy, Suspense } from "react";

import { Routes, Route} from "react-router-dom";

const UsersPage = lazy(() => import("../pages/Users"));


const AppRouter = () => {
  return (
    <Suspense fallback="loading component...">
      <Routes>
        <Route path="users">
          <Route index element={<UsersPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;