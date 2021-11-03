import './App.css';
import { useState, useEffect } from 'react';
import { getTodos} from './services/todoAPI';
import Form from './components/Form'
import Task from './components/Task'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState();

  function setTodosFromAPI() {
    getTodos().then(todos => {
      setTodos(todos);
      
    });
  }

  useEffect(() => {
    setTodosFromAPI();
  }, []);

  const filteredTodos = filter? todos.filter(todo => todo.status === filter) : todos;



  return (
    <div className="App">
       <h1> Lista de Tarefas </h1>
       <div className="filters">
         <button onClick={() => setFilter()}>Todas Tarefas</button>
         <button onClick={() => setFilter('pending')}>Pendentes</button>
         <button onClick={() => setFilter('progress')}>Em Andamento</button>
         <button onClick={() => setFilter('completed')}>Prontas</button>
       </div>
       {filteredTodos.map((todo) => {
         return (
           <div key={todo._id}>
           <Task
              task = {todo}
              getTodos = {setTodosFromAPI}
              />
              </div>
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
