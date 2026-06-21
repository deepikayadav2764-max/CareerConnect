import Sidebar from "../common/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function JobDetails() {

  const location = useLocation();

  const job = location.state || {};

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  if (!job.id) {
    return (
      <div className="d-flex">
        <Sidebar />

        <div className="dashboard-content">
          <h2>No Job Selected</h2>

          <p className="text-secondary">
            Please go back to Jobs page and select a job.
          </p>
        </div>
      </div>
    );
  }

const handleApply = async () => {

  if (!user || !user.id) {

    alert("Please login first");

    return;

  }

  if (user.role !== "CANDIDATE") {

    alert("Only Candidates can apply for jobs");

    return;

  }

  try {

    const response = await axios.post(
      "http://localhost:9091/api/applications",
      {
        userId: user.id,
        jobId: job.id,
        recruiterId: job.recruiterId,
        candidateName: user.fullName,
        company: job.company,
        position: job.title
      }
    );

    if (!response.data) {

      alert(
        "You have already applied for this job or you are not authorized."
      );

      return;

    }

    alert("Application Submitted Successfully 🚀");

  } catch (error) {

    console.error(error);

    alert("Failed to Apply");

  }

};
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="dashboard-content">

        <div className="topbar">
          <h2>Job Details</h2>

          <p className="text-secondary">
            View complete job information
          </p>
        </div>

        <div className="job-details-card">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
              <h2>{job.title}</h2>

              <p className="text-secondary mb-0">
                {job.company} • {job.location}
              </p>
            </div>

<button
  className="btn btn-primary"
  onClick={handleApply}
  disabled={user.role !== "CANDIDATE"}
>
  {user.role === "CANDIDATE"
    ? "Apply Now"
    : "Candidates Only"}
</button>          </div>

          <hr />

          <div className="row mt-4">

            <div className="col-md-4 mb-3">
              <h6>Salary</h6>
              <p>{job.salary}</p>
            </div>

            <div className="col-md-4 mb-3">
              <h6>Experience</h6>
              <p>{job.experience}</p>
            </div>

            <div className="col-md-4 mb-3">
              <h6>Job Type</h6>
              <p>{job.jobType}</p>
            </div>

          </div>

          <div className="mt-5">

            <h4 className="mb-4">
              Required Skills
            </h4>

            <div className="skills-container">

              {job.skills &&
                job.skills.split(",").map((skill, index) => (
                  <span
                    key={index}
                    className="skill-pill"
                  >
                    {skill.trim()}
                  </span>
                ))}

            </div>

          </div>

          <div className="mt-5">

            <h4>Job Description</h4>

            <p className="mt-3 text-secondary">
              {job.description}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default JobDetails;