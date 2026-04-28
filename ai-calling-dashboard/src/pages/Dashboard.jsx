import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {

  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login"; // safer redirect
  } else {
    setReady(true);
  }
}, []);

  if (!ready) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-area">
        <Navbar />
        <div className="dashboard-content">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;