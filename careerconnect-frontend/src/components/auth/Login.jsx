import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      "http://localhost:9091/api/auth/login",
      loginData
    );

    const user = response.data;

    console.log("FULL RESPONSE:", response);
    console.log("USER OBJECT:", user);
    console.log("ROLE:", user?.role);
    console.log("ID:", user?.id);


if (!user || !user.id) {
  toast.error("Invalid Email or Password");
  return;
}
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    console.log(
      "Saved User:",
      JSON.parse(localStorage.getItem("user"))
    );
    toast.success( "Welcome " + user.fullName + " 🎉" );
    if (user.role === "ADMIN") {

      navigate("/admin/dashboard");

    }
    else if (user.role === "RECRUITER") {

      navigate("/recruiter");

    }
    else if (user.role === "CANDIDATE") {

      navigate("/candidate");

    }
    else {

toast.warning("Role not found: " + user.role);
    }

  } catch (error) {

    console.error(error);

    if (error.response) {

      console.log(
        "Backend Response:",
        error.response.data
      );

    }

toast.error("Login Failed ❌");
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
          width: "420px",
          background: "#1E293B",
          border: "1px solid #334155",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-4">

          <h2 className="text-center text-white mb-4">
            Welcome Back 👋
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label text-light">
                Email
              </label>

              <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                name="email"
                value={loginData.email}
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
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
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

            <button
              className="btn btn-primary w-100 py-2 fw-bold"
              type="submit"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-4 text-secondary">

            Don't have an account?

            <Link
              to="/register"
              className="ms-2 text-decoration-none"
            >
              Register
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;