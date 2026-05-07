// import { Routes, Route } from "react-router-dom";
// import Login from "./auth/UserLogin";
// import Register from "./auth/UserRegister";
// import Dashboard from "./pages/Dashboard";
// import Landing from "./pages/Landing";
// import Calls from "./pages/Calls";
// import Analytics from "./pages/Analytics";
// import Settings from "./pages/Settings";
// import RoleProtectedRoute from "./RoleProtectedRoute";
// import Interested from "./pages/Interested";
// import Callback from "./pages/Callback";
// import Completed from "./pages/Completed";
// import CallStatusPage from "./pages/CallStatusPage";
// import BulkCalling from "./pages/BulkCalling";
// import AdminDashboard from "./AdminDashboard";

// function App() {
//   return (
//     <Routes>
//   <Route path="/" element={<Landing />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/register" element={<Register />} />
//   <Route path="/admin" element={<AdminDashboard />} />

//   {/* USER */}
//   <Route
//     path="/dashboard"
//     element={
//       <RoleProtectedRoute allowedRoles={["USER"]}>
//         <Dashboard />
//       </RoleProtectedRoute>
//     }
//   />

//   <Route
//     path="/calls"
//     element={
//       <RoleProtectedRoute allowedRoles={["USER"]}>
//         <Calls />
//       </RoleProtectedRoute>
//     }
//   />
//   <Route
//   path="/bulk-calling"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <BulkCalling />
//     </RoleProtectedRoute>
//   }
// />

//   {/* BOTH */}
//   <Route
//     path="/analytics"
//     element={
//       <RoleProtectedRoute allowedRoles={["ADMIN", "USER"]}>
//         <Analytics />
//       </RoleProtectedRoute>
//     }
//   />


//   {/* <Route
//   path="/interested"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <CallStatusPage title="Interested Calls" status="INTERESTED" />
//     </RoleProtectedRoute>
//   }
// />

// <Route
//   path="/callback"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <CallStatusPage title="Callback Calls" status="CALL_BACK" />
//     </RoleProtectedRoute>
//   }
// />

// <Route
//   path="/completed"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <CallStatusPage title="Completed Calls" status="COMPLETED" />
//     </RoleProtectedRoute>
//   }
// /> */}


//     <Route
//   path="/interested"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <CallStatusPage title="Interested Calls" status="INTERESTED" />
//     </RoleProtectedRoute>
//   }
// />

// <Route
//   path="/callback"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <CallStatusPage title="Callback Calls" status="CALL_BACK" />
//     </RoleProtectedRoute>
//   }
// />

// <Route
//   path="/completed"
//   element={
//     <RoleProtectedRoute allowedRoles={["USER"]}>
//       <CallStatusPage title="Completed Calls" status="COMPLETED" />
//     </RoleProtectedRoute>
//   }
// />


//   {/* ADMIN */}
//   <Route
//     path="/settings"
//     element={
//       <RoleProtectedRoute allowedRoles={["ADMIN"]}>
//         <Settings />
//       </RoleProtectedRoute>
//     }
//   />
// </Routes>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";

// import Login from "./auth/UserLogin";
// import Register from "./auth/UserRegister";
// import Dashboard from "./pages/Dashboard";
// import Landing from "./pages/Landing";
// import Calls from "./pages/Calls";
// import Analytics from "./pages/Analytics";
// import Settings from "./pages/Settings";
// import RoleProtectedRoute from "./RoleProtectedRoute";
// import CallStatusPage from "./pages/CallStatusPage";
// import BulkCalling from "./pages/BulkCalling";
// import AdminDashboard from "./pages/AdminDashboard";
// import SelectRole from "./pages/SelectRole";


// function App() {
//   return (
//     <Routes>

//       {/* PUBLIC ROUTES */}
//       <Route path="/" element={<Landing />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/select-role" element={<SelectRole />} />

//       {/* ADMIN ROUTE */}
//       <Route
//         path="/admin"
//         element={
//           <RoleProtectedRoute allowedRoles={["ADMIN"]}>
//             <AdminDashboard />
//           </RoleProtectedRoute>
//         }
//       />

//       {/* USER ROUTES */}
//       <Route
//         path="/dashboard"
//         element={
//           <RoleProtectedRoute allowedRoles={["USER"]}>
//             <Dashboard />
//           </RoleProtectedRoute>
//         }
//       />

