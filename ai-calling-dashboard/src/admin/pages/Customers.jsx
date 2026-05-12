// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const Customers = () => {
// //   const [customers, setCustomers] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:8080/admin/customers")
// //       .then(res => setCustomers(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Customers</h2>

// //       <table className="table">
// //         <thead>
// //           <tr>
// //             <th>ID</th>
// //             <th>Name</th>
// //             <th>Phone</th>
// //           </tr>
// //         </thead>

// //         <tbody>
// //           {customers.map(c => (
// //             <tr key={c.id}>
// //               <td>{c.id}</td>
// //               <td>{c.name}</td>
// //               <td>{c.phone}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Customers;
// // src/admin/pages/Customers.jsx

// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // import "./Customers.css";

// // const Customers = () => {

// //   const [customers, setCustomers] = useState([]);

// //   const [form, setForm] = useState({
// //     name: "",
// //     phone: "",
// //     email: ""
// //   });

// //   // FETCH CUSTOMERS
// //   const fetchCustomers = async () => {

// //     try {

// //       const res = await axios.get(
// //         "http://localhost:8080/api/customers/all"
// //       );

// //       setCustomers(res.data);

// //     } catch (err) {

// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {

// //     fetchCustomers();

// //   }, []);

// //   // HANDLE INPUT
// //   const handleChange = (e) => {

// //     setForm({
// //       ...form,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   // ADD CUSTOMER
// //   const handleSubmit = async (e) => {

// //     e.preventDefault();

// //     try {

// //       await axios.post(
// //         "http://localhost:8080/api/customers/add",
// //         form
// //       );

// //       alert("Customer Added Successfully");

// //       setForm({
// //         name: "",
// //         phone: "",
// //         email: ""
// //       });

// //       fetchCustomers();

// //     } catch (err) {

// //       console.error(err);

// //       alert("Failed to add customer");
// //     }
// //   };

// //   return (

// //     <div className="customers-page">

// //       {/* HEADER */}
// //       <div className="customers-header">

// //         <h1>
// //           Customer Management
// //         </h1>

// //         <p>
// //           Manage and upload customer calling data
// //         </p>

// //       </div>

// //       {/* FORM */}
// //       <div className="customer-form-card">

// //         <h2>
// //           Add Customer
// //         </h2>

// //         <form onSubmit={handleSubmit}>

// //           <div className="form-grid">

// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Customer Name"
// //               value={form.name}
// //               onChange={handleChange}
// //               required
// //             />

// //             <input
// //               type="text"
// //               name="phone"
// //               placeholder="Phone Number"
// //               value={form.phone}
// //               onChange={handleChange}
// //               required
// //             />

// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email Address"
// //               value={form.email}
// //               onChange={handleChange}
// //             />

// //           </div>

// //           <button type="submit">
// //             Add Customer
// //           </button>

// //         </form>

// //       </div>

// //       {/* TABLE */}
// //       <div className="customer-table-card">

// //         <div className="table-header">

// //           <h2>
// //             Customer List
// //           </h2>

// //         </div>

// //         <table className="table">

// //           <thead>

// //             <tr>

// //               <th>ID</th>
// //               <th>Name</th>
// //               <th>Phone</th>
// //               <th>Email</th>
// //               <th>Status</th>
// //               <th>Duration</th>

// //             </tr>

// //           </thead>

// //           <tbody>

// //             {customers.map((c) => (

// //               <tr key={c.id}>

// //                 <td>{c.id}</td>

// //                 <td>{c.name}</td>

// //                 <td>{c.phone}</td>

// //                 <td>{c.email || "-"}</td>

// //                 <td>

// //                   <span className={`status ${c.status}`}>
// //                     {c.status}
// //                   </span>

// //                 </td>

// //                 <td>
// //                   {c.lastCallDuration || 0}s
// //                 </td>

// //               </tr>

// //             ))}

// //           </tbody>

// //         </table>

// //       </div>

// //     </div>
// //   );
// // };

// // export default Customers;

// import { useEffect, useState } from "react";
// import axios from "axios";

// import "./Customers.css";

// const Customers = () => {

//   const [customers, setCustomers] = useState([]);

