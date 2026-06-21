import { Link } from "react-router-dom";

function Hero() {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <section
      className="section-dark py-5"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <span
              className="badge bg-primary mb-3 px-3 py-2"
            >
              #1 Career Platform
            </span>

            <h1
              className="fw-bold text-white"
              style={{
                fontSize: "4rem",
                lineHeight: "1.1"
              }}
            >
              Find Your Dream
              <span
                style={{
                  color: "#6366F1"
                }}
              >
                {" "}Tech Job
              </span>
              <br />
              Faster Than Ever
            </h1>

            <p
              className="mt-4"
              style={{
                color: "#CBD5E1",
                fontSize: "1.2rem",
                maxWidth: "550px"
              }}
            >
              Discover top opportunities, connect
              with recruiters, track applications,
              and grow your career with CareerConnect.
            </p>

            <div className="mt-4">

              <Link
                to="/jobs"
                className="btn btn-primary btn-lg me-3"
              >
                Explore Jobs
              </Link>

              <Link
                to={
                  user.role === "RECRUITER"
                    ? "/post-job"
                    : "/login"
                }
                className="btn btn-outline-light btn-lg"
              >
                Post a Job
              </Link>

            </div>

          </div>

          <div className="col-lg-6">

            <div
              className="card card-dark p-5"
              style={{
                borderRadius: "25px"
              }}
            >

              <h3 className="text-white mb-4">
                🚀 CareerConnect Platform
              </h3>

              <div className="mb-4">

                <div className="d-flex align-items-center mb-3">
                  <i
                    className="bi bi-check-circle-fill me-3"
                    style={{ color: "#22C55E" }}
                  ></i>

                  <span className="text-white">
                    Create Professional Profile
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i
                    className="bi bi-check-circle-fill me-3"
                    style={{ color: "#22C55E" }}
                  ></i>

                  <span className="text-white">
                    Search & Apply For Jobs
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i
                    className="bi bi-check-circle-fill me-3"
                    style={{ color: "#22C55E" }}
                  ></i>

                  <span className="text-white">
                    Manage Applications
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i
                    className="bi bi-check-circle-fill me-3"
                    style={{ color: "#22C55E" }}
                  ></i>

                  <span className="text-white">
                    Connect With Recruiters
                  </span>
                </div>

              </div>

              <div
                className="p-3 mt-3"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  borderRadius: "15px"
                }}
              >
                <p
                  className="mb-0"
                  style={{
                    color: "#CBD5E1"
                  }}
                >
                  One platform for candidates,
                  recruiters, and administrators.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;