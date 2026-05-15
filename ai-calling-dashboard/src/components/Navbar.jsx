// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../AuthContext";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const { user, logout } = useAuth();

// //   const isLoggedIn = !!user?.token;
// //   const role = user?.role;
// //   const userName = user?.name;

// //   const handleLogout = () => {
// //     logout();
// //     navigate("/");
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">

// //         <div className="navbar-brand">
// //           {isLoggedIn ? (
// //             <>
// //               <div className="brand-title">Telecalling AI</div>
// //               <div className="brand-username">{userName}</div>
// //             </>
// //           ) : (
// //             "TSAR AI Calling System"
// //           )}
// //         </div>

// //         <div className="navbar-right">

// //           {!isLoggedIn ? (
// //             <div className="navbar-auth">
// //               <button onClick={() => navigate("/login")} className="btn-login">
// //                 Login
// //               </button>
// //               <button onClick={() => navigate("/register")} className="btn-register">
// //                 Register
// //               </button>
// //             </div>
// //           ) : (
// //             <>
// //               {role === "ADMIN" && (
// //                 <button onClick={() => navigate("/admin/home")}>
// //                   Admin Panel
// //                 </button>
// //               )}

// //               <button onClick={handleLogout} className="btn-login">
// //                 Logout
// //               </button>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;




// // import { useNavigate } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const navigate = useNavigate();

// //   const token = localStorage.getItem("token");
// //   const role = localStorage.getItem("role");
// //   const userName = localStorage.getItem("employeeId");

// //   const isLoggedIn = !!token;

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">

// //         <div className="navbar-brand">
// //           {isLoggedIn ? (
// //             <>
// //               <div className="brand-title">Telecalling AI</div>
// //               <div className="brand-username">{userName}</div>
// //             </>
// //           ) : (
// //             "TSAR AI Calling System"
// //           )}
// //         </div>

// //         <div className="navbar-right">

// //           {!isLoggedIn ? (
// //             <div className="navbar-auth">
// //               <button onClick={() => navigate("/login")} className="btn-login">
// //                 Login
// //               </button>
// //               <button onClick={() => navigate("/register")} className="btn-register">
// //                 Register
// //               </button>
// //             </div>
// //           ) : (
// //             <>
// //               {role === "ADMIN" && (
// //                 <button onClick={() => navigate("/admin/home")}>
// //                   Admin Panel
// //                 </button>
// //               )}

// //               <button onClick={handleLogout} className="btn-login">
// //                 Logout
// //               </button>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// // last second
// // import { useNavigate } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const navigate = useNavigate();

// //   const token = localStorage.getItem("token");
// //   const role = localStorage.getItem("role");
// //   const userName = localStorage.getItem("employeeId");

// //   const isLoggedIn = !!token;

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">

// //         <div className="navbar-brand">
// //           {isLoggedIn ? (
// //             <>
// //               <div className="brand-title">Telecalling AI</div>
// //               <div className="brand-username">{userName}</div>
// //             </>
// //           ) : (
// //             "TSAR AI Calling System"
// //           )}
// //         </div>

// //         <div className="navbar-right">

// //           {!isLoggedIn ? (
// //             <div className="navbar-auth">
// //               <button onClick={() => navigate("/login")} className="btn-login">
// //                 Login
// //               </button>
// //               <button onClick={() => navigate("/register")} className="btn-register">
// //                 Register
// //               </button>
// //             </div>
// //           ) : (
// //             <>
// //               {/* ✅ ADMIN BUTTON */}
// //               {role === "ADMIN" && (
// //                 <button onClick={() => navigate("/admin")}>
// //                   Admin Panel
// //                 </button>
// //               )}

// //               <button onClick={handleLogout} className="btn-login">
// //                 Logout
// //               </button>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // import { useNavigate } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const navigate = useNavigate();

// //   const [auth, setAuth] = useState({
// //     token: null,
// //     role: null,
// //     userName: null,
// //   });

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const role = localStorage.getItem("role");
// //     const userName = localStorage.getItem("employeeId");

// //     setAuth({ token, role, userName });
// //   }, []);

// //   const isLoggedIn = !!auth.token;

// //   const handleLogout = () => {

// //     // const currentRole = auth.role;
// //     const currentRole = localStorage.getItem("role");
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("role");
// //     localStorage.removeItem("employeeId");

// //     setAuth({ token: null, role: null, userName: null });

// //     if(currentRole === "ADMIN"){
// //       navigate("/admin-login");
// //     }
// //     else{
// //       navigate("/login");
// //     }
// //   };

// //   const handleUserLogin = () => {
// //     localStorage.setItem("selectedRole", "USER");
// //     navigate("/login");
// //   };

// //   const handleAdminLogin = () => {
// //     localStorage.setItem("selectedRole", "ADMIN");
// //     navigate("/admin-login");
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">

