function FeaturedJobs() {
  return (
    <section className="section-dark py-5">

      <div className="container">

        <h2
          className="text-center fw-bold mb-3"
          style={{ color: "#F8FAFC" }}
        >
          Why Choose CareerConnect?
        </h2>

        <p
          className="text-center mb-5"
          style={{ color: "#94A3B8" }}
        >
          Everything you need to manage your career journey in one place.
        </p>

        <div className="row">

          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body text-center p-4">

                <i
                  className="bi bi-search fs-1"
                  style={{ color: "#818CF8" }}
                ></i>

                <h5 className="mt-4 text-white">
                  Smart Search
                </h5>

                <p className="text-muted-custom mt-3">
                  Find jobs based on skills,
                  experience, location and
                  preferences.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body text-center p-4">

                <i
                  className="bi bi-file-earmark-person fs-1"
                  style={{ color: "#34D399" }}
                ></i>

                <h5 className="mt-4 text-white">
                  Resume Manager
                </h5>

                <p className="text-muted-custom mt-3">
                  Upload and manage your
                  professional resume
                  effortlessly.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body text-center p-4">

                <i
                  className="bi bi-bar-chart-fill fs-1"
                  style={{ color: "#FBBF24" }}
                ></i>

                <h5 className="mt-4 text-white">
                  Analytics
                </h5>

                <p className="text-muted-custom mt-3">
                  Track applications,
                  interviews and overall
                  career progress.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-6 col-lg-3 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body text-center p-4">

                <i
                  className="bi bi-people-fill fs-1"
                  style={{ color: "#F472B6" }}
                ></i>

                <h5 className="mt-4 text-white">
                  Recruiter Connect
                </h5>

                <p className="text-muted-custom mt-3">
                  Connect directly with
                  recruiters and hiring
                  managers.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedJobs;