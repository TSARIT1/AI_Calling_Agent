import { useEffect, useState } from "react";

const Callback = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/dashboard/status?status=CALL_BACK")
      .then(res => res.json())
      .then(data => setCalls(data));
  }, []);

  return (
    <div>
      <h2>Callback Calls</h2>

      {calls.map((c, i) => (
        <p key={i}>{c.phone}</p>
      ))}
    </div>
  );
};

export default Callback; // ✅ VERY IMPORTANT