import { Routes, Route } from "react-router-dom";
import Login from "./auth/UserLogin";
import Register from "./auth/UserRegister";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Calls from "./pages/Calls";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import RoleProtectedRoute from "./RoleProtectedRoute";
import Interested from "./pages/Interested";
import Callback from "./pages/Callback";
import Completed from "./pages/Completed";
import CallStatusPage from "./pages/CallStatusPage";
import BulkCalling from "./pages/BulkCalling";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* USER */}
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

  {/* BOTH */}
  <Route
    path="/analytics"
    element={
      <RoleProtectedRoute allowedRoles={["ADMIN", "USER"]}>
        <Analytics />
      </RoleProtectedRoute>
    }
  />


  {/* <Route
  path="/interested"
  element={
    <RoleProtectedRoute allowedRoles={["USER"]}>
      <CallStatusPage title="Interested Calls" status="INTERESTED" />
    </RoleProtectedRoute>
  }
/>

<Route
  path="/callback"
  element={
    <RoleProtectedRoute allowedRoles={["USER"]}>
      <CallStatusPage title="Callback Calls" status="CALL_BACK" />
    </RoleProtectedRoute>
  }
/>

<Route
  path="/completed"
  element={
    <RoleProtectedRoute allowedRoles={["USER"]}>
      <CallStatusPage title="Completed Calls" status="COMPLETED" />
    </RoleProtectedRoute>
  }
/> */}


    <Route
  path="/interested"
  element={
    <RoleProtectedRoute allowedRoles={["USER"]}>
      <CallStatusPage title="Interested Calls" status="INTERESTED" />
    </RoleProtectedRoute>
  }
/>

<Route
  path="/callback"
  element={
    <RoleProtectedRoute allowedRoles={["USER"]}>
      <CallStatusPage title="Callback Calls" status="CALL_BACK" />
    </RoleProtectedRoute>
  }
/>

<Route
  path="/completed"
  element={
    <RoleProtectedRoute allowedRoles={["USER"]}>
      <CallStatusPage title="Completed Calls" status="COMPLETED" />
    </RoleProtectedRoute>
  }
/>


  {/* ADMIN */}
  <Route
    path="/settings"
    element={
      <RoleProtectedRoute allowedRoles={["ADMIN"]}>
        <Settings />
      </RoleProtectedRoute>
    }
  />
</Routes>
  );
}

export default App;