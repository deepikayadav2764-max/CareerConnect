function Testimonials() {
  return (
    <section className="section-dark py-5">

      <div className="container">

        <h2
          className="text-center fw-bold mb-3"
          style={{ color: "#F8FAFC" }}
        >
          Why CareerConnect?
        </h2>

        <p
          className="text-center mb-5"
          style={{ color: "#94A3B8" }}
        >
          Built to simplify the hiring process for
          candidates, recruiters, and administrators.
        </p>

        <div className="row">

          <div className="col-md-4 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body p-4">

                <h4
                  style={{ color: "#818CF8" }}
                >
                  🎯 For Candidates
                </h4>

                <p className="text-muted-custom mt-3">
                  Create profiles, upload resumes,
                  apply for jobs, and track
                  applications easily.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body p-4">

                <h4
                  style={{ color: "#34D399" }}
                >
                  🏢 For Recruiters
                </h4>

                <p className="text-muted-custom mt-3">
                  Post jobs, manage applications,
                  review candidates, and streamline
                  recruitment.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card card-dark h-100">

              <div className="card-body p-4">

                <h4
                  style={{ color: "#FBBF24" }}
                >
                  ⚙️ For Admins
                </h4>

                <p className="text-muted-custom mt-3">
                  Monitor users, manage jobs,
                  oversee activities, and keep
                  the platform organized.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;