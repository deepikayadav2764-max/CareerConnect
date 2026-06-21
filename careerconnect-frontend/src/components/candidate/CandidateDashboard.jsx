import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../common/Sidebar";

function CandidateDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
    
  );
console.log("Stored User:", user);
console.log("User ID:", user.id);
console.log("Role:", user.role);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {

    try {

      const response = await axios.get(
        `http://localhost:9091/api/applications/user/${user.id}`
      );

      setApplications(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="dashboard-content">

        <div className="topbar d-flex justify-content-between align-items-center">

          <div>

            <h2 className="fw-bold">
              Welcome Back, {user?.fullName} 👋
            </h2>

            <small className="text-secondary">
              Manage your career journey
            </small>

          </div>

          <div className="d-flex align-items-center gap-4">


<img
  src={
    user?.profilePhoto
      ? "http://localhost:9091/" + user.profilePhoto
      : "https://i.pravatar.cc/100"
  }
  alt="profile"
  className="profile-img"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover"
  }}
/>
          </div>

        </div>

        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="card stat-card">
              <div className="card-body text-center">
                <i className="bi bi-briefcase-fill fs-1 text-white"></i>
                <h2>{applications.length}</h2>
                <p>Jobs Applied</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card stat-card">
              <div className="card-body text-center">
                <i className="bi bi-check-circle-fill fs-1 text-white"></i>
                <h2>
                  {
                    applications.filter(
                      app => app.status === "Shortlisted"
                    ).length
                  }
                </h2>
                <p>Shortlisted</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card stat-card">
              <div className="card-body text-center">
                <i className="bi bi-trophy-fill fs-1 text-white"></i>
                <h2>
                  {
                    applications.filter(
                      app => app.status === "Selected"
                    ).length
                  }
                </h2>
                <p>Selected</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card stat-card">
              <div className="card-body text-center">
                <i className="bi bi-bookmark-fill fs-1 text-white"></i>
                <h2>0</h2>
                <p>Saved Jobs</p>
              </div>
            </div>
          </div>

        </div>

        <div className="table-card mt-4">

          <h4 className="mb-4">
            Recent Applications
          </h4>

          <table className="table table-dark-custom">

            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {applications.length > 0 ? (

                applications.map((app) => (

                  <tr key={app.id}>

                    <td>{app.company}</td>

                    <td>{app.position}</td>

                    <td>

                      <span
                        className={`badge ${
                          app.status === "Selected"
                            ? "bg-primary"
                            : app.status === "Shortlisted"
                            ? "bg-success"
                            : app.status === "Rejected"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {app.status}
                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="3" className="text-center">
                    No Applications Yet
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default CandidateDashboard;