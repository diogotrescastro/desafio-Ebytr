import './App.css';
import { useState, useEffect } from 'react';
import { getTodos, addTodo } from './services/todoAPI';
import Task from './components/task';

function App() {
  const [todos, setTodos] = useState([]);

  function setTodosFromAPI() {
    getTodos().then(todos => {
      setTodos(todos);
    });
  }

  function addNewTodo() {
    addTodo().then(setTodosFromAPI())
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
              task = {todo} />
         )
       })}
       <div className="newtodo">
          <input type="text" placeholder="Nova Tarefa" />
          <input type="text" placeholder="Descrição" />
          <button onClick={addNewTodo}>Adicionar</button>
       </div>
    </div>
  );
}

export default App;
