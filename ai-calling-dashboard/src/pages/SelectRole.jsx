import React from "react";
import { useNavigate } from "react-router-dom";

const SelectRole = () => {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem("selectedRole", role);
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Login Type</h2>

      <button onClick={() => selectRole("USER")} style={{ margin: "20px" }}>
        Login as User
      </button>

      <button onClick={() => selectRole("ADMIN")} style={{ margin: "20px" }}>
        Login as Admin
      </button>
    </div>
  );
};

export default SelectRole;