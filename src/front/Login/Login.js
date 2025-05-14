import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure this file exists and contains your styles

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student", // Default role
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Login successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        const { role, subject, hasCourse } = data.user;

        if (role === "teacher") {
          const subjectCode = subject?.code;
          if (hasCourse) {
            // Teacher has an existing course
            navigate(`/teacher/subject/${subjectCode}`);
          } else {
            // Teacher needs to create a course
            navigate(`/teacher/subject/${subjectCode}/create`);
          }
        } else if (role === "student") {
          // Redirect student to their schedule
          navigate("/student/courses");
        }
      } else {
        setError(data.msg || "Login failed! Try again.");
      }
    } catch (err) {
      setError("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="Login">
      <div className="Login-header">FernandoX. Training Platform</div>
      <div className="Login-form">
        <div className="Login-form-header">Login</div>
        <p>
          Partners should not use the sign-up form below. Please access the
          Training Institute via FernandoX.
        </p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="Login-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
