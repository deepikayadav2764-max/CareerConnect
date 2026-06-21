import { useEffect, useState } from "react";
import axios from "axios";
import RecruiterSidebar from "../common/RecruiterSidebar";

function ManageJobs() {

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {

    try {

      const recruiter = JSON.parse(
        localStorage.getItem("user")
      );

      const jobsResponse = await axios.get(
        "http://localhost:9091/api/jobs/recruiter/" +
        recruiter.id
      );

      const applicationsResponse = await axios.get(
        "http://localhost:9091/api/applications"
      );

      setJobs(jobsResponse.data);
      setApplications(applicationsResponse.data);

    } catch (error) {

      console.error(error);
      alert("Failed to load data");

    }
  };

  const deleteJob = async (id) => {

    try {

      await axios.delete(
        `http://localhost:9091/api/jobs/${id}`
      );

      fetchJobs();

      alert("Job Deleted Successfully");

    } catch (error) {

      console.error(error);
      alert("Failed to delete job");

    }
  };

  const updateJob = async () => {

    try {

      await axios.put(
        `http://localhost:9091/api/jobs/${editingJob.id}`,
        editingJob
      );

      alert("Job Updated Successfully");

      setEditingJob(null);

      fetchJobs();

    } catch (error) {

      console.error(error);
      alert("Failed to update job");

    }
  };

  return (
    <div className="d-flex">

      <RecruiterSidebar />

      <div className="dashboard-content">

        <div className="topbar">
          <h2>Manage Jobs</h2>

          <p className="text-secondary">
            View, edit and delete your posted jobs
          </p>
        </div>

        {editingJob && (

          <div className="card p-4 mb-4">

            <h4 className="mb-3">
              Edit Job
            </h4>

            <input
              className="form-control mb-2"
              value={editingJob.title}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  title: e.target.value
                })
              }
              placeholder="Job Title"
            />

            <input
              className="form-control mb-2"
              value={editingJob.company}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  company: e.target.value
                })
              }
              placeholder="Company"
            />

            <input
              className="form-control mb-2"
              value={editingJob.location}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  location: e.target.value
                })
              }
              placeholder="Location"
            />

            <input
              className="form-control mb-2"
              value={editingJob.salary}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  salary: e.target.value
                })
              }
              placeholder="Salary"
            />

            <button
              className="btn btn-success me-2"
              onClick={updateJob}
            >
              Save Changes
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                setEditingJob(null)
              }
            >
              Cancel
            </button>

          </div>

        )}

        <div className="manage-jobs-card">

          <table className="table table-dark-custom">

            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Applicants</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {jobs.length > 0 ? (

                jobs.map((job) => {

                  const applicantCount =
                    applications.filter(
                      (app) =>
                        app.jobId === job.id
                    ).length;

                  return (

                    <tr key={job.id}>

                      <td>{job.title}</td>

                      <td>{job.company}</td>

                      <td>{job.location}</td>

                      <td>
                        <span className="badge bg-primary">
                          {applicantCount}
                        </span>
                      </td>

                      <td>

                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() =>
                            setEditingJob(job)
                          }
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deleteJob(job.id)
                          }
                        >
                          <i className="bi bi-trash"></i>
                        </button>

                      </td>

                    </tr>

                  );

                })

              ) : (

                <tr>
                  <td
                    colSpan="5"
                    className="text-center"
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

export default ManageJobs;