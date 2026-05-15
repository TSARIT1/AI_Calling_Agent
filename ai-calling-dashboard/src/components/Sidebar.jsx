import "./Sidebar.css";
import {
  Home,
  Phone,
  BarChart3,
  Settings,
  CheckCircle,
  RefreshCcw,
  Star,
  PhoneCall // ✅ added
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <h2 className="logo">TSAR IT AI</h2>

      <div className="menu">

        {/* Dashboard */}
        <div
          className={`menu-item ${location.pathname === "/dashboard" ? "active" : ""}`}
          onClick={() => navigate("/dashboard")}
        >
          <Home size={18}/> Dashboard
        </div>

        {/* Calls */}
        {role === "USER" && (
          <div
            className={`menu-item ${location.pathname === "/calls" ? "active" : ""}`}
            onClick={() => navigate("/calls")}
          >
            <Phone size={18}/> Calls
          </div>
        )}

        {/* ✅ Bulk Calling (FIXED ICON) */}
        <div
          className={`menu-item ${location.pathname === "/bulk-calling" ? "active" : ""}`}
          onClick={() => navigate("/bulk-calling")}
        >
          <PhoneCall size={18}/> Bulk Calling
        </div>

        {/* Analytics */}
        <div
          className={`menu-item ${location.pathname === "/analytics" ? "active" : ""}`}
          onClick={() => navigate("/analytics")}
        >
          <BarChart3 size={18}/> Analytics
        </div>

        {/* Interested */}
        <div
          className={`menu-item ${location.pathname === "/interested" ? "active" : ""}`}
          onClick={() => navigate("/interested")}
        >
          <Star size={18}/> Interested
        </div>

        {/* Callback */}
        <div
          className={`menu-item ${location.pathname === "/callback" ? "active" : ""}`}
          onClick={() => navigate("/callback")}
        >
          <RefreshCcw size={18}/> Callback
        </div>

        {/* Completed */}
        <div
          className={`menu-item ${location.pathname === "/completed" ? "active" : ""}`}
          onClick={() => navigate("/completed")}
        >
          <CheckCircle size={18}/> Completed
        </div>

        {/* Admin */}
        {role === "ADMIN" && (
          <div
            className={`menu-item ${location.pathname === "/settings" ? "active" : ""}`}
            onClick={() => navigate("/settings")}
          >
            <Settings size={18}/> Admin Settings
          </div>
        )}

      </div>
    </div>
  );
};

export default Sidebar;