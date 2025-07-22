import React from 'react';
import './InfoSection.css'; // Create this CSS file

function InfoSection({ title, items, children }) {
  return (
    <div className="info-section-component">
      <h3>{title}</h3>
      {items && items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {children} {/* Allows for passing free-form content */}
    </div>
  );
}

export default InfoSection;