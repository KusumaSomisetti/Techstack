import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; // <-- new
import Flashcards from "./pages/Flashcards";
import TopicFlashcards from './pages/TopicFlashcards';
import TopicHome from "./pages/TopicHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* <-- new */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/topics/:topicName" element={<TopicFlashcards />} />
        <Route path="/topic-home" element={<TopicHome />} />
      </Routes>
    </Router>
  );
}

export default App;
