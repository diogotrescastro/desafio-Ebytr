import './App.css';
import { useState, useEffect } from 'react';
import { getTodos} from './services/todoAPI';
import Form from './components/Form'
import Task from './components/Task'

function App() {
  const [todos, setTodos] = useState([]);
  const [filtereds, setFiltereds] = useState(null);

  function setTodosFromAPI() {
    getTodos().then(todos => {
      setTodos(todos);
    });
  }

  useEffect(() => {
    setTodosFromAPI();
  }, []);

  function filterTodos(type) {
    if (type === 'all') {
      return todos
    }
    return setFiltereds(todos.filter(todo => todo.status === type));
  }
  const todoList = filtereds ? filtereds : todos; 

  

  return (
    <div className="App">
       <h1> Lista de Tarefas </h1>
       <div className="filters">
         <button onClick={() => filterTodos('all')}>Todas Tarefas</button>
         <button onClick={() => filterTodos('pending')}>Pendentes</button>
         <button onClick={() => filterTodos('progress')}>Em Andamento</button>
         <button onClick={() => filterTodos('completed')}>Prontas</button>
       </div>
       {todoList.map((todo) => {
         console.log(todo._id.toString())
         return (
           <Task
              key={todo._id.toString()}
              task = {todo}
              getTodos = {setTodosFromAPI}
              />
         )
       })}
       <br/>
       <br/>
       <br/>
        <Form 
        getTodos= {setTodosFromAPI}
        />  
    </div>
  );
}

export default App;
