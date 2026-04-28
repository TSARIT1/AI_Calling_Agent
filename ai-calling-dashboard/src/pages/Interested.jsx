import { useEffect, useState } from "react";

const Interested = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/dashboard/status?status=INTERESTED")
      .then(res => res.json())
      .then(data => setCalls(data));
  }, []);

  return (
    <div>
      <h2>Interested Calls</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>SR No.</th>
            <th>Name</th>
            <th>Contact No</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {calls.map((c, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* ✅ SR No */}
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.status}</td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Interested;