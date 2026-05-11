// import { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import "./Dashboard.css";

// const BulkCalling = () => {

//   const [customers, setCustomers] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [script, setScript] = useState("");

//   useEffect(() => {
//   fetch("http://localhost:8080/api/customers/all") // ✅ FIXED
//     .then(res => res.json())
//     .then(data => {
//       if (Array.isArray(data)) {
//         setCustomers(data);
//       } else {
//         setCustomers([]);
//       }
//     })
//     .catch(() => setCustomers([]));
// }, []);

//   const handleSelect = (id) => {
//     setSelected(prev =>
//       prev.includes(id)
//         ? prev.filter(i => i !== id)
//         : [...prev, id]
//     );
//   };

//   const handleBulkCall = async () => {

//     if (!script) {
//       alert("Please enter AI script");
//       return;
//     }

//     await fetch("http://localhost:8080/api/calls/bulk", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         customerIds: selected,
//         script: script
//       }),
//     });

//     alert("AI Calling Campaign Started 🚀");
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar />

//       <div className="main-area">
//         <Navbar />

//         <div className="dashboard-content">

//           <h1>AI Calling Campaign</h1>
//           <p>Automate calls using AI script</p>

//           {/* 🔥 SCRIPT BOX */}
//           <div style={{ marginBottom: "20px" }}>
//             <textarea
//               placeholder="Enter what AI should speak..."
//               value={script}
//               onChange={(e) => setScript(e.target.value)}
//               style={{
//                 width: "100%",
//                 height: "120px",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 background: "#0f172a",
//                 color: "white"
//               }}
//             />
//           </div>

//           {/* BUTTON */}
//           <button onClick={handleBulkCall} className="login-btn">
//             Start AI Campaign
//           </button>

//           <p>{selected.length} selected</p>

//           {/* TABLE */}
//           <table>
//             <thead>
//               <tr>
//                 <th>Select</th>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Phone</th>
//                 <th>Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {customers.map((c, index) => (
//                 <tr key={c.id}>
//                   <td>
//                     <input
//                       type="checkbox"
//                       onChange={() => handleSelect(c.id)}
//                     />
//                   </td>
//                   <td>{index + 1}</td>
//                   <td>{c.name}</td>
//                   <td>{c.phone}</td>
//                   <td className="pending">PENDING</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BulkCalling;



/* Hello, this is TSAR AI calling from our team.

We noticed your interest in our services. We would like to assist you with more details.

If you are interested, please press 1 or stay on the line to connect with our representative.

Thank you for your time. Have a great day! */

// //bulk calling recording 



// src/pages/BulkCalling.jsx

import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import "./BulkCalling.css";

const BulkCalling = () => {

  const [customers, setCustomers] = useState([]);

  const [selected, setSelected] = useState([]);

  const [script, setScript] = useState("");

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  // ================= FETCH CUSTOMERS =================

  useEffect(() => {

    fetch("http://localhost:8080/api/customers/all")

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

  // ================= SELECT CUSTOMER =================

  const handleSelect = (id) => {

    setSelected(prev =>

      prev.includes(id)

        ? prev.filter(i => i !== id)

        : [...prev, id]
    );
  };

  // ================= SELECT ALL =================

  const handleSelectAll = () => {

    if (selected.length === filteredCustomers.length) {

      setSelected([]);

    } else {

      setSelected(
        filteredCustomers.map(c => c.id)
      );
    }
  };

  // ================= FILTER =================

  const filteredCustomers = customers.filter((c) =>

    c.name
      ?.toLowerCase()
      .includes(search.toLowerCase())

    ||

    c.phone
      ?.includes(search)
  );

  // ================= START BULK CALL =================

  const handleBulkCall = async () => {

    if (selected.length === 0) {

      alert("Please select customers");

      return;
    }

    if (!script) {

      alert("Please enter AI script");

      return;
    }

    try {

      setLoading(true);

      await fetch(
        "http://localhost:8080/api/calls/bulk",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            customerIds: selected,

            script: script
          }),
        }
      );

      alert("AI Calling Campaign Started 🚀");

      setSelected([]);

    } catch (err) {

      console.error(err);

      alert("Failed to start campaign");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        <div className="bulk-page">

          {/* TOP */}
          <div className="bulk-top">

            <div>

              <h1>
                AI Bulk Calling Campaign
              </h1>

              <p>
                Launch automated AI voice campaigns
              </p>

            </div>

            <div className="campaign-stats">

              <div className="stat-card">

                <span>
                  Total Customers
                </span>

                <h3>
                  {customers.length}
                </h3>

              </div>

              <div className="stat-card active">

                <span>
                  Selected
                </span>

                <h3>
                  {selected.length}
                </h3>

              </div>

            </div>

          </div>

          {/* SCRIPT */}
          <div className="script-card">

            <div className="card-header">

              <h2>
                AI Voice Script
              </h2>

            </div>

            <textarea

              placeholder="Enter what AI should speak during calls..."

              value={script}

              onChange={(e) =>
                setScript(e.target.value)
              }

            />

            <button
              onClick={handleBulkCall}
              className="campaign-btn"
              disabled={loading}
            >

              {loading
                ? "Starting Campaign..."
                : "Start AI Campaign"}

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

            <table className="bulk-table">

              <thead>

                <tr>

                  <th>

                    <input
                      type="checkbox"
                      checked={
                        selected.length ===
                        filteredCustomers.length
                      }
                      onChange={handleSelectAll}
                    />

                  </th>

                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {filteredCustomers.map((c, index) => (

                  <tr key={c.id}>

                    <td>

                      <input
                        type="checkbox"
                        checked={selected.includes(c.id)}
                        onChange={() =>
                          handleSelect(c.id)
                        }
                      />

                    </td>

                    <td>
                      {index + 1}
                    </td>

                    <td>
                      {c.name}
                    </td>

                    <td>
                      {c.phone}
                    </td>

                    <td>

                      <span className="status pending">

                        {c.status || "PENDING"}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BulkCalling;