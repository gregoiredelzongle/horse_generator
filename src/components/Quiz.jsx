import React from 'react';

function Quiz({ question, questionNumber, totalQuestions, onAnswer }) {
  const handleAnswerClick = (answerScores) => {
    onAnswer(answerScores);
  };

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        ></div>
      </div>
      
      <div className="question-counter">
        Question {questionNumber} sur {totalQuestions}
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers-grid">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button image-answer"
            onClick={() => handleAnswerClick(answer.scores)}
          >
            <div className="answer-image-container">
              <img 
                src={answer.image} 
                alt={answer.text}
                className="answer-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder">
                <span className="placeholder-text">Image placeholder</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
