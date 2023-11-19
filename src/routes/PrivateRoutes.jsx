import { Navigate, Outlet } from "react-router-dom";
import { useLogin } from "../contexts/UserContext";

export default function PrivateRoutes() {
  const { auth } = useLogin();
  console.log(auth);
  
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
}
