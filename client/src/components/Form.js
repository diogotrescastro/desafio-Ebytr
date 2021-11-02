import { useState } from "react";
import { addTodo } from '../services/todoAPI';


const initialTask = {
  title: "",
  status: "pending"
}
function Task({ getTodos }) {
  const [newTask, setNewTask] = useState(initialTask);


  function onChange(e) {
    const { name, value } = e.target;
    setNewTask({...newTask, [name]: value});
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(newTask, getTodos);
    setNewTask(initialTask);
  }

  function generateForm() {
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={onChange}
        />
        <select
        name="status"
        onChange={onChange}
        >
          <option value="pending">
            Pendente
            </option>
          <option value="progress">
            Em Andamento
          </option>
          <option value="completed">Concluída</option>
        </select>
        <button type="submit">Criar</button>
      </form>
  )}

  return (
    <div className="task">
      {generateForm()}
    </div>
  );
}

export default Task;
