import React, { useState, useEffect } from "react";
import api from "../api";
import "./Flashcards.css";

const Flashcards = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [form, setForm] = useState({ question: "", answer: "", tag: "" });

  // Fetch flashcards on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/flashcards");
        setFlashcards(res.data);
      } catch (err) {
        console.error("Error fetching flashcards", err);
      }
    };
    fetchData();
  }, []);

  // Handle create flashcard
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await api.post("/flashcards", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlashcards([...flashcards, res.data]);
      setForm({ question: "", answer: "", tag: "" });
    } catch (err) {
      alert("Failed to create flashcard");
    }
  };

  return (
    <div className="flashcard-container">
      <h2>Create a Flashcard</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <input
          type="text"
          placeholder="Question"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Answer"
          value={form.answer}
          onChange={(e) => setForm({ ...form, answer: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tag (e.g. React, Node)"
          value={form.tag}
          onChange={(e) => setForm({ ...form, tag: e.target.value })}
        />
        <button type="submit">Add Flashcard</button>
      </form>

      <h3>Your Flashcards</h3>
      <div className="flashcards-list">
        {flashcards.map((fc) => (
          <div key={fc._id} className="flashcard">
            <strong>{fc.tag}</strong>
            <p><b>Q:</b> {fc.question}</p>
            <p><b>A:</b> {fc.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
