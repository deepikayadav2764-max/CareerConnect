import { useState } from "react";
import axios from "axios";
import RecruiterSidebar from "../common/RecruiterSidebar";

function PostJob() {

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    experience: "",
    jobType: "",
    skills: "",
    description: "",
    recruiterId: ""
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const recruiter = JSON.parse(
        localStorage.getItem("user")
      );

      await axios.post(
        "http://localhost:9091/api/jobs",
        {
          ...job,
          recruiterId: recruiter.id
        }
      );

      alert("Job Posted Successfully 🚀");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        experience: "",
        jobType: "",
        skills: "",
        description: "",
        recruiterId: ""
      });

    } catch (error) {

      console.error(error);

      alert("Failed to Post Job");

    }
  };

  return (
    <div className="d-flex">

      <RecruiterSidebar />

      <div className="dashboard-content">

        <div className="topbar">
          <h2>Post New Job</h2>

          <p className="text-secondary">
            Create and publish a new job opening
          </p>
        </div>

        <div className="post-job-card">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Job Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={job.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Company Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="company"
                  value={job.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Location
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={job.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Salary
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="salary"
                  value={job.salary}
                  onChange={handleChange}
                  placeholder="₹6 LPA"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Experience
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  value={job.experience}
                  onChange={handleChange}
                  placeholder="0-2 Years"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Job Type
                </label>

                <select
                  className="form-select"
                  name="jobType"
                  value={job.jobType}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Job Type
                  </option>

                  <option value="Full Time">
                    Full Time
                  </option>

                  <option value="Part Time">
                    Part Time
                  </option>

                  <option value="Internship">
                    Internship
                  </option>

                  <option value="Remote">
                    Remote
                  </option>
                </select>
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">
                  Required Skills
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  value={job.skills}
                  onChange={handleChange}
                  placeholder="React, JavaScript, Spring Boot"
                />
              </div>

              <div className="col-12 mb-4">
                <label className="form-label">
                  Job Description
                </label>

                <textarea
                  rows="6"
                  className="form-control"
                  name="description"
                  value={job.description}
                  onChange={handleChange}
                ></textarea>
              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary px-4"
            >
              Post Job
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default PostJob;