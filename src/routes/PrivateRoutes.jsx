import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../contexts/UserContext";

export default function PrivateRoutes() {
  const { auth } = useLogin();

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}
