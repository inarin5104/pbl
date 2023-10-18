// components/TextInput.js

import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleInputChange}
      placeholder="Enter text"
    />
  );
};

export default TextInput;
