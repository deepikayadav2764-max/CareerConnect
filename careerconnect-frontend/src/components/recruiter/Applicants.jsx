import { useEffect, useState } from "react";
import axios from "axios";
import RecruiterSidebar from "../common/RecruiterSidebar";
import { useNavigate } from "react-router-dom";

function Applicants() {

const [applicants, setApplicants] = useState([]);
const navigate = useNavigate();

useEffect(() => {
fetchApplicants();
}, []);

const fetchApplicants = async () => {


try {

  const recruiter = JSON.parse(
    localStorage.getItem("user")
  );

  const response = await axios.get(
    "http://localhost:9091/api/applications/recruiter/" +
    recruiter.id
  );

  setApplicants(response.data);

} catch (error) {

  console.error(error);

  alert("Failed to load applicants");

}


};

const updateStatus = async (id, status) => {


try {

  await axios.put(
    "http://localhost:9091/api/applications/" +
    id +
    "/" +
    status
  );

  fetchApplicants();

} catch (error) {

  console.error(error);

  alert("Failed to update status");

}


};

const viewCandidate = (userId) => {


navigate(
  "/recruiter/view-candidate/" + userId
);


};

return ( <div className="d-flex">


  <RecruiterSidebar />

  <div className="dashboard-content">

    <div className="topbar">

      <h2>Applicants</h2>

      <p className="text-secondary">
        Manage candidate applications
      </p>

    </div>

    <div className="applicants-card">

      <table className="table table-dark-custom">

        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {applicants.length > 0 ? (

            applicants.map((applicant) => (

              <tr key={applicant.id}>

                <td>{applicant.candidateName}</td>

                <td>{applicant.company}</td>

                <td>{applicant.position}</td>

                <td>

                  {applicant.status === "Pending" && (
                    <span className="badge bg-warning text-dark">
                      Pending
                    </span>
                  )}

                  {applicant.status === "Shortlisted" && (
                    <span className="badge bg-success">
                      Shortlisted
                    </span>
                  )}

                  {applicant.status === "Rejected" && (
                    <span className="badge bg-danger">
                      Rejected
                    </span>
                  )}

                  {applicant.status === "Selected" && (
                    <span className="badge bg-primary">
                      Selected
                    </span>
                  )}

                </td>

                <td>

                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() =>
                      viewCandidate(
                        applicant.userId
                      )
                    }
                  >
                    View Profile
                  </button>

                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() =>
                      updateStatus(
                        applicant.id,
                        "Shortlisted"
                      )
                    }
                  >
                    Shortlist
                  </button>

                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() =>
                      updateStatus(
                        applicant.id,
                        "Rejected"
                      )
                    }
                  >
                    Reject
                  </button>

                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() =>
                      updateStatus(
                        applicant.id,
                        "Selected"
                      )
                    }
                  >
                    Hire
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td
                colSpan="5"
                className="text-center"
              >
                No applicants found
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

export default Applicants;
