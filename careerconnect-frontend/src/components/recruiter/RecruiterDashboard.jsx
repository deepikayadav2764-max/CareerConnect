import { useEffect, useState } from "react";
import axios from "axios";
import RecruiterSidebar from "../common/RecruiterSidebar";

function RecruiterDashboard() {

const user = JSON.parse(
localStorage.getItem("user") || "{}"
);

const [jobs, setJobs] = useState([]);
const [applications, setApplications] = useState([]);

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {


try {

  const jobsResponse = await axios.get(
    `http://localhost:9091/api/jobs/recruiter/${user.id}`
  );

  const applicationsResponse = await axios.get(
    `http://localhost:9091/api/applications/recruiter/${user.id}`
  );

  setJobs(jobsResponse.data || []);
  setApplications(applicationsResponse.data || []);

} catch (error) {

  console.error(error);

  alert("Failed to load dashboard data");

}


};

const shortlistedCount = applications.filter(
(app) => app.status === "Shortlisted"
).length;

const hiredCount = applications.filter(
(app) => app.status === "Selected"
).length;

return ( <div className="d-flex">

```
  <RecruiterSidebar />

  <div className="dashboard-content">

    <div className="topbar">

      <h2 className="fw-bold">
        Welcome Back, {user?.fullName} 👋
      </h2>

      <p className="text-secondary">
        Manage jobs and applicants
      </p>

    </div>

    <div className="row">

      <div className="col-md-3 mb-4">
        <div className="stat-card">
          <div className="card-body text-center">
            <i className="bi bi-briefcase-fill fs-1 text-white"></i>
            <h2>{jobs.length}</h2>
            <p>Jobs Posted</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="stat-card">
          <div className="card-body text-center">
            <i className="bi bi-people-fill fs-1 text-white"></i>
            <h2>{applications.length}</h2>
            <p>Applicants</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="stat-card">
          <div className="card-body text-center">
            <i className="bi bi-check-circle-fill fs-1 text-white"></i>
            <h2>{shortlistedCount}</h2>
            <p>Shortlisted</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="stat-card">
          <div className="card-body text-center">
            <i className="bi bi-trophy-fill fs-1 text-white"></i>
            <h2>{hiredCount}</h2>
            <p>Hired</p>
          </div>
        </div>
      </div>

    </div>

    <div className="table-card">

      <h4 className="mb-4">
        Recent Job Posts
      </h4>

      <table className="table table-dark-custom">

        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>

          {jobs.length > 0 ? (

            jobs.map((job) => (

              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
              </tr>

            ))

          ) : (

            <tr>
              <td
                colSpan="3"
                className="text-center text-secondary py-4"
              >
                No jobs posted yet
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

export default RecruiterDashboard;
