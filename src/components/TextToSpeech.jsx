import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function TextToSpeech() {
  const [text, setText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    if (text.trim() !== '') {
      speak({ text });
    }
  };

  return (
    <div className="center-container">
    <h1>Hey Siri</h1>
    <textarea
      placeholder="Enter text to be spoken..."
      value={text}
      onChange={handleInputChange}
    />
    <button onClick={handleSpeak}>Speak</button>
  </div>
  );
}

export default TextToSpeech;
