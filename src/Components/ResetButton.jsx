import React from 'react';

function ResetButton({ resetTodos }) {
  // Function to handle resetting todos
  const handleReset = () => {
    resetTodos();
  };

  return (
    <button onClick={handleReset} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;
