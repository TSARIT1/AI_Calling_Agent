import { Navigate } from "react-router-dom";

const RoleProtectedRoute = ({ children, allowedRoles }) => {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // ❌ Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // ❌ Role not allowed
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" />;
  }

  // ✅ Allowed
  return children;
};

export default RoleProtectedRoute;