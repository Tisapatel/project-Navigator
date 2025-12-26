import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import logo from "../../../assets/images/logo.png";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    let users = JSON.parse(localStorage.getItem("userData")) || [];
    if (!Array.isArray(users)) users = [users];
    users.push(form);
    localStorage.setItem("userData", JSON.stringify(users));
    alert("User Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <div className="decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="auth-card shadow-lg p-4 bg-white rounded">
        <div className="text-center mb-4">
          <img src={logo} width="60" alt="logo" />
          <h3 className="mt-2 fw-bold">Create Account</h3>
          <p className="text-muted">Please fill the details to register</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <label className="form-label fw-semibold">Full Name</label>
          <div className="input-group mb-3">
            <span className="input-group-text bg-white">
              <FaUser />
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <label className="form-label fw-semibold">Email</label>
          <div className="input-group mb-3">
            <span className="input-group-text bg-white">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <label className="form-label fw-semibold">Password</label>
          <div className="input-group mb-3">
            <span className="input-group-text bg-white">
              <FaLock />
            </span>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter Password"
            />
            <span
              className="input-group-text bg-white"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button type="submit" className="auth-btn w-100 py-2 mt-2">
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "500" }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;