import React from 'react';
import './QuoteDisplay.css'; // Create this CSS file

function QuoteDisplay({ quote, source }) {
  return (
    <div className="quote-display">
      <p className="quote-text">"{quote}"</p>
      {source && <p className="quote-source">- {source}</p>}
    </div>
  );
}

export default QuoteDisplay;