// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import "./Dashboard.css";

// const CallStatusPage = ({ title, status }) => {
//   const [calls, setCalls] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/dashboard/status?status=${status}`)
//       .then(res => res.json())
//       .then(data => {
//         if (Array.isArray(data)) setCalls(data);
//         else setCalls([]);
//       });
//   }, [status]);

//   return (
//     <div className="dashboard">
//       <Sidebar />

//       <div className="main-area">
//         <Navbar />

//         <div className="dashboard-content">
//           <h1>{title}</h1>
//           <p>Call details for {title}</p>

//           {/* TABLE */}
//           <div className="table-box">
//             <table>
//               <thead>
//                 <tr>
//                   <th>SR No</th>
//                   <th>Name</th>
//                   <th>Contact</th>
//                   <th>Status</th>
//                   {status === "CALL_BACK" && <th>Callback Time</th>}
//                 </tr>
//               </thead>

//               <tbody>
//                 {calls.map((c, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{c.name}</td>
//                     <td>{c.phone}</td>
//                     <td>{c.status}</td>

//                     {status === "CALL_BACK" && (
//                       <td>{c.callbackTime}</td>
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CallStatusPage;

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

const CallStatusPage = ({ title, status }) => {

  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/dashboard/status?status=${status}`)
      .then(res => res.json())
      .then(data => {
        console.log("API RESPONSE:",data);
        if (Array.isArray(data)) setCalls(data);
        else setCalls([]);
      })
      .catch(() => setCalls([]));
  }, [status]);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-area">
        <Navbar />

        <div className="dashboard-content">

          <h1>{title}</h1>
          <p>Call details for {title}</p>

          <div className="table-box">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Transcript</th>   {/* ✅ NEW */}
                  <th>Recording</th>    {/* ✅ NEW */}
                  {status === "CALL_BACK" && <th>Callback Time</th>}
                </tr>
              </thead>

              <tbody>
  {calls.length > 0 ? (
    calls.map((c, index) => (
      <tr key={c.id || index}>
        <td>{index + 1}</td>
        <td>{c.customerName || "-"}</td>
        <td>{c.phoneNumber || "-"}</td>
        <td>{c.status}</td>

        <td>{c.transcript || "No transcript"}</td>

        <td>
          {c.recordingUrl ? (
            <audio controls style={{ width: "150px" }}>
              <source src={c.recordingUrl} type="audio/wav" />
            </audio>
          ) : "No recording"}
        </td>

        {status === "CALL_BACK" && (
          <td>
            {c.callbackTime
              ? new Date(c.callbackTime).toLocaleString()
              : "-"}
          </td>
        )}
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" style={{ textAlign: "center" }}>
        No calls found
      </td>
    </tr>
  )}
</tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CallStatusPage;