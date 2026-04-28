import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const BulkCalling = () => {

  const [customers, setCustomers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [script, setScript] = useState("");

  useEffect(() => {
  fetch("http://localhost:8080/api/customers/all") // ✅ FIXED
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setCustomers(data);
      } else {
        setCustomers([]);
      }
    })
    .catch(() => setCustomers([]));
}, []);

  const handleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const handleBulkCall = async () => {

    if (!script) {
      alert("Please enter AI script");
      return;
    }

    await fetch("http://localhost:8080/api/calls/bulk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerIds: selected,
        script: script
      }),
    });

    alert("AI Calling Campaign Started 🚀");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <div className="dashboard-content">

          <h1>AI Calling Campaign</h1>
          <p>Automate calls using AI script</p>

          {/* 🔥 SCRIPT BOX */}
          <div style={{ marginBottom: "20px" }}>
            <textarea
              placeholder="Enter what AI should speak..."
              value={script}
              onChange={(e) => setScript(e.target.value)}
              style={{
                width: "100%",
                height: "120px",
                padding: "10px",
                borderRadius: "10px",
                background: "#0f172a",
                color: "white"
              }}
            />
          </div>

          {/* BUTTON */}
          <button onClick={handleBulkCall} className="login-btn">
            Start AI Campaign
          </button>

          <p>{selected.length} selected</p>

          {/* TABLE */}
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((c, index) => (
                <tr key={c.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleSelect(c.id)}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td className="pending">PENDING</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default BulkCalling;



/* Hello, this is TSAR AI calling from our team.

We noticed your interest in our services. We would like to assist you with more details.

If you are interested, please press 1 or stay on the line to connect with our representative.

Thank you for your time. Have a great day! */

//bulk calling recording 