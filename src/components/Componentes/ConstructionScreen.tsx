import React, { useEffect, useState } from 'react';
import './ConstructionScreen.css';

const ConstructionScreen = () => {
  const [codeLines, setCodeLines] = useState([]);
  const [completed, setCompleted] = useState(false);

  const codeSnippets = [
    '<body>',
    '  <div className="construction-container">',
    '    <h1>🚧 Página en Construcción 🚧</h1>',
    '    <p>Estamos trabajando duro para traerte algo increíble</p>',
    '    <p>Vuelve pronto!</p>',
    '  </div>',
    '</body>',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (codeLines.length < codeSnippets.length) {
        setCodeLines(prev => [...prev, codeSnippets[prev.length]]);
      } else {
        clearInterval(timer);
        setCompleted(true);
      }
    }, 600);

    return () => clearInterval(timer);
  }, [codeLines]);

  return (
    <div className="computer-screen" style={{ width: '700px' }}>
      <div className="screen">
        <div className="screen-header">
        <div className="buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="title">index.html - Visual Studio Code</div>
        </div>
        <div className="code-area">
        {codeLines.map((line, index) => (
          <div key={index} className="code-line">
          <span className="line-number">{index + 1}</span>
          <span className="code">{line}</span>
          </div>
        ))}
        {!completed && <div className="cursor">|</div>}
        {completed && (
          <div className="construction-message">
          <p>🚧 Estamos trabajando duro para traerte algo increíble 🚧</p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionScreen;