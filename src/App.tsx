import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [randomFact, setRandomFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Generate 1000 simple facts
    const generateFacts = () => {
      const simpleFacts = [
        "Water boils at 100 degrees Celsius at sea level.",
        "The Earth revolves around the Sun.",
        "There are 24 hours in a day.",
        "Humans have 206 bones in their body.",
        "The Moon orbits the Earth.",
        "Oxygen is necessary for human survival.",
        "The heart pumps blood throughout the body.",
        "Plants produce oxygen through photosynthesis.",
        "The Earth has one natural satellite, the Moon.",
        "A year has 365 days (366 in a leap year).",
        "The Sun is a star.",
        "Diamonds are made of carbon.",
        "Sound cannot travel through a vacuum.",
        "The human body is about 60% water.",
        "Gold is a chemical element with the symbol Au.",
        "The speed of light is approximately 299,792,458 meters per second.",
        "The Earth's atmosphere is primarily composed of nitrogen.",
        "DNA carries genetic information.",
        "The Amazon is the world's largest rainforest.",
        "Mount Everest is the highest mountain on Earth.",
      ];

      const generatedFacts: string[] = [];
      for (let i = 0; i < 1000; i++) {
        const randomIndex = Math.floor(Math.random() * simpleFacts.length);
        generatedFacts.push(`${i + 1}. ${simpleFacts[randomIndex]}`);
      }
      
      return generatedFacts;
    };

    const allFacts = generateFacts();
    setFacts(allFacts);
    getRandomFact(allFacts);
    setLoading(false);
  }, []);

  const getRandomFact = (factList: string[] = facts) => {
    if (factList.length > 0) {
      const randomIndex = Math.floor(Math.random() * factList.length);
      setRandomFact(factList[randomIndex]);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Random Fact Generator</h1>
      
      {loading ? (
        <p>Loading facts...</p>
      ) : (
        <div style={{ 
          padding: '20px',
          border: '1px solid #ccc', 
          borderRadius: '5px',
          marginBottom: '20px',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9f9f9'
        }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{randomFact}</p>
        </div>
      )}
      
      <button 
        onClick={() => getRandomFact()} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Get Random Fact
      </button>
      
      <div style={{ 
        marginTop: '30px',
        textAlign: 'left'
      }}>
        <h3>All Facts (1000)</h3>
        <div style={{ 
          height: '300px', 
          overflowY: 'auto', 
          border: '1px solid #ccc', 
          padding: '10px',
          borderRadius: '5px'
        }}>
          {facts.map((fact, index) => (
            <p key={index} style={{ margin: '8px 0', fontSize: '14px' }}>
              {fact}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;