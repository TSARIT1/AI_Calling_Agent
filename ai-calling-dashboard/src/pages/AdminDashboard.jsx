import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [logs, setLogs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const [userRes, customerRes, logRes] = await Promise.all([
        axios.get("http://localhost:8080/admin/users"),
        axios.get("http://localhost:8080/admin/customers"),
        axios.get("http://localhost:8080/admin/call-logs"),
      ]);

      setUsers(userRes.data);
      setCustomers(customerRes.data);
      setLogs(logRes.data);
      setError("");
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    await axios.delete(`http://localhost:8080/admin/users/${id}`);
    fetchData();
  };

  if (loading) return <h2 className="status-text">Loading...</h2>;
  if (error) return <h2 className="status-text error">{error}</h2>;

  return (
    <div className="admin-container">
      <div className="header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <button className="btn-refresh" onClick={fetchData}>
          Refresh
        </button>
      </div>

      {/* USERS */}
      <div className="section">
        <h2>Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee ID</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.employeeId}</td>
                <td>
                  <span className={`badge ${u.role === "ADMIN" ? "admin" : "user"}`}>
                    {u.role}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CUSTOMERS */}
      <div className="section">
        <h2>Customers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CALL LOGS */}
      <div className="section">
        <h2>Call Logs</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Duration</th>
                <th>Transcript</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.customerName}</td>
                  <td>
                    <span className={`badge ${l.status}`}>
                      {l.status}
                    </span>
                  </td>
                  <td>{l.duration}s</td>
                  <td className="transcript">{l.transcript}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;