import React, { useEffect, useState, useCallback } from 'react';
import './ConstructionScreen.css';

const ConstructionScreen = ({ loop = true, delayBetweenLoops = 2000 }) => {
  const [codeLines, setCodeLines] = useState([]);
  const [completed, setCompleted] = useState(false);

  const codeSnippets = [
    '<body>',
    '  <div className="construction-container">',
    '    <h1>',
    '       🚧 Página en Construcción 🚧',
    '    </h1>',
    '    <p>',
    '       Estamos trabajando duro para traerte algo increíble',
    '    </p>',
    '    <p>',
    '       Vuelve pronto!',
    '    </p>',
    '  </div>',
    '</body>',
  ];

  const restartAnimation = useCallback(() => {
    setCodeLines([]);
    setCompleted(false);
  }, []);

  useEffect(() => {
    let timer;
    let timeout;

    const startTyping = () => {
      timer = setInterval(() => {
        if (codeLines.length < codeSnippets.length) {
          setCodeLines(prev => [...prev, codeSnippets[prev.length]]);
        } else {
          clearInterval(timer);
          setCompleted(true);
          
          if (loop) {
            timeout = setTimeout(() => {
              restartAnimation();
            }, delayBetweenLoops);
          }
        }
      }, 600);
    };

    startTyping();

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [codeLines, loop, delayBetweenLoops, restartAnimation]);

  return (
    <div className="computer-screen">
      <div className="screen" 
           style={{ 
            width: '700px', 
            minWidth: '700px', 
            maxWidth: '700px', 
            height: '440px', 
            minHeight: '440px', 
            maxHeight: '440px', 
            boxSizing: 'border-box' }}>
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
            <div key={index} className="code-line" style={{ 
              color: index % 3 === 0 && index !== 0 && index < 10 ? '#e830ce' : '#2ef8a0', 
              fontFamily: 'monospace', 
              fontSize: '15px' 
            }}>
              <span className="line-number">{index + 1}</span>
              <span className="code" style={{ whiteSpace: 'pre' }}>{line}</span>
            </div>
          ))}
          {!completed && <div className="cursor">|</div>}
          {completed && (
            <div className="construction-message">
              <p style={{ 
                color: '#00fff6', 
                fontFamily: 'monospace', 
                fontSize: '15px' 
              }}>
                🚧 Estamos trabajando duro para traerte algo increíble 🚧
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionScreen;