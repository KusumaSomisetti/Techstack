import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; 
import './TopicFlashcards.css';

// Import all topics' JSON data
import reactQuestions from '../data/react_questions.json';
import pythonQuestions from '../data/python_questions.json';
import javascriptQuestions from '../data/javascript_questions.json';
import htmlQuestions from '../data/html_questions.json';
import cssQuestions from '../data/css_questions.json';
import nodeQuestions from '../data/node_questions.json';
import machinelearningQuestions from '../data/machinelearning_questions.json';
import deeplearningQuestions from '../data/deeplearning_questions.json';

function TopicFlashcards() {
  const { topicName } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [quizMode, setQuizMode] = useState(false);
  const [visibleAnswers, setVisibleAnswers] = useState({});

  useEffect(() => {
    // Mapping topic names to imported question sets
    const topicMap = {
      react: reactQuestions,
      python: pythonQuestions,
      javascript: javascriptQuestions,
      html: htmlQuestions,
      css: cssQuestions,
      node: nodeQuestions,
      machinelearning: machinelearningQuestions,
      deeplearning: deeplearningQuestions,
    };

    // Set flashcards for the selected topic
    if (topicMap[topicName]) {
      setFlashcards(topicMap[topicName]);
    } else {
      setFlashcards([]);
    }

    // Reset visibility state when topic changes
    setVisibleAnswers({});
  }, [topicName]);

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="topic-flashcards-container">
        <Navbar />
      <div className="header">
        <h2>{topicName.toUpperCase()} Interview Questions</h2>
        <button className="quiz-button" onClick={() => setQuizMode(!quizMode)}>
          {quizMode ? 'Show All Answers' : 'Quiz Me'}
        </button>
      </div>

      {flashcards.length === 0 ? (
        <p className="no-cards">No flashcards available for this topic yet.</p>
      ) : (
        <div className="flashcard-grid">
          {flashcards.map((card, index) => (
            <div className="flashcard" key={index}>
              <h4 className="question">Q: {card.question}</h4>
              {quizMode ? (
                visibleAnswers[index] && (
                  <p className="answer"><strong>A:</strong> {card.answer}</p>
                )
              ) : (
                <p className="answer"><strong>A:</strong> {card.answer}</p>
              )}
              {quizMode && (
                <button className="reveal-btn" onClick={() => toggleAnswer(index)}>
                  {visibleAnswers[index] ? 'Hide Answer' : 'Show Answer'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopicFlashcards;
