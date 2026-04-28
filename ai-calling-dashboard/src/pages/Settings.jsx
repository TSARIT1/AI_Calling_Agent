import "./Dashboard.css";
import "./Settings.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-area">
        <Navbar />

        <div className="dashboard-content">

          {/* HEADER */}
          <div className="settings-header">
            <h1>Settings</h1>
            <p>Manage your account, preferences and system configuration</p>
          </div>

          {/* GRID */}
          <div className="settings-layout">

            {/* LEFT PANEL */}
            <div className="settings-left">

              {/* PROFILE */}
              <div className="settings-card">
                <h3>Profile Information</h3>

                <div className="profile-row">
                  <img src="" alt="" />
                  <div>
                    <h4>Aditya</h4>
                    <span>Admin</span>
                  </div>
                </div>

                <input placeholder="Full Name" />
                <input placeholder="Email Address" />
                <input placeholder="Phone Number" />

                <button className="btn-primary">Update Profile</button>
              </div>

              {/* PASSWORD */}
              <div className="settings-card">
                <h3>Security</h3>

                <input type="password" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm Password" />

                <button className="btn-primary">Change Password</button>
              </div>

            </div>

            {/* RIGHT PANEL */}
            <div className="settings-right">

              {/* SYSTEM SETTINGS */}
              <div className="settings-card">
                <h3>System Preferences</h3>

                <div className="toggle">
                  <span>Email Notifications</span>
                  <input type="checkbox" />
                </div>

                <div className="toggle">
                  <span>Auto Call Recording</span>
                  <input type="checkbox" />
                </div>

                <div className="toggle">
                  <span>Dark Mode</span>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>

              {/* API / INTEGRATION */}
              <div className="settings-card">
                <h3>API & Integration</h3>

                <input placeholder="Twilio SID" />
                <input placeholder="Auth Token" />
                <input placeholder="Webhook URL" />

                <button className="btn-primary">Save Configuration</button>
              </div>

              {/* DANGER ZONE */}
              <div className="settings-card danger-zone">
                <h3>Danger Zone</h3>
                <p>Deactivate account or clear all call logs</p>

                <button className="btn-danger">Delete All Data</button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Settings;