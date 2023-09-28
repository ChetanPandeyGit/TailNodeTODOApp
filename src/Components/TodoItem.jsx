import React from 'react';

function TodoItem({ todo, completeTodo }) {
  // Function to handle marking a TODO as complete
  const handleComplete = () => {
    completeTodo(todo.timestamp);
  };

  return (
    <div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={handleComplete}
    >
      <span className={todo.completed ? 'completed-todo' : ''} >
        {todo.text}
      </span>
    </div>
  );
}

export default TodoItem;
