import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../common/AdminSidebar";

function AdminManageJobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {

    try {

      const response = await axios.get(
        "http://localhost:9091/api/jobs"
      );

      setJobs(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load jobs");

    }
  };

  const deleteJob = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this job?"
      );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        "http://localhost:9091/api/admin/jobs/" + id
      );

      alert("Job Deleted Successfully");

      fetchJobs();

    } catch (error) {

      console.error(error);

      alert("Failed to delete job");

    }
  };

  return (
    <div className="d-flex">

      <AdminSidebar />

      <div className="dashboard-content">

        <div className="topbar">

          <h2>Manage Jobs</h2>

          <p className="text-secondary">
            View and manage all jobs
          </p>

        </div>

        <div className="table-card">

          <table className="table table-dark-custom">

            <thead>

              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Position</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {jobs.map((job) => (

                <tr key={job.id}>

                  <td>{job.id}</td>

                  <td>{job.company}</td>

                  <td>{job.title}</td>

                  <td>{job.location}</td>

                  <td>{job.salary}</td>

                  <td>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteJob(job.id)
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

export default AdminManageJobs;