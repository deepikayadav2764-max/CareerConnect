import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecruiterSidebar from "../common/RecruiterSidebar";

function RecruiterViewCandidate() {

  const { id } = useParams();

  const [candidate, setCandidate] = useState(null);

  useEffect(() => {

    if (id) {
      fetchCandidate();
    }

  }, [id]);

  const fetchCandidate = async () => {

    try {

      console.log("Candidate ID:", id);

      const response = await axios.get(
        "http://localhost:9091/api/users/" + id
      );

      console.log("Candidate Data:", response.data);

      setCandidate(response.data);

    } catch (error) {

      console.error(error);

      console.log(
        "Response:",
        error.response?.data
      );

      alert("Failed to load candidate");

    }

  };

  if (!id) {
    return (
      <div className="text-center mt-5">
        Candidate ID not found
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="text-center mt-5">
        Loading Candidate...
      </div>
    );
  }

  return (
    <div className="d-flex">

      <RecruiterSidebar />

      <div className="dashboard-content">

        <div className="topbar">
          <h2>Candidate Profile</h2>
          <p className="text-secondary">
            View Candidate Details
          </p>
        </div>

        <div className="profile-card p-4">

          <div className="text-center mb-4">

            <img
              src={
                candidate.profilePhoto
                  ? "http://localhost:9091/" +
                    candidate.profilePhoto
                  : "https://i.pravatar.cc/150"
              }
              alt="candidate"
              className="profile-avatar"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%"
              }}
            />

            <h3 className="mt-3">
              {candidate.fullName}
            </h3>

            <p className="text-secondary">
              {candidate.role}
            </p>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label>Email</label>

              <input
                className="form-control"
                value={candidate.email || ""}
                readOnly
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Phone</label>

              <input
                className="form-control"
                value={candidate.phone || ""}
                readOnly
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Location</label>

              <input
                className="form-control"
                value={candidate.location || ""}
                readOnly
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Skills</label>

              <input
                className="form-control"
                value={candidate.skills || ""}
                readOnly
              />
            </div>

          </div>

          <div className="mb-4">

            <label>About Candidate</label>

            <textarea
              className="form-control"
              rows="5"
              value={candidate.about || ""}
              readOnly
            />

          </div>

          <div className="mb-3">

            <h5>Resume</h5>

            {candidate.resume ? (

              <a
                href={
                  "http://localhost:9091/" +
                  candidate.resume
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Resume
              </a>

            ) : (

              <p>No Resume Uploaded</p>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default RecruiterViewCandidate;