import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
// import "../styles/admin.css";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;