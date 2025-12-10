import { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);

    };
  }, [])

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div>
      {isVisible && (
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {formattedTime}
        </p>
      )}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide❕" : "Show❕"}
      </button>
    </div>
  );
}

export default App;