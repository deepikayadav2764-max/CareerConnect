import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import CandidateDashboard from "./components/candidate/CandidateDashboard";
import Jobs from "./components/candidate/Jobs";
import JobDetails from "./components/candidate/JobDetails";
import Profile from "./components/candidate/Profile";
import Applications from "./components/candidate/Applications";
import ChangePassword from "./components/candidate/ChangePassword";

import RecruiterDashboard from "./components/recruiter/RecruiterDashboard";
import PostJob from "./components/recruiter/PostJob";
import ManageJobs from "./components/recruiter/ManageJobs";
import Applicants from "./components/recruiter/Applicants";
import RecruiterViewCandidate from "./components/recruiter/RecruiterViewCandidate";

import AdminDashboard from "./components/admin/AdminDashboard";
import AdminManageUsers from "./components/admin/AdminManageUsers";
import AdminManageJobs from "./components/admin/AdminManageJobs";
import ProtectedRoute from "./components/common/ProtectedRoute";
import RecruiterChangePassword from "./components/recruiter/RecruiterChangePassword";
import AdminChangePassword from "./components/admin/AdminChangePassword";
import "bootstrap-icons/font/bootstrap-icons.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (

    <BrowserRouter>

      <div className="d-flex flex-column min-vh-100">

        <Navbar />

        <main className="flex-grow-1">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

<Route
  path="/candidate"
  element={
    <ProtectedRoute role="CANDIDATE">
      <CandidateDashboard />
    </ProtectedRoute>
  }
/>
            <Route
              path="/jobs"
              element={
                <ProtectedRoute>
                  <Jobs />
                </ProtectedRoute>
              }
            />

            <Route
              path="/job-details"
              element={
                <ProtectedRoute>
                  <JobDetails />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/applications"
              element={
                <ProtectedRoute>
                  <Applications />
                </ProtectedRoute>
              }
            />

            <Route
              path="/change-password"
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />

<Route
  path="/recruiter"
  element={
    <ProtectedRoute role="RECRUITER">
      <RecruiterDashboard />
    </ProtectedRoute>
  }
/>
            <Route
              path="/post-job"
              element={
                <ProtectedRoute>
                  <PostJob />
                </ProtectedRoute>
              }
            />

            <Route
              path="/manage-jobs"
              element={
                <ProtectedRoute>
                  <ManageJobs />
                </ProtectedRoute>
              }
            />

            <Route
              path="/applicants"
              element={
                <ProtectedRoute>
                  <Applicants />
                </ProtectedRoute>
              }
            />

            <Route
              path="/recruiter/view-candidate/:id"
              element={
                <ProtectedRoute>
                  <RecruiterViewCandidate />
                </ProtectedRoute>
              }
            />

<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute role="ADMIN">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute>
                  <AdminManageUsers />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/manage-jobs"
              element={
                <ProtectedRoute>
                  <AdminManageJobs />
                </ProtectedRoute>
              }
            />
            <Route
  path="/recruiter/change-password"
  element={<RecruiterChangePassword />}
/>
<Route
  path="/admin/change-password"
  element={
    <ProtectedRoute>
      <AdminChangePassword />
    </ProtectedRoute>
  }
/>
          </Routes>

        </main>

        <Footer />

      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

    </BrowserRouter>

  );
}

export default App;