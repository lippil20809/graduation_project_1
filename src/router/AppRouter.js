import React, { lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

// import PostsPage from "../pages/Posts";
// import PostDetailPage from "../pages/PostDetail";

const UsersPage = lazy(() => import("../pages/User"));


const AppRouter = () => {
  return (
    <Suspense fallback="loading component...">
      <Routes>
          <Route path="user" index element={<UsersPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;