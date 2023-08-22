import { Navigate, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

export default function ProtectedRoute({ children }: RouteProps) {
  const auth = useSelector((state: RootState) => state.auth);

  return <>{auth.isAuthenticated ? children : <Navigate to="/" replace />}</>;
}
