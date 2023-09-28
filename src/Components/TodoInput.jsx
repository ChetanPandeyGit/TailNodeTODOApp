import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [inputText, setInputText] = useState('');

  // Function to handle user input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle key press (Enter key)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputText.trim() !== '') {
      // Call the addTodo function from props to add the new TODO
      addTodo(inputText.trim());

      // Clear the input field
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new TODO"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default TodoInput;
