import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CANDIDATE",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:9091/api/auth/register",
        {
          fullName: user.fullName,
          email: user.email,
          password: user.password,
          role: user.role,
        }
      );

      console.log(response.data);

      alert(
        `Registration Successful as ${user.role}`
      );

      setUser({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "CANDIDATE",
      });

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert("Registration Failed");

    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#0F172A",
      }}
    >
      <div
        className="card"
        style={{
          width: "550px",
          maxWidth: "95%",
          background: "#1E293B",
          border: "1px solid #334155",
          borderRadius: "20px",
          boxShadow:
            "0 15px 40px rgba(99,102,241,0.25)",
        }}
      >
        <div className="card-body p-4">

          <h2 className="text-center text-white mb-2">
            Create Account 🚀
          </h2>

          <p className="text-center text-secondary mb-4">
            Join CareerConnect today
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label text-light">
                Full Name
              </label>

              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label text-light">
                Email
              </label>

              <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label text-light">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control bg-dark text-white border-secondary"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Create password"
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label text-light">
                Confirm Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                className="form-control bg-dark text-white border-secondary"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
              />

              {user.confirmPassword &&
                user.password !== user.confirmPassword && (
                  <small className="text-danger">
                    Passwords do not match
                  </small>
                )}

            </div>

            <div className="form-check mb-3">

              <input
                className="form-check-input"
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() =>
                  setShowPassword(!showPassword)
                }
              />

              <label
                className="form-check-label text-light"
                htmlFor="showPassword"
              >
                Show Password
              </label>

            </div>

            <div className="mb-4">

              <label className="form-label text-light">
                Register As
              </label>

              <select
                className="form-select bg-dark text-white border-secondary"
                name="role"
                value={user.role}
                onChange={handleChange}
              >
                <option value="CANDIDATE">
                  👨‍🎓 Candidate
                </option>

                <option value="RECRUITER">
                  🏢 Recruiter
                </option>
              </select>

            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-bold"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-4 text-secondary">

            Already have an account?

            <Link
              to="/login"
              className="ms-2 text-decoration-none"
            >
              Login
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;