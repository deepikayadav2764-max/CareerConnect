import { useState } from "react";
import axios from "axios";
import Sidebar from "../common/Sidebar";

function Profile() {

  const storedUser = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [user, setUser] = useState({
    ...storedUser,
    phone: storedUser.phone || "",
    location: storedUser.location || "",
    about: storedUser.about || "",
    skills: storedUser.skills || "",
    profilePhoto: storedUser.profilePhoto || "",
    resume: storedUser.resume || ""
  });

  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {

      let photoPath = user.profilePhoto;
      let resumePath = user.resume;

      if (photo) {

        const photoData = new FormData();

        photoData.append(
          "file",
          photo
        );

        const photoResponse =
          await axios.post(
            "http://localhost:9091/api/upload/photo",
            photoData
          );

        photoPath = photoResponse.data;
      }

      if (resume) {

        const resumeData = new FormData();

        resumeData.append(
          "file",
          resume
        );

        const resumeResponse =
          await axios.post(
            "http://localhost:9091/api/upload/resume",
            resumeData
          );

        resumePath = resumeResponse.data;
      }

      const updatedUser = {
        ...user,
        profilePhoto: photoPath,
        resume: resumePath
      };

      const response = await axios.put(
        "http://localhost:9091/api/users/" + user.id,
        updatedUser
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      setUser(response.data);

      alert("Profile Updated Successfully ✅");

    } catch (error) {

      console.error(error);

      alert("Failed to Update Profile");

    }
  };

  return (
    <div className="d-flex">

      <Sidebar />

      <div className="dashboard-content">

        <div className="topbar">
          <h2>My Profile</h2>

          <p className="text-secondary">
            Manage your personal information
          </p>
        </div>

        <div className="profile-card p-4">

          <div className="text-center mb-4">

            <img
              src={
                user.profilePhoto
                  ? "http://localhost:9091/" + user.profilePhoto
                  : "https://i.pravatar.cc/150"
              }
              alt="profile"
              className="profile-avatar"
            />

            <h3 className="mt-3">
              {user.fullName}
            </h3>

            <p className="text-secondary">
              {user.role}
            </p>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                name="fullName"
                value={user.fullName || ""}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Phone
              </label>

              <input
                type="text"
                className="form-control"
                name="phone"
                value={user.phone || ""}
                onChange={handleChange}
              />

            </div>

            <div className="col-md-6 mb-3">

              <label className="form-label">
                Location
              </label>

              <input
                type="text"
                className="form-control"
                name="location"
                value={user.location || ""}
                onChange={handleChange}
              />

            </div>

          </div>

          <div className="mb-3">

            <label className="form-label">
              About Me
            </label>

            <textarea
              className="form-control"
              rows="4"
              name="about"
              value={user.about || ""}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Skills
            </label>

            <input
              type="text"
              className="form-control"
              name="skills"
              value={user.skills || ""}
              onChange={handleChange}
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Upload Profile Photo
            </label>

            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) =>
                setPhoto(e.target.files[0])
              }
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Upload Resume (PDF)
            </label>

            <input
              type="file"
              className="form-control"
              accept=".pdf"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
            />

          </div>

          {user.resume && (

            <div className="mb-3">

              <a
                href={
                  "http://localhost:9091/" +
                  user.resume
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Resume
              </a>

            </div>

          )}

          <button
            className="btn btn-success"
            onClick={handleSave}
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;