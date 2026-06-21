import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../common/AdminSidebar";

function AdminManageUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:9091/api/users"
      );

      setUsers(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load users");

    }
  };

  const deleteUser = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        "http://localhost:9091/api/users/" + id
      );

      fetchUsers();

      alert("User Deleted Successfully");

    } catch (error) {

      console.error(error);

      alert("Failed to delete user");

    }
  };

  return (
    <div className="d-flex">

      <AdminSidebar />

      <div className="dashboard-content">

        <div className="topbar">

          <h2>Manage Users</h2>

          <p className="text-secondary">
            View and manage all users
          </p>

        </div>

        <div className="table-card">

          <table className="table table-dark-custom">

            <thead>

              <tr>

                <th>ID</th>

                <th>Name</th>

                <th>Email</th>

                <th>Phone</th>

                <th>Location</th>

                <th>Skills</th>

                <th>Role</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.fullName}</td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>{user.location}</td>

                  <td>{user.skills}</td>

                  <td>

                    {user.role === "ADMIN" && (
                      <span className="badge bg-danger">
                        ADMIN
                      </span>
                    )}

                    {user.role === "RECRUITER" && (
                      <span className="badge bg-primary">
                        RECRUITER
                      </span>
                    )}

                    {user.role === "CANDIDATE" && (
                      <span className="badge bg-success">
                        CANDIDATE
                      </span>
                    )}

                  </td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteUser(user.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminManageUsers;

