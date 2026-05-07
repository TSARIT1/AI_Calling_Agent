// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./AdminAuth.css";
// // import api from "../api";
// // import Navbar from "../components/Navbar";

// // const AdminLogin = () => {

// //   const [formData, setFormData] = useState({
// //     email: ""
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [step, setStep] = useState(1);

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   // SEND OTP
// //   const handleSendOtp = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       await api.post("/admin/send-otp", {
// //         email: formData.email
// //       });

// //       setStep(2);

// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to send OTP");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // VERIFY OTP
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {

// //       if (!otp) {
// //         setError("Please enter OTP");
// //         setLoading(false);
// //         return;
// //       }

// //       await api.post("/admin/verify-otp", {
// //         email: formData.email,
// //         otp: otp
// //       });

// //       // localStorage.setItem("adminToken", "logged-in");

// //       localStorage.setItem("token", "admin-token");
// // localStorage.setItem("role", "ADMIN");
// // localStorage.setItem("userName", formData.email);

// //       navigate("/admin/home");

// //     } catch (err) {
// //       console.error(err);
// //       setError("Invalid or expired OTP");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="admin-login-page">

// //         {/* LEFT SIDE */}
// //         <div className="admin-left">

// //           <img
// //             src="/Enter OTP-amico.png"
// //             alt="admin"
// //             className="admin-image"
// //           />

// //           <div className="admin-info">
// //             <h2>Admin Control Panel</h2>
// //             <p>Secure access to TeleCRM administration dashboard.</p>
// //           </div>

// //         </div>


// //         {/* RIGHT SIDE */}
// //         <div className="admin-right">

// //           <div className="admin-auth-card">

// //             <h2 className="admin-auth-title">Admin Login</h2>

// //             <div className="admin-step">
// //               Step {step} of 2
// //             </div>

// //             {error && (
// //               <div className="admin-auth-error">{error}</div>
// //             )}

// //             {/* STEP 1 EMAIL */}
// //             {step === 1 && (

// //               <form onSubmit={handleSendOtp} className="admin-auth-form">

// //                 <div className="admin-form-group">
// //                   <label>Email</label>

// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="admin-auth-btn"
// //                   disabled={loading}
// //                 >
// //                   {loading ? "Sending OTP..." : "Send OTP"}
// //                 </button>

// //               </form>

// //             )}

// //             {/* STEP 2 OTP */}
// //             {step === 2 && (

// //               <form onSubmit={handleSubmit} className="admin-auth-form">

// //                 <div className="admin-form-group">
// //                   <label>Enter OTP</label>

// //                   <input
// //                     type="text"
// //                     value={otp}
// //                     onChange={(e) => setOtp(e.target.value)}
// //                     placeholder="Enter 6 digit OTP"
// //                     required
// //                   />
// //                 </div>

// //                 <button
// //                   type="submit"
// //                   className="admin-auth-btn verify"
// //                   disabled={loading}
// //                 >
// //                   {loading ? "Verifying..." : "Verify OTP & Login"}
// //                 </button>

// //               </form>

// //             )}

// //           </div>

// //         </div>

// //       </div>
// //     </>
// //   );
// // };

// // export default AdminLogin;


// // //email & otp login

// import React, { useState } from "react";
// import axios from "axios";
// import "./AdminLogin.css";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = () => {

//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   // SEND OTP
//   const sendOtp = async () => {

//     try {

//       setLoading(true);
//       setError("");

//       await axios.post(
//         "http://localhost:8080/admin/send-otp",
//         { email }
//       );

//       setStep(2);

//     } catch (err) {

//       setError("Failed to send OTP");

//     } finally {

//       setLoading(false);
//     }
//   };

//   // VERIFY OTP
//   const verifyOtp = async () => {

//     try {

//       setLoading(true);
//       setError("");

//       await axios.post(
//         "http://localhost:8080/admin/verify-otp",
//         {
//           email,
//           otp
//         }
//       );

//       // SAVE LOGIN
//       localStorage.setItem("token", "admin-token");
//       localStorage.setItem("role", "ADMIN");
//       localStorage.setItem("employeeId", email);

//       // REDIRECT
//       navigate("/admin");

//     } catch (err) {

//       setError("Invalid OTP");

//     } finally {

//       setLoading(false);
//     }
//   };

//   return (
//     <div className="admin-auth-page">

//       <div className="admin-card">

//         <h2>Admin Login</h2>

//         {error && (
//           <div className="error-box">
//             {error}
//           </div>
//         )}

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <input
//               type="email"
//               placeholder="Enter admin email"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//             />

//             <button onClick={sendOtp}>
//               {loading
//                 ? "Sending..."
//                 : "Send OTP"}
//             </button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) =>
//                 setOtp(e.target.value)
//               }
//             />

//             <button onClick={verifyOtp}>
//               {loading
//                 ? "Verifying..."
//                 : "Verify OTP"}
//             </button>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import axios from "axios";
import Navbar from "../components/Navbar";

const AdminLogin = () => {

  const [formData, setFormData] = useState({
    email: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  // HANDLE EMAIL CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SEND OTP
  const handleSendOtp = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      await axios.post(
        "http://localhost:8080/admin/send-otp",
        {
          email: formData.email
        }
      );

      setStep(2);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to send OTP"
      );

    } finally {

      setLoading(false);
    }
  };

  // VERIFY OTP
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      if (!otp) {

        setError(
          "Please enter OTP"
        );

        setLoading(false);

        return;
      }

      await axios.post(
        "http://localhost:8080/admin/verify-otp",
        {
          email: formData.email,
          otp: otp
        }
      );

      // SAVE LOGIN
      localStorage.setItem(
        "token",
        "admin-token"
      );

      localStorage.setItem(
        "role",
        "ADMIN"
      );

      localStorage.setItem(
        "employeeId",
        formData.email
      );

      // REDIRECT
      navigate("/admin");

    } catch (err) {

      console.error(err);

      setError(
        "Invalid or expired OTP"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="admin-login-page">

        {/* LEFT SIDE */}
        <div className="admin-left">

          <div className="overlay"></div>

          <img
            src="/Enter OTP-amico.png"
            alt="admin"
            className="admin-image"
          />

          <div className="admin-info">

            <span className="admin-badge">
              TSAR AI SYSTEM
            </span>

            <h2>
              AI Calling Admin Portal
            </h2>

            <p>
              Secure OTP based authentication
              system for TeleCRM administrators.
              Monitor AI calls, analytics,
              customers and campaigns from
              one centralized dashboard.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="admin-right">

          <div className="admin-auth-card">

            <div className="card-top">

              <h2 className="admin-auth-title">
                Admin Login
              </h2>

              <p className="admin-subtitle">
                Access secure administration panel
              </p>

            </div>

            <div className="admin-step">
              Step {step} of 2
            </div>

            {/* ERROR */}
            {error && (
              <div className="admin-auth-error">
                {error}
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && (

              <form
                onSubmit={handleSendOtp}
                className="admin-auth-form"
              >

                <div className="admin-form-group">

                  <label>
                    Admin Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter admin email"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="admin-auth-btn"
                  disabled={loading}
                >

                  {loading
                    ? "Sending OTP..."
                    : "Send OTP"}

                </button>

              </form>

            )}

            {/* STEP 2 */}
            {step === 2 && (

              <form
                onSubmit={handleSubmit}
                className="admin-auth-form"
              >

                <div className="admin-form-group">

                  <label>
                    Enter OTP
                  </label>

                  <input
                    type="text"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value)
                    }
                    placeholder="Enter 6 digit OTP"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="admin-auth-btn verify"
                  disabled={loading}
                >

                  {loading
                    ? "Verifying..."
                    : "Verify OTP & Login"}

                </button>

              </form>

            )}

          </div>

        </div>

      </div>
    </>
  );
};

export default AdminLogin;