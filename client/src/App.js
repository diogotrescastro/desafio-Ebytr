import './App.css';
import { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from './services/todoAPI';
import Task from './components/task';

function App() {
  const [todos, setTodos] = useState([]);

  function setTodosFromAPI() {
    getTodos().then(todos => {
      setTodos(todos);
    });
  }

  function addNewTodo(todo) {
    addTodo().then(() => setTodosFromAPI())
  }

  function updatedTodo(todo) {
    updateTodo(todo, setTodosFromAPI).then(console.log("foi"))
  }

  function deletedTodo(todo) {
    deleteTodo(todo , setTodosFromAPI).then(console.log("foi del"))
  }

  useEffect(() => {
    setTodosFromAPI();
  }, []);

  return (
    <div className="App">
       <h1> Lista de Tarefas </h1>
       <div className="filters">
         <button>Todas Tarefas</button>
         <button>Pendentes</button>
         <button>Em Andamento</button>
         <button>Prontas</button>
       </div>
       {todos.map((todo) => {
         return (
           <Task
              key={todo._id}
              task = {todo}
              updated = {updatedTodo}
              deleted = {deletedTodo}
              />
         )
       })}
       <div className="newtodo">
          <button onClick={addNewTodo}>Adicionar</button>
       </div>
    </div>
  );
}

export default App;