// //         <div className="navbar-brand">
// //           {isLoggedIn ? (
// //             <>
// //               <div className="brand-title">Telecalling AI</div>
// //               <div className="brand-username">{auth.role === "ADMIN" ? "Administrator" : auth.userName}</div>
// //             </>
// //           ) : (
// //             "TSAR AI Calling System"
// //           )}
// //         </div>

// //         <div className="navbar-right">

// //           {!isLoggedIn ? (
// //             <div className="navbar-auth">
// //               <button onClick={handleUserLogin} className="btn-login">
// //                 User Login
// //               </button>

// //               <button onClick={handleAdminLogin} className="btn-register">
// //                 Admin Login
// //               </button>
// //             </div>
// //           ) : (
// //             <>
// //               {auth.role === "ADMIN" && (
// //                 <button onClick={() => navigate("/admin")}>
// //                   Admin Panel
// //                 </button>
// //               )}

// //               <button onClick={handleLogout} className="btn-login">
// //                 Logout
// //               </button>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import { useNavigate, NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// import {
//   Bell,
//   LayoutDashboard,
//   LogOut,
//   ShieldCheck,
//   PhoneCall,
//   BarChart3,
//   Sparkles,
// } from "lucide-react";

// import "./Navbar.css";

// const Navbar = () => {

//   const navigate = useNavigate();

//   const [auth, setAuth] = useState({
//     token: null,
//     role: null,
//     userName: null,
//   });

//   useEffect(() => {

//     const token =
//       localStorage.getItem("token");

//     const role =
//       localStorage.getItem("role");

//     const userName =
//       localStorage.getItem("employeeId");

//     setAuth({
//       token,
//       role,
//       userName,
//     });

//   }, []);

//   const isLoggedIn = !!auth.token;

//   // LOGOUT
//   const handleLogout = () => {

//     const currentRole =
//       localStorage.getItem("role");

//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("employeeId");

//     setAuth({
//       token: null,
//       role: null,
//       userName: null,
//     });

//     if (currentRole === "ADMIN") {

//       navigate("/admin-login");

//     } else {

//       navigate("/login");
//     }
//   };

//   // USER LOGIN
//   const handleUserLogin = () => {

//     localStorage.setItem(
//       "selectedRole",
//       "USER"
//     );

//     navigate("/login");
//   };

//   // ADMIN LOGIN
//   const handleAdminLogin = () => {

//     localStorage.setItem(
//       "selectedRole",
//       "ADMIN"
//     );

//     navigate("/admin-login");
//   };

//   return (

//     <nav className="navbar">

//       <div className="navbar-container">

//         {/* LEFT */}
//         <div
//           className="navbar-brand"
//           onClick={() => navigate("/")}
//         >

//           <div className="logo-box">

//             <Sparkles size={18} />

//           </div>

//           <div>

//             <div className="brand-title">

//               {auth.role === "ADMIN"
//                 ? "TSAR Admin"
//                 : "TSAR AI"}

//             </div>

//             {isLoggedIn && (

//               <div className="brand-username">

//                 {auth.role === "ADMIN"
//                   ? "Administrator"
//                   : auth.userName}

//               </div>

//             )}

//           </div>

//         </div>

//         {/* CENTER MENU */}
//         {!isLoggedIn && (

//           <div className="navbar-menu">

//   <NavLink
//     to="/"
//     className={({ isActive }) =>
//       isActive ? "nav-link active" : "nav-link"
//     }
//   >
//     Home
//   </NavLink>

//   <NavLink
//     to="/features"
//     className={({ isActive }) =>
//       isActive ? "nav-link active" : "nav-link"
//     }
//   >
//     Features
//   </NavLink>

//   <NavLink
//     to="/analytics"
//     className={({ isActive }) =>
//       isActive ? "nav-link active" : "nav-link"
//     }
//   >
//     Analytics
//   </NavLink>

//   {/* <NavLink
//     to="/pricing"
//     className={({ isActive }) =>
//       isActive ? "nav-link active" : "nav-link"
//     }
//   >
//     Pricing
//   </NavLink> */}

//   <NavLink
//     to="/contact"
//     className={({ isActive }) =>
//       isActive ? "nav-link active" : "nav-link"
//     }
//   >
//     Contact
//   </NavLink>

// </div>

//         )}

//         {/* RIGHT */}
//         <div className="navbar-right">

//           {!isLoggedIn ? (

//             <div className="navbar-auth">

//               <button
//                 onClick={handleUserLogin}
//                 className="btn-login"
//               >
//                 User Login
//               </button>

//               <button
//                 onClick={handleAdminLogin}
//                 className="btn-register"
//               >
//                 Admin Login
//               </button>

//             </div>

//           ) : (

//             <>

//               {/* NOTIFICATION */}
//               <div className="notification-box">

//                 <Bell size={18} />

//                 <span className="notification-dot"></span>

//               </div>

//               {/* USER DASHBOARD */}
//               {auth.role === "USER" && (

