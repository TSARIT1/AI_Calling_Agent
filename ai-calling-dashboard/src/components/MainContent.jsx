import { useEffect, useState } from "react";
import "./MainContent.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const MainContent = () => {

  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const empId = localStorage.getItem("employeeId");

if (!empId) {
  window.location.href = "/login"; // ✅ force redirect
  return;
}

      const res = await fetch(
        `http://localhost:8080/api/dashboard/data?employeeId=${empId}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch dashboard");
      }

      const result = await res.json();

      setData(result);

      const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
      const formatted = (result.weeklyCalls || []).map((val, index) => ({
        name: days[index],
        calls: val,
      }));

      setChartData(formatted);

    } catch (err) {
      setError(err.message);
    }
  };

  fetchDashboard();
}, []);


  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div>

      <div className="header">
        <h1>Dashboard</h1>
        <p>AI Calling Analytics Overview</p>
      </div>

      {/* KPI */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <p>Total Calls</p>
          <h2>{data.totalCalls}</h2>
        </div>

        <div className="kpi-card">
          <p>Active Calls</p>
          <h2>{data.activeCalls}</h2>
        </div>

        <div className="kpi-card">
          <p>Success Rate</p>
          <h2 className="success">{data.successRate}</h2>
        </div>

        <div className="kpi-card">
          <p>Failed Calls</p>
          <h2 className="danger">{data.failedCalls}</h2>
        </div>

      </div>

      {/* CHART */}
      <div className="chart-box">
        <h3>Call Analytics</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line type="monotone" dataKey="calls" stroke="#6366f1" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* TABLE */}
      <div className="table-box">
        <h3>Recent Calls</h3>

        <table>
          <thead>
            <tr>
              <th>Phone</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {(data.recentCalls || []).map((call, index) => (
              <tr key={index}>
                <td>{call.phone}</td>
                <td className={call.status === "Success" ? "success" : "danger"}>
                  {call.status}
                </td>
                <td>{call.duration}</td>
                <td>{call.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MainContent;