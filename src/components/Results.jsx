import React from 'react';

function Results({ horse, onRestart }) {
  return (
    <div className="results-container">
      <h1 className="results-title">Ton Esprit Cheval pour 2026</h1>
      
      <div className="horse-card">
        <div 
          className="horse-image-placeholder"
        >
          <div className="image-text">
            {/* Placeholder for horse image */}
            <p>Image: {horse.image}</p>
          </div>
        </div>
        
        <h2 className="horse-name">
          {horse.name}
        </h2>
        
        <p className="horse-description">
          {horse.description}
        </p>

        <div className="traits-container">
          <h3>Tes Traits :</h3>
          <div className="traits-list">
            {horse.traits.map((trait, index) => (
              <span key={index} className="trait-badge">
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="share-section">
        <p className="share-text">Partage ton résultat et célèbre l'Année du Cheval</p>
        <button className="restart-button" onClick={onRestart}>
          Refaire le Quiz
        </button>
      </div>
    </div>
  );
}

export default Results;
