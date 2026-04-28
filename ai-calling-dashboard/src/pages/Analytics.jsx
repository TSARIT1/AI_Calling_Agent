import "./Dashboard.css";
import "./Analytics.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const data = [
  { name: "Mon", calls: 20 },
  { name: "Tue", calls: 45 },
  { name: "Wed", calls: 30 },
  { name: "Thu", calls: 60 },
  { name: "Fri", calls: 50 },
];

const Analytics = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-area">
        <Navbar />

        <div className="dashboard-content">

          <div className="analytics-header">
            <h1>Analytics</h1>
            <p>Monitor performance & AI call insights</p>
          </div>

          {/* KPI */}
          <div className="analytics-stats">
            <div className="stat-card">Total Calls: 1240</div>
            <div className="stat-card">Success: 78%</div>
            <div className="stat-card">Failed: 22%</div>
          </div>

          {/* CHARTS */}
          <div className="charts-grid">

            <div className="chart-card">
              <h3>Call Trends</h3>

              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="calls" stroke="#6366f1" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Call Distribution</h3>

              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="calls" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Analytics;