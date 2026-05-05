// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import "./UserLogin.css";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     employee_id: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       console.log("Sending:", formData);

//       const response = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         formData
//       );

//       console.log("RESPONSE:", response.data);

//       // ✅ STORE
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("role", response.data.role);
//       localStorage.setItem("employeeId", response.data.employeeId);

//       // ✅ REDIRECT
//       window.location.href = "/dashboard";

//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">

//       <div className="login-left">
//         <img src="/Userlogin.svg" alt="login" className="login-image" />
//         <div className="login-info">
//           <h2>Welcome to TSAR AI Calling System</h2>
//           <p>Automate calls with AI</p>
//         </div>
//       </div>

//       <div className="login-right">
//         <div className="login-card">

//           <h2 className="login-title">Sign In</h2>

//           {error && <div className="login-error">{error}</div>}

//           <form onSubmit={handleSubmit}>

//             <div className="input-group">
//               <input
//                 type="text"
//                 name="employee_id"
//                 value={formData.employee_id}
//                 onChange={handleChange}
//                 required
//               />
//               <label>User ID</label>
//             </div>

//             <div className="input-group">
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <label>Password</label>
//             </div>

//             <button className="login-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <div className="login-links">
//               <Link to="/register">Register</Link>
//               <Link to="#">Forgot Password?</Link>
//             </div>

//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./UserLogin.css";

const Login = () => {
  const [formData, setFormData] = useState({
    employee_id: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // 🔥 Get selected role from Navbar click
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("selectedRole");
    setSelectedRole(role);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData
      );

      // ✅ STORE DATA
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role.toUpperCase());
      localStorage.setItem("employeeId", response.data.employeeId);

      // 🔥 ROLE VALIDATION
      if (selectedRole && response.data.role.toUpperCase() !== selectedRole) {
        setError(`You selected ${selectedRole} login but credentials are ${response.data.role}`);
        return;
      }

      // ✅ ROLE BASED REDIRECT
      if (response.data.role.toUpperCase() === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">
        <img src="/Userlogin.svg" alt="login" className="login-image" />
        <div className="login-info">
          <h2>Welcome to TSAR AI Calling System</h2>
          <p>Automate calls with AI</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">

          <h2 className="login-title">Sign In</h2>

          {/* 🔥 SHOW SELECTED ROLE */}
          {selectedRole && (
            <p style={{ textAlign: "center", marginBottom: "10px" }}>
              Logging in as <b>{selectedRole}</b>
            </p>
          )}

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                name="employee_id"
                value={formData.employee_id}
                onChange={handleChange}
                required
              />
              <label>User ID</label>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Password</label>
            </div>

            <button className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="login-links">
              <Link to="/register">Register</Link>
              <Link to="#">Forgot Password?</Link>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;