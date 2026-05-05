import { useState } from "react";
import axios from "axios";
import "./Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    await axios.put("http://localhost:8080/admin/update-profile", profile);
    alert("Profile updated");
  };

  const changePassword = async () => {
    await axios.put("http://localhost:8080/admin/change-password", password);
    alert("Password updated");
  };

  return (
    <div className="settings-container">

      {/* LEFT MENU */}
      <div className="settings-sidebar">
        <div
          className={`tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </div>

        <div
          className={`tab ${activeTab === "security" ? "active" : ""}`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </div>

        {/* <div
          className={`tab ${activeTab === "preferences" ? "active" : ""}`}
          onClick={() => setActiveTab("preferences")}
        >
          Preferences
        </div> */}
      </div>

      {/* RIGHT PANEL */}
      <div className="settings-content">

        {activeTab === "profile" && (
          <div className="section">
            <h3>Profile Information</h3>

            <div className="form-grid">
              <input name="name" placeholder="Full Name" onChange={handleProfileChange} />
              <input name="email" placeholder="Email" onChange={handleProfileChange} />
              <input name="phone" placeholder="Phone" onChange={handleProfileChange} />
            </div>

            <button className="primary-btn" onClick={updateProfile}>
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "security" && (
          <div className="section">
            <h3>Change Password</h3>

            <div className="form-grid">
              <input type="password" name="oldPassword" placeholder="Old Password" onChange={handlePasswordChange} />
              <input type="password" name="newPassword" placeholder="New Password" onChange={handlePasswordChange} />
            </div>

            <button className="primary-btn" onClick={changePassword}>
              Update Password
            </button>
          </div>
        )}

        {/* {activeTab === "preferences" && (
          <div className="section">
            <h3>Preferences</h3>

            <div className="toggle-row">
              <span>Enable Notifications</span>
              <input type="checkbox" />
            </div>

            <div className="toggle-row">
              <span>Dark Mode</span>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        )} */}

      </div>
    </div>
  );
};

export default Settings;