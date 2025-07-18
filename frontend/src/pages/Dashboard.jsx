// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const topics = ['React', 'Node.js', 'HTML', 'CSS', 'MongoDB'];

function Dashboard() {
  const navigate = useNavigate();

  const handleClick = (topic) => {
    navigate(`/topics/${topic.toLowerCase()}`);
  };

  return (
    <div className="dashboard-container">
      <h2>Select a Topic</h2>
      <div className="topic-grid">
        {topics.map((topic) => (
          <div className="topic-card" key={topic} onClick={() => handleClick(topic)}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
