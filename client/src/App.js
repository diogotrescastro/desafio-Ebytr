import './App.css';
import { useState, useEffect } from 'react';
import { getTodos, getTodosSortedByRecents, getTodosSortedByAz, getTodosSortedByZa} from './services/todoAPI';
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

  function setTodosSortRecents() {
    getTodosSortedByRecents().then(todos => {
      setTodos(todos);
    });
  }

  function setTodosSortAz() {
    getTodosSortedByAz().then(todos => {
      setTodos(todos);
    });
  }

  function setTodosSortZa() {
    getTodosSortedByZa().then(todos => {
      setTodos(todos);
    });
  }

  const filteredTodos = filter? todos.filter(todo => todo.status === filter) : todos;


  return (
    <div className="App">
       <h1> Lista de Tarefas </h1>
       <div className="filters">
       <span>Status</span>
         <button onClick={() => setFilter()}>Todas Tarefas</button>
         <button onClick={() => setFilter('pending')}>Pendentes</button>
         <button onClick={() => setFilter('progress')}>Em Andamento</button>
         <button onClick={() => setFilter('completed')}>Prontas</button>
       </div>
       <div className="sorted">
         <span>Ordenação</span>
         <button onClick={() => setTodosFromAPI()}>Data Descrescente</button>
         <button onClick={() => setTodosSortRecents()}>Data Crescente</button>
         <button onClick={() => setTodosSortAz()}>A-Z</button>
         <button onClick={() => setTodosSortZa()}>Z-A</button>
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