//   const [csvFile, setCsvFile] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: ""
//   });

//   // ================= FETCH CUSTOMERS =================

//   const fetchCustomers = async () => {

//     try {

//       const res = await axios.get(
//         "http://localhost:8080/api/customers/all"
//       );

//       setCustomers(res.data);

//     } catch (err) {

//       console.error(err);
//     }
//   };

//   useEffect(() => {

//     fetchCustomers();

//   }, []);

//   // ================= HANDLE INPUT =================

//   const handleChange = (e) => {

//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // ================= ADD SINGLE CUSTOMER =================

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       await axios.post(
//         "http://localhost:8080/api/customers/add",
//         form
//       );

//       alert("Customer Added Successfully");

//       setForm({
//         name: "",
//         phone: "",
//         email: ""
//       });

//       fetchCustomers();

//     } catch (err) {

//       console.error(err);

//       alert("Failed to add customer");
//     }
//   };

//   // ================= CSV UPLOAD =================

//   const handleCsvUpload = async () => {

//     if (!csvFile) {

//       alert("Please select CSV file");

//       return;
//     }

//     const formData = new FormData();

//     formData.append("file", csvFile);

//     try {

//       await axios.post(
//         "http://localhost:8080/api/customers/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data"
//           }
//         }
//       );

//       alert("CSV Uploaded Successfully");

//       fetchCustomers();

//     } catch (err) {

//       console.error(err);

//       alert("CSV Upload Failed");
//     }
//   };

//   return (

//     <div className="customers-page">

//       {/* HEADER */}
//       <div className="customers-header">

//         <h1>
//           Customer Management
//         </h1>

//         <p>
//           Manage and upload customer calling data
//         </p>

//       </div>

//       {/* CSV UPLOAD */}
//       <div className="csv-upload-card">

//         <div className="csv-top">

//           <div>

//             <h2>
//               Upload CSV File
//             </h2>

//             <p>
//               Import bulk customers instantly
//             </p>

//           </div>

//         </div>

//         <div className="csv-upload-box">

//           <input
//             type="file"
//             accept=".csv"
//             onChange={(e) =>
//               setCsvFile(e.target.files[0])
//             }
//           />

//           <button onClick={handleCsvUpload}>
//             Upload CSV
//           </button>

//         </div>

//       </div>

//       {/* FORM */}
//       <div className="customer-form-card">

//         <h2>
//           Add Customer
//         </h2>

//         <form onSubmit={handleSubmit}>

//           <div className="form-grid">

//             <input
//               type="text"
//               name="name"
//               placeholder="Customer Name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={handleChange}
//             />

//           </div>

//           <button type="submit">
//             Add Customer
//           </button>

//         </form>

//       </div>

//       {/* TABLE */}
//       <div className="customer-table-card">

//         <div className="table-header">

//           <h2>
//             Customer List
//           </h2>

//           <span>
//             Total: {customers.length}
//           </span>

//         </div>

//         <table className="table">

//           <thead>

//             <tr>

//               <th>ID</th>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Status</th>
//               <th>Duration</th>

//             </tr>

//           </thead>

//           <tbody>

//             {customers.map((c) => (

//               <tr key={c.id}>

//                 <td>{c.id}</td>

//                 <td>{c.name}</td>

//                 <td>{c.phone}</td>

//                 <td>{c.email || "-"}</td>

//                 <td>

//                   <span className={`status ${c.status}`}>
//                     {c.status}
//                   </span>

//                 </td>

//                 <td>
//                   {c.lastCallDuration || 0}s
//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </div>
//   );
// };

// export default Customers;

// src/admin/pages/Customers.jsx

import { useEffect, useState } from "react";

import axios from "axios";

import "./Customers.css";

const Customers = () => {

  const [customers, setCustomers] = useState([]);

  const [users, setUsers] = useState([]);

  const [csvFile, setCsvFile] = useState(null);

  // 🔥 FILTER USER
  const [selectedUser, setSelectedUser] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    assignedUserId: "",
    assignedUserName: ""
  });

  // ================= FETCH CUSTOMERS =================

  const fetchCustomers = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/customers/all"
      );

      setCustomers(res.data);

    } catch (err) {

      console.error(err);
    }
  };

  // ================= FETCH USERS =================

  const fetchUsers = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/api/users/all"
      );

      setUsers(res.data);

    } catch (err) {

      console.error(err);
    }
  };

  useEffect(() => {

    fetchCustomers();

    fetchUsers();

  }, []);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ================= ADD CUSTOMER =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8080/api/customers/add",
        form
      );

      alert("Customer Added Successfully");

      setForm({
        name: "",
        phone: "",
        email: "",
        assignedUserId: "",
        assignedUserName: ""
      });

      fetchCustomers();

    } catch (err) {

      console.error(err);

      alert("Failed to add customer");
    }
  };

  // ================= CSV UPLOAD =================

  const handleCsvUpload = async () => {

    if (!csvFile) {

      alert("Please select CSV file");

      return;
    }

    const formData = new FormData();

    formData.append("file", csvFile);

    try {

      await axios.post(
        "http://localhost:8080/api/customers/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      alert("CSV Uploaded Successfully");

      fetchCustomers();

    } catch (err) {

      console.error(err);

      alert("CSV Upload Failed");
    }
  };

  // ================= FILTER CUSTOMERS =================

  const filteredCustomers =

    selectedUser === ""

      ? customers

      : customers.filter(
          (c) =>
            c.assignedUserId ==
            selectedUser
        );

  return (

    <div className="customers-page">

      {/* HEADER */}
      <div className="customers-header">

        <div>

          <h1>
            Customer Management
          </h1>

          <p>
            Manage customer data and assign leads
          </p>

        </div>

        {/* 🔥 USER FILTER */}
        <select
          className="user-filter"
          value={selectedUser}
          onChange={(e) =>
            setSelectedUser(e.target.value)
          }
        >

          <option value="">
            All Users
          </option>

          {users.map((u) => (

            <option
              key={u.id}
              value={u.id}
            >

              {u.fullName}

            </option>

          ))}

        </select>

      </div>

      {/* CSV */}
      <div className="csv-upload-card">

        <div className="csv-top">

          <div>

            <h2>
              Upload CSV File
            </h2>

            <p>
              Import bulk customers instantly
            </p>

          </div>

        </div>

        <div className="csv-upload-box">

          <input
            type="file"
            accept=".csv"
            onChange={(e) =>
              setCsvFile(e.target.files[0])
            }
          />

          <button onClick={handleCsvUpload}>
            Upload CSV
          </button>

        </div>

      </div>

      {/* FORM */}
      <div className="customer-form-card">

        <h2>
          Add Customer
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="name"
              placeholder="Customer Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            {/* ASSIGN USER */}
            <select
              value={form.assignedUserId}
              onChange={(e) => {

                const selected =
                  users.find(
                    u => u.id == e.target.value
                  );

                setForm({
                  ...form,
                  assignedUserId:
                    e.target.value,
                  assignedUserName:
                    selected?.fullName || ""
                });
              }}
            >

              <option value="">
                Assign User
              </option>

              {users.map((u) => (

                <option
                  key={u.id}
                  value={u.id}
                >

                  {u.name}

                </option>

              ))}

            </select>

          </div>

          <button type="submit">
            Add Customer
          </button>

        </form>

      </div>

      {/* TABLE */}
      <div className="customer-table-card">

        <div className="table-header">

          <h2>
            Customer List
          </h2>

          <span>
            Total: {filteredCustomers.length}
          </span>

        </div>

        <table className="table">

          <thead>

            <tr>

              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Assigned User</th>
              <th>Status</th>
              <th>Duration</th>

            </tr>

          </thead>

          <tbody>

            {filteredCustomers.map((c) => (

              <tr key={c.id}>

                <td>{c.id}</td>

                <td>{c.name}</td>

                <td>{c.phone}</td>

                <td>{c.email || "-"}</td>

                <td>
                  {c.assignedUserName || "-"}
                </td>

                <td>

                  <span
                    className={`status ${c.status}`}
                  >

                    {c.status}

                  </span>

                </td>

                <td>
                  {c.lastCallDuration || 0}s
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Customers;