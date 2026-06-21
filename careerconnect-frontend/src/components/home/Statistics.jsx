import { useEffect, useState } from "react";
import axios from "axios";

function Statistics() {

  const [stats, setStats] = useState({
    users: 0,
    recruiters: 0,
    jobs: 0,
    applications: 0
  });

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const usersResponse =
        await axios.get(
          "http://localhost:9091/api/users"
        );

      const jobsResponse =
        await axios.get(
          "http://localhost:9091/api/jobs"
        );

      const applicationsResponse =
        await axios.get(
          "http://localhost:9091/api/applications"
        );

      const users =
        usersResponse.data || [];

      const recruiters =
        users.filter(
          (u) => u.role === "RECRUITER"
        );

      setStats({
        users: users.length,
        recruiters: recruiters.length,
        jobs: jobsResponse.data.length,
        applications:
          applicationsResponse.data.length
      });

    } catch (error) {

      console.error(
        "Failed to load statistics",
        error
      );

    }
  };

  return (

    <section
      className="py-5"
      style={{
        background: "#111827"
      }}
    >

      <div className="container">

        <h2
          className="text-center fw-bold mb-5"
          style={{
            color: "#F8FAFC"
          }}
        >
          Live Platform Insights
        </h2>

        <div className="row">

          <div className="col-md-3 mb-4">

            <div className="card card-dark text-center p-4 h-100">

              <h1
                style={{
                  color: "#818CF8"
                }}
              >
                {stats.jobs}
              </h1>

              <p className="text-muted-custom">
                Jobs Posted
              </p>

            </div>

          </div>

          <div className="col-md-3 mb-4">

            <div className="card card-dark text-center p-4 h-100">

              <h1
                style={{
                  color: "#34D399"
                }}
              >
                {stats.users}
              </h1>

              <p className="text-muted-custom">
                Registered Users
              </p>

            </div>

          </div>

          <div className="col-md-3 mb-4">

            <div className="card card-dark text-center p-4 h-100">

              <h1
                style={{
                  color: "#FBBF24"
                }}
              >
                {stats.recruiters}
              </h1>

              <p className="text-muted-custom">
                Recruiters
              </p>

            </div>

          </div>

          <div className="col-md-3 mb-4">

            <div className="card card-dark text-center p-4 h-100">

              <h1
                style={{
                  color: "#F472B6"
                }}
              >
                {stats.applications}
              </h1>

              <p className="text-muted-custom">
                Applications
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Statistics;