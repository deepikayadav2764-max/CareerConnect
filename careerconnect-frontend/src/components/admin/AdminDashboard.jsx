import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../common/AdminSidebar";

function AdminDashboard() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCandidates: 0,
    totalRecruiters: 0,
    totalJobs: 0,
    totalApplications: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {

    try {

      const response = await axios.get(
        "http://localhost:9091/api/admin/dashboard"
      );

      setStats(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load dashboard");

    }
  };

  return (
    <div className="d-flex">

      <AdminSidebar />

      <div className="dashboard-content">

        <div className="topbar">

          <h2>Admin Dashboard</h2>

          <p className="text-secondary">
            System Analytics Overview
          </p>

        </div>

        <div className="row">

          <div className="col-md-4 mb-4">

            <div className="card stat-card">

              <div className="card-body text-center">

                <h2>{stats.totalUsers}</h2>

                <p>Total Users</p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card stat-card">

              <div className="card-body text-center">

                <h2>{stats.totalCandidates}</h2>

                <p>Total Candidates</p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card stat-card">

              <div className="card-body text-center">

                <h2>{stats.totalRecruiters}</h2>

                <p>Total Recruiters</p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card stat-card">

              <div className="card-body text-center">

                <h2>{stats.totalJobs}</h2>

                <p>Total Jobs</p>

              </div>

            </div>

          </div>

          <div className="col-md-4 mb-4">

            <div className="card stat-card">

              <div className="card-body text-center">

                <h2>{stats.totalApplications}</h2>

                <p>Total Applications</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;