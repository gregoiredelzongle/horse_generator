import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Results from './components/Results';
import quizData from './data/quizData.json';

function App() {
  const [gameState, setGameState] = useState('welcome'); // 'welcome', 'quiz', 'results'
  const [scores, setScores] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const startQuiz = () => {
    setGameState('quiz');
    setScores({});
    setCurrentQuestion(0);
  };

  const handleAnswer = (answerScores) => {
    // Add answer scores to total scores
    const newScores = { ...scores };
    Object.entries(answerScores).forEach(([horseId, points]) => {
      newScores[horseId] = (newScores[horseId] || 0) + points;
    });
    setScores(newScores);

    // Move to next question or results
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameState('results');
    }
  };

  const getResultHorse = () => {
    // Find horse with highest score
    let maxScore = 0;
    let resultHorse = quizData.horses[0];
    
    Object.entries(scores).forEach(([horseId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        resultHorse = quizData.horses.find(h => h.id === horseId);
      }
    });

    return resultHorse;
  };

  return (
    <div className="App">
      <div className="container">
        {gameState === 'welcome' && (
          <div className="welcome-screen">
            <div className="welcome-image-placeholder">
              <img 
                src="images/welcome.jpg" 
                alt="Welcome"
                className="welcome-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="welcome-placeholder-text">Image placeholder</div>
            </div>
            <h1 className="main-title">Bienvenue en 2026</h1>
            <h2 className="subtitle">L'Année du Cheval</h2>
            <p className="welcome-text">
              Découvre ta personnalité de cheval ! Réponds à quelques questions et découvre quel 
              magnifique esprit équin correspond à ton âme alors que nous galopons vers la nouvelle année.
            </p>
            <button className="start-button" onClick={startQuiz}>
              Commencer le Quiz
            </button>
          </div>
        )}

        {gameState === 'quiz' && (
          <Quiz
            question={quizData.questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={quizData.questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {gameState === 'results' && (
          <Results
            horse={getResultHorse()}
            onRestart={startQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
