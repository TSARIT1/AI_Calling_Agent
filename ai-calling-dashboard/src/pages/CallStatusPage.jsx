// // // import { useEffect, useState } from "react";
// // // import Navbar from "../components/Navbar";
// // // import Sidebar from "../components/Sidebar";
// // // import "./Dashboard.css";

// // // const CallStatusPage = ({ title, status }) => {
// // //   const [calls, setCalls] = useState([]);

// // //   useEffect(() => {
// // //     fetch(`http://localhost:8080/api/dashboard/status?status=${status}`)
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         if (Array.isArray(data)) setCalls(data);
// // //         else setCalls([]);
// // //       });
// // //   }, [status]);

// // //   return (
// // //     <div className="dashboard">
// // //       <Sidebar />

// // //       <div className="main-area">
// // //         <Navbar />

// // //         <div className="dashboard-content">
// // //           <h1>{title}</h1>
// // //           <p>Call details for {title}</p>

// // //           {/* TABLE */}
// // //           <div className="table-box">
// // //             <table>
// // //               <thead>
// // //                 <tr>
// // //                   <th>SR No</th>
// // //                   <th>Name</th>
// // //                   <th>Contact</th>
// // //                   <th>Status</th>
// // //                   {status === "CALL_BACK" && <th>Callback Time</th>}
// // //                 </tr>
// // //               </thead>

// // //               <tbody>
// // //                 {calls.map((c, index) => (
// // //                   <tr key={index}>
// // //                     <td>{index + 1}</td>
// // //                     <td>{c.name}</td>
// // //                     <td>{c.phone}</td>
// // //                     <td>{c.status}</td>

// // //                     {status === "CALL_BACK" && (
// // //                       <td>{c.callbackTime}</td>
// // //                     )}
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CallStatusPage;

// // import { useEffect, useState } from "react";
// // import Navbar from "../components/Navbar";
// // import Sidebar from "../components/Sidebar";
// // import "./Dashboard.css";

// // const CallStatusPage = ({ title, status }) => {

// //   const [calls, setCalls] = useState([]);

// //   useEffect(() => {
// //     fetch(`http://localhost:8080/api/dashboard/status?status=${status}`)
// //       .then(res => res.json())
// //       .then(data => {
// //         console.log("API RESPONSE:",data);
// //         if (Array.isArray(data)) setCalls(data);
// //         else setCalls([]);
// //       })
// //       .catch(() => setCalls([]));
// //   }, [status]);

// //   return (
// //     <div className="dashboard">
// //       <Sidebar />

// //       <div className="main-area">
// //         <Navbar />

// //         <div className="dashboard-content">

// //           <h1>{title}</h1>
// //           <p>Call details for {title}</p>

// //           <div className="table-box">
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>#</th>
// //                   <th>Name</th>
// //                   <th>Phone</th>
// //                   <th>Status</th>
// //                   <th>Transcript</th>   {/* ✅ NEW */}
// //                   <th>Recording</th>    {/* ✅ NEW */}
// //                   {status === "CALL_BACK" && <th>Callback Time</th>}
// //                 </tr>
// //               </thead>

// //               <tbody>
// //   {calls.length > 0 ? (
// //     calls.map((c, index) => (
// //       <tr key={c.id || index}>
// //         <td>{index + 1}</td>
// //         <td>{c.customerName || "-"}</td>
// //         <td>{c.phoneNumber || "-"}</td>
// //         <td>{c.status}</td>

// //         <td>{c.transcript || "No transcript"}</td>

// //         <td>
// //           {c.recordingUrl ? (
// //             <audio controls style={{ width: "150px" }}>
// //               <source src={c.recordingUrl} type="audio/wav" />
// //             </audio>
// //           ) : "No recording"}
// //         </td>

// //         {status === "CALL_BACK" && (
// //           <td>
// //             {c.callbackTime
// //               ? new Date(c.callbackTime).toLocaleString()
// //               : "-"}
// //           </td>
// //         )}
// //       </tr>
// //     ))
// //   ) : (
// //     <tr>
// //       <td colSpan="7" style={{ textAlign: "center" }}>
// //         No calls found
// //       </td>
// //     </tr>
// //   )}
// // </tbody>
// //             </table>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CallStatusPage;


// import { useEffect, useState } from "react";
// import axios from "axios";

// import jsPDF from "jspdf";
// import autoTable from "jspdf-autotable";

// import "./CallStatusPage.css";

// const CallStatusPage = ({ title, status }) => {

//   const [calls, setCalls] = useState([]);

//   const [search, setSearch] = useState("");

//   useEffect(() => {

//     fetchCalls();

//   }, []);

//   const fetchCalls = async () => {

//     try {

//       const res = await axios.get(
//         `http://localhost:8080/api/calls/status/${status}`
//       );

