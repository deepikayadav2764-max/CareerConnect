import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import RecruiterSidebar from "../common/RecruiterSidebar";

function AdminChangePassword() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {

    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {

      toast.error(
        "New Password and Confirm Password do not match ❌"
      );

      return;
    }

    try {

      await axios.put(
        "http://localhost:9091/api/users/change-password/" +
        user.id,
        {
          oldPassword:
            passwordData.oldPassword,
          newPassword:
            passwordData.newPassword
        }
      );

      toast.success(
        "Password Updated Successfully ✅"
      );

      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to Update Password ❌"
      );

    }

  };

  return (

    <div className="d-flex">

      <RecruiterSidebar />

      <div className="dashboard-content">

        <div className="topbar">

          <h2>Change Password</h2>

          <p className="text-secondary">
            Update your recruiter account password
          </p>

        </div>

        <div
          className="profile-card"
          style={{ maxWidth: "600px" }}
        >

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label text-light">
                Current Password
              </label>

              <input
                type="password"
                className="form-control"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label text-light">
                New Password
              </label>

              <input
                type="password"
                className="form-control"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handleChange}
                required
              />

            </div>

            <div className="mb-4">

              <label className="form-label text-light">
                Confirm Password
              </label>

              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Update Password
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AdminChangePassword;