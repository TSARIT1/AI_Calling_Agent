import "./Topbar.css";

const Topbar = () => {
  const name = localStorage.getItem("employeeId");

  return (
    <div className="topbar">
      <div>
        <h3>Telecalling AI</h3>
        <span className="user-id">{name}</span>
      </div>

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
  );
};

export default Topbar;