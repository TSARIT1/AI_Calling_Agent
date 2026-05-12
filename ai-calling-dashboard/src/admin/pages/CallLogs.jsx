import { useEffect, useState } from "react";
import axios from "axios";


const CallLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/calls")
      .then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Call Logs</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          {logs.map(l => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.customerName}</td>
              <td>{l.status}</td>
              <td>{l.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallLogs;