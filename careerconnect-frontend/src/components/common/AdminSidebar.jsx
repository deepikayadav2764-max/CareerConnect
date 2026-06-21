import { Link, useNavigate } from "react-router-dom";

function AdminSidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (
    <div className="sidebar p-3">

      <h3 className="text-white mb-4">
        Admin Panel
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/admin/dashboard"
          >
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/admin/users"
          >
            Manage Users
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            to="/admin/manage-jobs"
          >
            Manage Jobs
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/admin/change-password"
            className="nav-link"
          >
            Change Password
          </Link>
        </li>

        <li className="nav-item mt-3">
          <button
            className="btn btn-danger w-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>

      </ul>

    </div>
  );
}

export default AdminSidebar;