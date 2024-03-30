import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../../authPages/Login";
import Register from "../../authPages/Register";
import ForgottenPassword from "../../authPages/ForgottenPassword";
import { Routes } from "../../utils/routes";

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={Routes.HOME} element={<Login />} />
      <Route path={Routes.SIGN_UP} element={<Register />} />
      <Route path={Routes.FORGOTTEN_PASSWORD} element={<ForgottenPassword />} />
      <Route path="*" element={<Navigate to={Routes.HOME} replace={true} />} />
    </>
  )
);
