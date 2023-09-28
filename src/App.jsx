import React, { useEffect, useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import ResetButton from './Components/ResetButton';
import './App.css'

function App() {
  
  // Use localStorage to save and retrieve todos
  useEffect(() => {
   const storedTodos = JSON.parse(localStorage.getItem('todos'));
   if (storedTodos) {
     setTodos(storedTodos);
   }
 }, []);

  const [todos, setTodos] = useState([]);
   
  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      timestamp: Date.now(),
    };
    setTodos([newTodo, ...todos]);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // Function to mark a todo as completed and reorder the list
  const completeTodo = (timestamp) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.timestamp === timestamp) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    
    // Move completed todos to the bottom by sorting
    updatedTodos.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // Function to reset todos
  const resetTodos = () => {
    setTodos([]);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <div className="app">
      <div className="header">
        <h1>TODO APP</h1>
        <ResetButton resetTodos={resetTodos} />
        </div>      
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />      
    </div>
  );
}

export default App;
