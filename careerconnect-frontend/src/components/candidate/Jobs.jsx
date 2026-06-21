import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../common/Sidebar";
import { Link } from "react-router-dom";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredJobs = jobs.filter((job) =>
    job.title?.toLowerCase().includes(search.toLowerCase()) ||
    job.company?.toLowerCase().includes(search.toLowerCase()) ||
    job.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="dashboard-content">

        <div className="topbar">

          <h2>Available Jobs</h2>

          <p className="text-secondary">
            Explore and apply for jobs
          </p>

        </div>

        <div className="mb-4">

          <input
            type="text"
            className="form-control"
            placeholder="Search by title, company or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="row">

          {filteredJobs.map((job) => (

            <div
              className="col-md-4 mb-4"
              key={job.id}
            >

              <div className="job-card">

                <h4>{job.title}</h4>

                <p>
                  <i className="bi bi-building"></i>{" "}
                  {job.company}
                </p>

                <p>
                  <i className="bi bi-geo-alt"></i>{" "}
                  {job.location}
                </p>

                <p>
                  <i className="bi bi-cash"></i>{" "}
                  {job.salary}
                </p>

                <Link
                  to="/job-details"
                  state={job}
                  className="btn btn-primary w-100"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

          {filteredJobs.length === 0 && (

            <div className="text-center mt-4">

              <h5>No Jobs Found</h5>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Jobs;