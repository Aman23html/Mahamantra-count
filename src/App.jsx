import React, { useState, useEffect } from 'react';
import Button from './component/Button.jsx';
import QuoteDisplay from './component/QuoteDisplay.jsx';
import ImageGallery from './component/ImageGallery.jsx';
import InfoSection from './component/InfoSection.jsx';
import './App.css';

function App() {
  const CHANT_TARGET = 108;

  const [chantCount, setChantCount] = useState(() => {
    const saved = localStorage.getItem('chantCount');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [currentQuote, setCurrentQuote] = useState(null);

  const quotes = [
    {
      text: "Always think of Me, become My devotee, worship Me, and offer Your homage unto Me. Thus You will come to Me without fail. I promise you this because you are My very dear friend.",
      source: "Bhagavad-gita 18.65"
    },
    {
      text: "For one who has taken birth, death is certain; and for one who is dead, birth is certain. Therefore, you should not lament for the inevitable.",
      source: "Bhagavad-gita 2.27"
    },
    {
      text: "The sound of the holy name of the Lord is as potent as the Lord Himself.",
      source: "Srila Prabhupada"
    },
    {
      text: "By chanting the holy name of the Lord, one immediately comes to the platform of understanding the transcendental nature of the Lord.",
      source: "Srimad-Bhagavatam 1.1.10, Purport"
    }
  ];

  const images = [
    {
      src: "RM.png",
      alt: "Sri Sri Radha Madhava Deities, Mayapur"
    },
    {
      src: "P.png",
      alt: "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada"
    },
    {
      src: "IT.png",
      alt: "ISKCON Temple, Bangalore"
    }
  ];

  const iskconPrinciples = [
    "Chanting the Hare Krishna Maha-mantra (16 rounds daily recommended).",
    "Reading scriptures like Bhagavad-gita and Srimad-Bhagavatam.",
    "Following four regulative principles (no meat-eating, no illicit sex, no gambling, no intoxication).",
    "Engaging in devotional service (bhakti-yoga) for Krishna's pleasure.",
    "Honoring Prasadam (sanctified food offered to Krishna)."
  ];

  // Save chant count to localStorage
  useEffect(() => {
    localStorage.setItem('chantCount', chantCount.toString());
  }, [chantCount]);

  // Set a random quote on first render
  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const handleChantClick = () => {
    setChantCount(prev => Math.min(prev + 1, CHANT_TARGET));
  };

  const decreaseChant = () => {
    setChantCount(prev => Math.max(0, prev - 1));
  };

  const resetChant = () => {
    setChantCount(0);
  };

  const isTargetMet = chantCount >= CHANT_TARGET;

  return (
    <div className="app-container">
      <header>
        <h1> 🛕 ISKCON Inspired Devotional App 🛕 </h1>
      </header>

      {/* Chanting Section */}
      <section className="section chanting-section">
        <h2>Japa Counter</h2>
        <p>Beads chanted: <span className="chant-count">{chantCount}</span> / {CHANT_TARGET}</p>

        <div className="button-group">
          <Button className="button" hc={handleChantClick} text="Chant (1 Bead)" />
          <Button className="button" hc={decreaseChant} text="Decrease" />
          <Button className="button" hc={resetChant} text="Reset" />
        </div>

        {isTargetMet && (
          <p className="chant-complete-message">
            🌟 You completed {CHANT_TARGET} beads today! Keep going! Hare Krishna! 🌟
          </p>
        )}
      </section>

      {/* Quote Section */}
      <section className="section quote-section">
        <h2>📖 Daily Divine Wisdom</h2>
        {currentQuote && (
          <QuoteDisplay quote={currentQuote.text} source={currentQuote.source} />
        )}
        <div className="button-group">
          <Button className="button" hc={getNewQuote} text="New Quote" />
        </div>
      </section>

      {/* Optional Image Gallery */}
      {/* <ImageGallery images={images} /> */}

      {/* Optional Info Section */}
      {/* <InfoSection principles={iskconPrinciples} /> */}

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} ISKCON Inspired App. All rights reserved. Hare Krishna!</p>
      </footer>
    </div>
  );
}

export default App;
