import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/api/v1/register/student", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            
            if (response.ok) {
                setSuccess(data.msg); // Show success message
                setError(null); // Clear error
                setFormData({ 
                    name: "", 
                    email: "", 
                    password: "", 
                    confirmPassword: "" 
                }); // Reset form
                
            } else {
                setError(data.msg || "Registration failed!");
            }
        } catch (err) {
            setError("Something went wrong! Please try again.");
        }
    };

    return (
        <div className="Register">
            <div className="Register-header">FernandoX. Training Platform</div>
            <div className="Register-form">
                <div className="Register-form-header">New Account</div>
                <p>Partners should not use the sign-up form below. Please access the Training Institute via FernandoX.</p>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}

                <form onSubmit={handleSubmit} className="Register-form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
