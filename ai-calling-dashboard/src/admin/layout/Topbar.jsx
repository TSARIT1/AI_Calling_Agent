// import "./Topbar.css";

// const Topbar = () => {
//   const name = localStorage.getItem("employeeId");

//   return (
//     <div className="topbar">
//       <div>
//         <h3>Telecalling AI</h3>
//         <span className="user-id">{name}</span>
//       </div>

//       <button
//         className="logout-btn"
//         onClick={() => {
//           localStorage.clear();
//           window.location.href = "/login";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Topbar;

import "./Topbar.css";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Topbar = () => {

  const name = localStorage.getItem("employeeId");

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

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

  const toggleTheme = () => {

    setTheme(
      theme === "dark"
        ? "light"
        : "dark"
    );
  };

  return (

    <div className="topbar">

      <div>

        <h3>
          Telecalling AI
        </h3>

        <span className="user-id">
          {name}
        </span>

      </div>

      <div className="topbar-actions">

        {/* THEME BUTTON */}
        <button
          className="theme-btn"
          onClick={toggleTheme}
        >

          {theme === "dark"
            ? <Sun size={18}/>
            : <Moon size={18}/>
          }

        </button>

        {/* LOGOUT */}
        <button
          className="logout-btn"
          onClick={() => {

            localStorage.clear();

            window.location.href = "/login";
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Topbar;