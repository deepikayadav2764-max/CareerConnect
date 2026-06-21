import Sidebar from "../common/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
function Applications() {

const [applications, setApplications] = useState([]);

const user = JSON.parse(
  localStorage.getItem("user")
);

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

        <div className="topbar">
          <h2>My Applications</h2>
          <p className="text-secondary">
            Track all your job applications
          </p>
        </div>

        <div className="table-card">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h4 className="mb-0">
              Applied Jobs
            </h4>

            <input
              type="text"
              className="form-control w-25"
              placeholder="Search..."
            />

          </div>

          <table className="table table-dark-custom">

            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {applications.map((app) => (

                <tr key={app.id}>

                  <td>{app.company}</td>

                  <td>{app.position}</td>

                   <td>Applied</td>
                  <td>

                    {app.status === "Pending" && (
                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    )}

                    {app.status === "Shortlisted" && (
                      <span className="badge bg-success">
                        Shortlisted
                      </span>
                    )}

                    {app.status === "Rejected" && (
                      <span className="badge bg-danger">
                        Rejected
                      </span>
                    )}

                    {app.status === "Selected" && (
                      <span className="badge bg-primary">
                        Selected
                      </span>
                    )}

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

export default Applications;