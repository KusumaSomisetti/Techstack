import React from "react";
import { useNavigate } from "react-router-dom";
import './TopicHome.css';

const topics = [
  { name: "react", image: "/images/react.png" },
  { name: "node", image: "/images/node.png" },
  { name: "html", image: "/images/html.png" },
  { name: "css", image: "/images/css.png" },
  { name: "javascript", image: "/images/js.png" },
  { name: "python", image: "/images/python.png" },
  { name: "machinelearning", image: "/images/machinelearning.png" },
  { name: "deeplearning", image: "/images/deeplearning.png" },
];

const TopicHome = () => {
  const navigate = useNavigate();

  return (
  <div style={{ padding: "2rem" }}>
    {/* Header Section */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "2rem",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Go to Main
      </button>

      <h1 style={{ fontSize: "2.5rem", color: "#007bff", margin: 0, flexGrow: 1, textAlign: "center" }}>
        Interview Prep !!
      </h1>

      {/* Invisible div for alignment */}
      <div style={{ width: "105px" }}></div>
    </div>

    {/* Topic Cards Section */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {topics.map((topic) => (
        <div
          key={topic.name}
          onClick={() => navigate(`/topics/${topic.name}`)}
          style={{
            width: "180px",
            height: "180px",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={topic.image}
            alt={topic.name}
            style={{ width: "60px", height: "60px", marginBottom: "0.5rem" }}
          />
          <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            {topic.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);
}

export default TopicHome;
