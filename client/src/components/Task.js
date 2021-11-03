import { useState, useEffect } from "react";
import { updateTodo, deleteTodo } from '../services/todoAPI';


function Task({ task, key, getTodos }) {
  const [editTask, setEditTask] = useState(task);
  const [validateInput, setvalidateInput] = useState(false);


  function handleEdit() {
    const tempItem = { ...task, status: editTask.status, edit: true };
    updateTodo(tempItem, getTodos);
  }

  function handleDelete() {
    const tempItem = { ...task };
    deleteTodo(tempItem, getTodos);
  }

  function onChange(e) {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  }

  function onSubmit(e) {
    const tempItem = { ...editTask, edit: false };
    e.preventDefault();
    if(editTask.title === "") {
      setvalidateInput(true);
      return;
    }
    updateTodo(tempItem, getTodos);
  }

  function generateEditable() {
    return (
      <form onSubmit={onSubmit}>
        <input
          key={key}
          type="text"
          name="title"
          value={editTask.title}
          onChange={onChange}
        />
        <select
          key={key}
          name="status"
          onChange={onChange}
          value={editTask.status}
        >
          <option value="pending">Pendente</option>
          <option value="progress">Em Andamento</option>
          <option value="completed">Concluída</option>
        </select>
        <button onClick={handleDelete}>x</button>
        <button type="submit">Atualizar</button>
        {validateInput && editTask.title === ""? <span className="empty-title">O campo não pode ser vazio</span> : ''} 

      </form>
    );
  }

  function generateTasks() {
    return (
      <>
        <span>{task.title}</span>
        <span>{` - ${task.status}`}</span>
        <span>
          {" "}
          <button onClick={() => handleEdit()}>editar</button>
        </span>
      </>
    );
  }

  return (
    <div className="task">
      {!task.edit ? generateTasks() : generateEditable()}
    </div>
  );
}

export default Task;
