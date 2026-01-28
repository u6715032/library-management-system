import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
  const userRole = localStorage.getItem("role");

  // Not logged in
  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  // Logged in but wrong role
  if (userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
