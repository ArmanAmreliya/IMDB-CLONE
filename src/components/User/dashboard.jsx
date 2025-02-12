import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";


const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;