//       <Route
//         path="/calls"
//         element={
//           <RoleProtectedRoute allowedRoles={["USER"]}>
//             <Calls />
//           </RoleProtectedRoute>
//         }
//       />

//       <Route
//         path="/bulk-calling"
//         element={
//           <RoleProtectedRoute allowedRoles={["USER"]}>
//             <BulkCalling />
//           </RoleProtectedRoute>
//         }
//       />

//       {/* COMMON (ADMIN + USER) */}
//       <Route
//         path="/analytics"
//         element={
//           <RoleProtectedRoute allowedRoles={["ADMIN", "USER"]}>
//             <Analytics />
//           </RoleProtectedRoute>
//         }
//       />

//       {/* CALL STATUS ROUTES */}
//       <Route
//         path="/interested"
//         element={
//           <RoleProtectedRoute allowedRoles={["USER"]}>
//             <CallStatusPage title="Interested Calls" status="INTERESTED" />
//           </RoleProtectedRoute>
//         }
//       />

//       <Route
//         path="/callback"
//         element={
//           <RoleProtectedRoute allowedRoles={["USER"]}>
//             <CallStatusPage title="Callback Calls" status="CALL_BACK" />
//           </RoleProtectedRoute>
//         }
//       />

//       <Route
//         path="/completed"
//         element={
//           <RoleProtectedRoute allowedRoles={["USER"]}>
//             <CallStatusPage title="Completed Calls" status="COMPLETED" />
//           </RoleProtectedRoute>
//         }
//       />

//       {/* ADMIN SETTINGS */}
//       <Route
//         path="/settings"
//         element={
//           <RoleProtectedRoute allowedRoles={["ADMIN"]}>
//             <Settings />
//           </RoleProtectedRoute>
//         }
//       />

//     </Routes>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

/* PUBLIC */
import Landing from "./pages/Landing";
import SelectRole from "./pages/SelectRole";

/* AUTH */
import Login from "./auth/UserLogin";
import Register from "./auth/UserRegister";
import AdminLogin from "./auth/AdminLogin";

/* USER */
import Dashboard from "./pages/Dashboard";
import Calls from "./pages/Calls";
import Analytics from "./pages/Analytics";
import BulkCalling from "./pages/BulkCalling";
import CallStatusPage from "./pages/CallStatusPage";

/* ADMIN */
import AdminLayout from "./admin/layout/AdminLayout";
import AdminDashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Customers from "./admin/pages/Customers";
import CallLogs from "./admin/pages/CallLogs";
import AdminSettings from "./admin/pages/Settings";

/* PROTECTED */
import RoleProtectedRoute from "./RoleProtectedRoute";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/select-role" element={<SelectRole />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* ================= ADMIN ROUTES ================= */}
      <Route
        path="/admin"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </RoleProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="customers" element={<Customers />} />
        <Route path="logs" element={<CallLogs />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* ================= USER ROUTES ================= */}
      <Route
        path="/dashboard"
        element={
          <RoleProtectedRoute allowedRoles={["USER"]}>
            <Dashboard />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/calls"
        element={
          <RoleProtectedRoute allowedRoles={["USER"]}>
            <Calls />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/bulk-calling"
        element={
          <RoleProtectedRoute allowedRoles={["USER"]}>
            <BulkCalling />
          </RoleProtectedRoute>
        }
      />

      {/* ================= COMMON ROUTES ================= */}
      <Route
        path="/analytics"
        element={
          <RoleProtectedRoute allowedRoles={["ADMIN", "USER"]}>
            <Analytics />
          </RoleProtectedRoute>
        }
      />

      {/* ================= CALL STATUS ================= */}
      <Route
        path="/interested"
        element={
          <RoleProtectedRoute allowedRoles={["USER"]}>
            <CallStatusPage
              title="Interested Calls"
              status="INTERESTED"
            />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/callback"
        element={
          <RoleProtectedRoute allowedRoles={["USER"]}>
            <CallStatusPage
              title="Callback Calls"
              status="CALL_BACK"
            />
          </RoleProtectedRoute>
        }
      />

      <Route
        path="/completed"
        element={
          <RoleProtectedRoute allowedRoles={["USER"]}>
            <CallStatusPage
              title="Completed Calls"
              status="COMPLETED"
            />
          </RoleProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;