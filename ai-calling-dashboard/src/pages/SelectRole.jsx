// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SelectRole = () => {
//   const navigate = useNavigate();

//   const selectRole = (role) => {
//     localStorage.setItem("selectedRole", role);
//     navigate("/login");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Select Login Type</h2>

//       <button onClick={() => selectRole("USER")} style={{ margin: "20px" }}>
//         Login as User
//       </button>

//       <button onClick={() => selectRole("ADMIN")} style={{ margin: "20px" }}>
//         Login as Admin
//       </button>
//     </div>
//   );
// };

// export default SelectRole;

// src/pages/SelectRole.jsx

import "./SelectRole.css";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const SelectRole = () => {

  const navigate = useNavigate();

  const handleUser = () => {
    navigate("/login");
  };

  const handleAdmin = () => {
    navigate("/admin-login");
  };

  return (
    <div className="select-role-page">

      {/* BACKGROUND BLURS */}
      <div className="blur blur-one"></div>
      <div className="blur blur-two"></div>

      {/* HEADER */}
      <div className="role-header">

        <div className="role-badge">
          <Sparkles size={16} />
          TSAR AI CALLING SYSTEM
        </div>

        <h1>
          Choose Your Access Portal
        </h1>

        <p>
          Secure AI-powered telecalling platform
          for administrators and agents.
        </p>

      </div>

      {/* ROLE CARDS */}
      <div className="role-grid">

        {/* USER */}
        <div className="role-card">

          <div className="role-icon user-icon">
            <User size={34} />
          </div>

          <h2>User Portal</h2>

          <p>
            Access AI calling dashboard,
            customer campaigns and call analytics.
          </p>

          <ul>
            <li>AI Calling Dashboard</li>
            <li>Bulk Calling</li>
            <li>Call Analytics</li>
            <li>Customer Management</li>
          </ul>

          <button
            className="role-btn"
            onClick={handleUser}
          >
            Continue as User
            <ArrowRight size={18} />
          </button>

        </div>

        {/* ADMIN */}
        <div className="role-card admin-card">

          <div className="admin-tag">
            SECURE ACCESS
          </div>

          <div className="role-icon admin-icon">
            <ShieldCheck size={34} />
          </div>

          <h2>Admin Portal</h2>

          <p>
            Manage users, monitor AI systems,
            configure campaigns and control analytics.
          </p>

          <ul>
            <li>Admin Dashboard</li>
            <li>Manage Users</li>
            <li>Call Monitoring</li>
            <li>System Configuration</li>
          </ul>

          <button
            className="role-btn admin-btn"
            onClick={handleAdmin}
          >
            Continue as Admin
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default SelectRole;