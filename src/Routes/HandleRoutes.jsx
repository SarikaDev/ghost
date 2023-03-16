import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "../utils/constants";
import ProtectedRoutes from "./ProtectedRoute";

// const MenuBar = lazy(() => import("../Pages/NavMenu/NavMenu"));
const LoginPage = lazy(() => import("../Pages/LoginPage/Login"));
const NotFound = lazy(() => import("../Pages/Error/NotFound"));

const HandleRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path={PATHS.login} element={<LoginPage />} />
    <Route path={PATHS.error} element={<NotFound />} />
    {/* Private Routes */}
    <Route element={<ProtectedRoutes />}>
      {/* Router will be Placed Here */}
    </Route>
  </Routes>
);

export default HandleRoutes;
