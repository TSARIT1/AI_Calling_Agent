// src/pages/Completed.jsx

import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "./Dashboard.css";
import "./Calls.css";

const Completed = () => {

  const [calls, setCalls] = useState([]);

  useEffect(() => {

    fetch(
      "http://localhost:8080/api/calls/status/COMPLETED"
    )
      .then(res => res.json())
      .then(data => setCalls(data))
      .catch(err => console.log(err));

  }, []);

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        <div className="dashboard-content">

          <div className="bulk-page">

            {/* HEADER */}
            <div className="bulk-top">

              <div>

                <h1>
                  Completed Calls
                </h1>

                <p>
                  Successfully completed calls
                </p>

              </div>

              <div className="campaign-stats">

                <div className="stat-card active">

                  <span>
                    Total Completed
                  </span>

                  <h3>
                    {calls.length}
                  </h3>

                </div>

              </div>

            </div>

            {/* TABLE */}
            <div className="table-card">

              <table className="bulk-table">

                <thead>

                  <tr>

                    <th>#</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>Date</th>

                  </tr>

                </thead>

                <tbody>

                  {calls.length > 0 ? (

                    calls.map((c, index) => (

                      <tr key={index}>

                        <td>
                          {index + 1}
                        </td>

                        <td>
                          {c.customerName}
                        </td>

                        <td>
                          {c.phoneNumber}
                        </td>

                        <td>

                          <span className="status completed">

                            {c.status}

                          </span>

                        </td>

                        <td>
                          {c.duration || 0}s
                        </td>

                        <td>

                          {c.startTime
                            ? new Date(
                                c.startTime
                              ).toLocaleString()
                            : "-"}

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="6"
                        style={{
                          textAlign: "center",
                          padding: "30px",
                          color: "#94a3b8"
                        }}
                      >

                        No Completed Calls Found

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Completed;