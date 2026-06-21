import { Link } from "react-router-dom";
import { useState } from "react";

function RecruiterSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="sidebar"
      style={{
        width: collapsed ? "80px" : "250px",
        transition: "0.3s",
      }}
    >
      <div className="p-3">

        <button
          className="btn btn-outline-light w-100 mb-4"
          onClick={() => setCollapsed(!collapsed)}
        >
          <i className="bi bi-list"></i>
        </button>

        <ul className="nav flex-column">

          <li className="nav-item">
            <Link to="/recruiter" className="nav-link">
              <i className="bi bi-speedometer2"></i>

              {!collapsed && (
                <span className="ms-2">
                  Dashboard
                </span>
              )}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/post-job" className="nav-link">
              <i className="bi bi-plus-circle"></i>

              {!collapsed && (
                <span className="ms-2">
                  Post Job
                </span>
              )}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/manage-jobs" className="nav-link">
              <i className="bi bi-briefcase"></i>

              {!collapsed && (
                <span className="ms-2">
                  Manage Jobs
                </span>
              )}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/applicants" className="nav-link">
              <i className="bi bi-people"></i>

              {!collapsed && (
                <span className="ms-2">
                  Applicants
                </span>
              )}
            </Link>
          </li>
          <li className="nav-item">

<Link
  to="/recruiter/change-password"
  className="nav-link"
>
  <i className="bi bi-key-fill me-2"></i>
  Change Password
</Link>
</li>

          <li className="nav-item mt-4">
            <Link to="/login" className="nav-link text-danger">
              <i className="bi bi-box-arrow-right"></i>

              {!collapsed && (
                <span className="ms-2">
                  Logout
                </span>
              )}
            </Link>
          </li>

        </ul>

      </div>
    </div>
  );
}

export default RecruiterSidebar;