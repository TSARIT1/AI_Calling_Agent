import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Phone,
  BarChart3,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">TSAR Admin</h2>

      <nav>
        <NavLink to="/admin" className="nav-item">
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink to="/admin/users" className="nav-item">
          <Users size={18} /> Users
        </NavLink>

        <NavLink to="/admin/customers" className="nav-item">
          <Phone size={18} /> Customers
        </NavLink>

        <NavLink to="/admin/logs" className="nav-item">
          <BarChart3 size={18} /> Call Logs
        </NavLink>

        <NavLink to="/admin/settings" className="nav-item">
          <Settings size={18} /> Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;