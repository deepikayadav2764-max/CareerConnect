import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      className="py-5 text-center"
      style={{
        background:
          "linear-gradient(135deg,#111827,#1E293B)"
      }}
    >

      <div className="container">

        <h2
          className="fw-bold mb-3"
          style={{
            color: "#F8FAFC"
          }}
        >
          Ready to Build Your Career?
        </h2>

        <p
          className="mb-4"
          style={{
            color: "#94A3B8",
            fontSize: "1.1rem"
          }}
        >
          Whether you're searching for your next
          opportunity or looking for talented
          candidates, CareerConnect helps you
          achieve your goals.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">

          <Link
            to="/register"
            className="btn btn-primary btn-lg"
          >
            Get Started
          </Link>

          <Link
            to="/jobs"
            className="btn btn-outline-light btn-lg"
          >
            Browse Jobs
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTA;