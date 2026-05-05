import { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:8080/admin/users")
      .then(res => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/admin/users/${id}`);
    fetchUsers();
  };

  return (
    <div>
      <h2>Users</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.employeeId}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn-danger" onClick={() => deleteUser(u.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;