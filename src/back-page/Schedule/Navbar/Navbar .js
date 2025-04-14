import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">MyLMS</span>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Courses</a>
        </div>
      </div>

      <div className="nav-right">
        <img
          src="/student-avatar.png"
          alt="Student"
          className="avatar"
          onClick={toggleProfile}
        />
        {profileOpen && (
          <div className="profile-dropdown">
            <a href="#">👤 Profile</a>
            <a href="#">⚙️ Settings</a>
            <a href="#">📅 Calendar</a>
            <a href="#">💬 Messages</a>
            <a href="#" className="logout">🚪 Logout</a>
          </div>
        )}
        <div className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}