//                 <button
//                   className="dashboard-btn"
//                   onClick={() =>
//                     navigate("/dashboard")
//                   }
//                 >

//                   <LayoutDashboard size={18} />

//                   Dashboard

//                 </button>

//               )}

//               {/* ADMIN DASHBOARD */}
//               {auth.role === "ADMIN" && (

//                 <button
//                   className="admin-btn"
//                   onClick={() =>
//                     navigate("/admin")
//                   }
//                 >

//                   <ShieldCheck size={18} />

//                   Admin Panel

//                 </button>

//               )}

//               {/* ANALYTICS */}
//               <button
//                 className="analytics-btn"
//                 onClick={() =>
//                   navigate("/analytics")
//                 }
//               >

//                 <BarChart3 size={18} />

//                 Analytics

//               </button>

//               {/* AI STATUS */}
//               <div className="ai-status">

//                 <span className="status-dot"></span>

//                 AI Active

//               </div>

//               {/* LOGOUT */}
//               <button
//                 onClick={handleLogout}
//                 className="logout-btn"
//               >

//                 <LogOut size={18} />

//                 Logout

//               </button>

//             </>

//           )}

//         </div>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;

import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Bell,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Moon,
  Sun
} from "lucide-react";

import "./Navbar.css";

const Navbar = () => {

  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    token: null,
    role: null,
    userName: null,
  });

  // ===== THEME =====
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // ===== AUTH =====
  useEffect(() => {

    const token =
      localStorage.getItem("token");

    const role =
      localStorage.getItem("role");

    const userName =
      localStorage.getItem("employeeId");

    setAuth({
      token,
      role,
      userName,
    });

  }, []);

  // ===== APPLY THEME =====
  useEffect(() => {

    document.body.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  // ===== TOGGLE THEME =====
  const toggleTheme = () => {

    setTheme(prev =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  };

  const isLoggedIn = !!auth.token;

  // ===== LOGOUT =====
  const handleLogout = () => {

    const currentRole =
      localStorage.getItem("role");

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("employeeId");

    setAuth({
      token: null,
      role: null,
      userName: null,
    });

    if (currentRole === "ADMIN") {

      navigate("/admin-login");

    } else {

      navigate("/login");
    }
  };

  // ===== USER LOGIN =====
  const handleUserLogin = () => {

    localStorage.setItem(
      "selectedRole",
      "USER"
    );

    navigate("/login");
  };

  // ===== ADMIN LOGIN =====
  const handleAdminLogin = () => {

    localStorage.setItem(
      "selectedRole",
      "ADMIN"
    );

    navigate("/admin-login");
  };

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* LEFT */}
        <div
          className="navbar-brand"
          onClick={() => navigate("/")}
        >

          <div className="logo-box">

            <Sparkles size={18} />

          </div>

          <div>

            <div className="brand-title">

              {auth.role === "ADMIN"
                ? "TSAR Admin"
                : "TSAR AI"}

            </div>

            {isLoggedIn && (

              <div className="brand-username">

                {auth.role === "ADMIN"
                  ? "Administrator"
                  : auth.userName}

              </div>

            )}

          </div>

        </div>

        {/* CENTER MENU */}
        {!isLoggedIn && (

          <div className="navbar-menu">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Analytics
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </NavLink>

          </div>

        )}

        {/* RIGHT */}
        <div className="navbar-right">

          {/* ===== THEME BUTTON ===== */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
          >

            {theme === "dark"

              ? <Sun size={18} />

              : <Moon size={18} />
            }

          </button>

          {!isLoggedIn ? (

            <div className="navbar-auth">

              <button
                onClick={handleUserLogin}
                className="btn-login"
              >
                User Login
              </button>

              <button
                onClick={handleAdminLogin}
                className="btn-register"
              >
                Admin Login
              </button>

            </div>

          ) : (

            <>

              {/* NOTIFICATION */}
              <div className="notification-box">

                <Bell size={18} />

                <span className="notification-dot"></span>

              </div>

              {/* USER DASHBOARD */}
              {auth.role === "USER" && (

                <button
                  className="dashboard-btn"
                  onClick={() =>
                    navigate("/dashboard")
                  }
                >

                  <LayoutDashboard size={18} />

                  Dashboard

                </button>

              )}

              {/* ADMIN DASHBOARD */}
              {auth.role === "ADMIN" && (

                <button
                  className="admin-btn"
                  onClick={() =>
                    navigate("/admin")
                  }
                >

                  <ShieldCheck size={18} />

                  Admin Panel

                </button>

              )}

              {/* ANALYTICS */}
              <button
                className="analytics-btn"
                onClick={() =>
                  navigate("/analytics")
                }
              >

                <BarChart3 size={18} />

                Analytics

              </button>

              {/* AI STATUS */}
              <div className="ai-status">

                <span className="status-dot"></span>

                AI Active

              </div>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="logout-btn"
                
              >

                <LogOut size={18} />

                Logout

              </button>

            </>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;