//       setCalls(res.data);

//     } catch (err) {

//       console.error(err);
//     }
//   };

//   // SEARCH FILTER
//   const filteredCalls = calls.filter((call) =>

//     call.customerName
//       ?.toLowerCase()
//       .includes(search.toLowerCase())

//     ||

//     call.phoneNumber
//       ?.includes(search)
//   );

//   // EXPORT PDF
//   const exportPDF = () => {

//     const doc = new jsPDF();

//     doc.setFontSize(18);

//     doc.text(title, 14, 20);

//     autoTable(doc, {

//       startY: 30,

//       head: [[
//         "ID",
//         "Customer",
//         "Phone",
//         "Status",
//         "Duration"
//       ]],

//       body: filteredCalls.map((call) => [

//         call.id,
//         call.customerName,
//         call.phoneNumber,
//         call.status,
//         `${call.duration || 0}s`

//       ])
//     });

//     doc.save(`${status}-calls.pdf`);
//   };

//   return (

//     <div className="status-page">

//       {/* TOP */}
//       <div className="status-top">

//         <div>

//           <h1>
//             {title}
//           </h1>

//           <p>
//             Manage and analyze customer call records
//           </p>

//         </div>

//         <button
//           className="export-btn"
//           onClick={exportPDF}
//         >
//           Export PDF
//         </button>

//       </div>

//       {/* SEARCH */}
//       <div className="search-box">

//         <input
//           type="text"
//           placeholder="Search customer or phone..."
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//         />

//       </div>

//       {/* TABLE */}
//       <div className="table-card">

//         <table className="status-table">

//           <thead>

//             <tr>

//               <th>ID</th>
//               <th>Customer</th>
//               <th>Phone</th>
//               <th>Status</th>
//               <th>Duration</th>

//             </tr>

//           </thead>

//           <tbody>

//             {filteredCalls.map((call) => (

//               <tr key={call.id}>

//                 <td>{call.id}</td>

//                 <td>{call.customerName}</td>

//                 <td>{call.phoneNumber}</td>

//                 <td>{call.status}</td>

//                 <td>
//                   {call.duration || 0}s
//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default CallStatusPage;



import { useEffect, useState } from "react";

import axios from "axios";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./Dashboard.css";
import "./CallStatusPage.css";

const CallStatusPage = ({ title, status }) => {

  const [calls, setCalls] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCalls();

  }, [status]);

  // FETCH CALLS
  const fetchCalls = async () => {

    try {

      const res = await axios.get(
        `http://localhost:8080/api/calls/status/${status}`
      );

      if (Array.isArray(res.data)) {

        setCalls(res.data);

      } else {

        setCalls([]);
      }

    } catch (err) {

      console.error(err);

      setCalls([]);
    }
  };

  // SEARCH FILTER
  const filteredCalls = calls.filter((call) =>

    call.customerName
      ?.toLowerCase()
      .includes(search.toLowerCase())

    ||

    call.phoneNumber
      ?.includes(search)
  );

  // EXPORT PDF
  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text(title, 14, 20);

    autoTable(doc, {

      startY: 30,

      head: [[
        "ID",
        "Customer",
        "Phone",
        "Status",
        "Duration"
      ]],

      body: filteredCalls.map((call) => [

        call.id,
        call.customerName,
        call.phoneNumber,
        call.status,
        `${call.duration || 0}s`

      ])
    });

    doc.save(`${status}-calls.pdf`);
  };

  return (

    <div className="dashboard">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="main-area">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="dashboard-content">

          <div className="status-page">

            {/* TOP */}
            <div className="status-top">

              <div>

                <h1>
                  {title}
                </h1>

                <p>
                  Manage and analyze customer call records
                </p>

              </div>

              <button
                className="export-btn"
                onClick={exportPDF}
              >
                Export PDF
              </button>

            </div>

            {/* SEARCH */}
            <div className="search-box">

              <input
                type="text"
                placeholder="Search customer or phone..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

            {/* TABLE */}
            <div className="table-card">

              <table className="status-table">

                <thead>

                  <tr>

                    <th>ID</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Duration</th>

                  </tr>

                </thead>

                <tbody>

                  {filteredCalls.length > 0 ? (

                    filteredCalls.map((call) => (

                      <tr key={call.id}>

                        <td>
                          {call.id}
                        </td>

                        <td>
                          {call.customerName}
                        </td>

                        <td>
                          {call.phoneNumber}
                        </td>

                        <td>

                          <span className="status completed">

                            {call.status}

                          </span>

                        </td>

                        <td>
                          {call.duration || 0}s
                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="5"
                        style={{
                          textAlign: "center",
                          padding: "30px",
                          color: "#94a3b8"
                        }}
                      >

                        No Calls Found

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

export default CallStatusPage;