import { useState, useEffect } from "react";
import "./Dashboard.css";
import "./Calls.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Calls = () => {

  const [customers, setCustomers] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [callLogId, setCallLogId] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // 🔥 FETCH CUSTOMERS
  const fetchCustomers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/customers/all");
      const data = await res.json();
      setCustomers(data);
    } catch (err) {
      console.error("Backend error:", err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // 🔥 FIX: SET pending list properly
  useEffect(() => {
    const pending = customers.filter(c => c.status === "PENDING");
    setPendingList(pending);
  }, [customers]);

  // ⏱ TIMER
  useEffect(() => {
    let timer;

    if (selectedCustomer && !isPaused) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [selectedCustomer, isPaused]);

  // 🔥 AUTO NEXT CALL
  useEffect(() => {

    if (!selectedCustomer || isPaused || !callLogId) return;

    const timer = setTimeout(async () => {

      // END CALL
      await fetch("http://localhost:8080/api/calls/end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: callLogId,
          duration: seconds,
          status: "COMPLETED"
        })
      });

      // 🔥 FIX: use params (backend expects @RequestParam)
      await fetch(
        `http://localhost:8080/api/customers/update?id=${selectedCustomer.id}&duration=${seconds}&status=CALLED`,
        { method: "POST" }
      );

      callNextCustomer(currentIndex + 1, pendingList);

    }, 8000);

    return () => clearTimeout(timer);

  }, [selectedCustomer, isPaused, currentIndex, seconds, callLogId]);

  // ⏱ TIMER FORMAT
  const formatTime = () => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  // 🚀 START CALLING
  const startAutoCalling = async () => {

    setIsCalling(true);

    if (pendingList.length === 0) {
      alert("No pending customers");
      return;
    }

    callNextCustomer(0, pendingList);
  };

  // 🔄 NEXT CUSTOMER
  const callNextCustomer = async (index, list = pendingList) => {

    if (index >= list.length) {
      setSelectedCustomer(null);
      setIsCalling(false);
      fetchCustomers();
      return;
    }

    const customer = list[index];
    const empId = "EMP001";

    // MARK CALLING
    await fetch(
      `http://localhost:8080/api/customers/update?id=${customer.id}&duration=0&status=CALLING`,
      { method: "POST" }
    );

    // START CALL
    const res = await fetch("http://localhost:8080/api/calls/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employeeId: empId,
        customerId: customer.id
      })
    });

    const text = await res.text();

    if (!text) {
      console.log("Empty response from backend");
      return;
    }

    const data = JSON.parse(text);

    setCallLogId(data.id);
    setSelectedCustomer(customer);
    setCurrentIndex(index);
    setSeconds(0);
    setIsPaused(false);
  };

  // ❌ END BUTTON
  const handleStopCall = async () => {

    await fetch("http://localhost:8080/api/calls/end", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: callLogId,
        duration: seconds,
        status: "FAILED"
      })
    });

    await fetch(
      `http://localhost:8080/api/customers/update?id=${selectedCustomer.id}&duration=${seconds}&status=FAILED`,
      { method: "POST" }
    );

    callNextCustomer(currentIndex + 1, pendingList);
  };

  // 🎛 CONTROLS
  const toggleMic = () => setIsMuted(prev => !prev);
  const toggleSpeaker = () => setIsSpeakerOn(prev => !prev);
  const togglePause = () => setIsPaused(prev => !prev);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-area">
        <Navbar />

        <div className="dashboard-content">

          {!selectedCustomer ? (

            <div className="precall-container">

              <div className="precall-header">
                <div>
                  <h1>AI Calling Campaign</h1>
                  <p>Automate calls to your customers</p>
                </div>

                {!isCalling && (
                  <button className="primary-btn" onClick={startAutoCalling}>
                    Start Auto Calling
                  </button>
                )}
              </div>

              {/* TABLE */}
              <div className="precall-table-card">
                <table className="precall-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Recording</th>
                      <th>Transcript</th>
                    </tr>
                  </thead>

                  <tbody>
                    {customers.map((c, i) => (
                      <tr key={c.id}>
                        <td>{i + 1}</td>
                        <td>{c.name}</td>
                        <td>{c.phone}</td>

                        <td>
                          <span className={`status-badge ${c.status.toLowerCase()}`}>
                            {c.status}
                          </span>
                        </td>

                        <td>
                          {c.recordingUrl ? (
                            <audio controls src={c.recordingUrl} />
                          ) : "No Recording"}
                        </td>
                        <td>{c.transcript || "No transcript"}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>

            </div>

          ) : (

            <div className="call-ui">

  {/* HEADER */}
  <div className="call-header">
    <div className="logo">TSAR IT</div>
    <div className="icons">🔔 ☰</div>
  </div>

  {/* TITLE */}
  <h2 className="call-title">AI Call In Progress</h2>

  {/* PHONE */}
  <h3 className="call-number">{selectedCustomer.phone}</h3>

  <p className="call-connecting">
    Connecting to {selectedCustomer.name || selectedCustomer.customerName}
  </p>

  {/* AVATAR */}
  <div className="ai-avatar">
    <div className="avatar-circle">
      🤖
    </div>
    <span className="ai-label">TSAR AI</span>
  </div>

  {/* MESSAGE */}
  <div className="ai-message">
    “Hello {selectedCustomer.name || selectedCustomer.customerName}, this is TSAR AI calling. How are you today?”
  </div>

  {/* STATUS */}
  <div className="call-status-bar">
    <span>Speaking...</span>
    <span>{formatTime()}</span>
  </div>

  {/* CONTROLS */}
  <div className="call-controls">

    <button
      className={`control-btn ${isMuted ? "active" : ""}`}
      onClick={toggleMic}
    >
      🎤
    </button>

    <button
      className={`control-btn ${isSpeakerOn ? "active" : ""}`}
      onClick={toggleSpeaker}
    >
      🔊
    </button>

    <button
      className={`control-btn ${isPaused ? "active" : ""}`}
      onClick={togglePause}
    >
      {isPaused ? "▶️" : "⏸️"}
    </button>

    <button className="end-call" onClick={handleStopCall}>
      📞
    </button>

  </div>

</div>

          )}

        </div>
      </div>
    </div>
  );
};

export default Calls;



// bulk calling , at one go
// discription based calling (multiple purpose calling)
//call back, call completed, interested, not intrested