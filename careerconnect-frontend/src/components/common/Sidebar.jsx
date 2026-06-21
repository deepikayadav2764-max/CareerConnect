import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (
    <div
      className={`sidebar p-3 ${collapsed ? "collapsed" : ""}`}
    >

      <div className="d-flex justify-content-between align-items-center mb-4">

        {!collapsed && (
          <h4 className="fw-bold">
            CareerConnect
          </h4>
        )}

        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => setCollapsed(!collapsed)}
        >
          <i className="bi bi-list"></i>
        </button>

      </div>

      <ul className="nav flex-column">

        <li>
          <Link to="/candidate" className="nav-link">
            <i className="bi bi-speedometer2"></i>

            {!collapsed && (
              <span className="ms-2">
                Dashboard
              </span>
            )}
          </Link>
        </li>

        <li>
          <Link to="/jobs" className="nav-link">
            <i className="bi bi-briefcase-fill"></i>

            {!collapsed && (
              <span className="ms-2">
                Jobs
              </span>
            )}
          </Link>
        </li>

        <li>
          <Link to="/applications" className="nav-link">
            <i className="bi bi-file-earmark-text"></i>

            {!collapsed && (
              <span className="ms-2">
                Applications
              </span>
            )}
          </Link>
        </li>

        <li>
          <Link to="/profile" className="nav-link">
            <i className="bi bi-person-circle"></i>

            {!collapsed && (
              <span className="ms-2">
                Profile
              </span>
            )}
          </Link>
        </li>
        <li>
  <Link to="/change-password">
    Change Password
  </Link>
</li>

        <li className="mt-5">

          <button
            className="btn nav-link text-danger border-0 bg-transparent"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right"></i>

            {!collapsed && (
              <span className="ms-2">
                Logout
              </span>
            )}
          </button>

        </li>

      </ul>

    </div>
  );
}

export default Sidebar;