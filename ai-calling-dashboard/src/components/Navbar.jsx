// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { user, logout } = useAuth();

//   const isLoggedIn = !!user?.token;
//   const role = user?.role;
//   const userName = user?.name;

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">

//         <div className="navbar-brand">
//           {isLoggedIn ? (
//             <>
//               <div className="brand-title">Telecalling AI</div>
//               <div className="brand-username">{userName}</div>
//             </>
//           ) : (
//             "TSAR AI Calling System"
//           )}
//         </div>

//         <div className="navbar-right">

//           {!isLoggedIn ? (
//             <div className="navbar-auth">
//               <button onClick={() => navigate("/login")} className="btn-login">
//                 Login
//               </button>
//               <button onClick={() => navigate("/register")} className="btn-register">
//                 Register
//               </button>
//             </div>
//           ) : (
//             <>
//               {role === "ADMIN" && (
//                 <button onClick={() => navigate("/admin/home")}>
//                   Admin Panel
//                 </button>
//               )}

//               <button onClick={handleLogout} className="btn-login">
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




import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("employeeId");

  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-brand">
          {isLoggedIn ? (
            <>
              <div className="brand-title">Telecalling AI</div>
              <div className="brand-username">{userName}</div>
            </>
          ) : (
            "TSAR AI Calling System"
          )}
        </div>

        <div className="navbar-right">

          {!isLoggedIn ? (
            <div className="navbar-auth">
              <button onClick={() => navigate("/login")} className="btn-login">
                Login
              </button>
              <button onClick={() => navigate("/register")} className="btn-register">
                Register
              </button>
            </div>
          ) : (
            <>
              {role === "ADMIN" && (
                <button onClick={() => navigate("/admin/home")}>
                  Admin Panel
                </button>
              )}

              <button onClick={handleLogout} className="btn-login">
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