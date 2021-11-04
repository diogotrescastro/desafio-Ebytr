import { useState } from "react";
import { addTodo } from "../services/todoAPI";

const initialTask = {
  title: "",
  status: "pending",
  edit: false,
};
function Task({ getTodos }) {
  const [newTask, setNewTask] = useState(initialTask);
  const [validateInput, setvalidateInput] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (newTask.title === "") {
      setvalidateInput(true);
      return;
    }
    addTodo(newTask, getTodos);
    setNewTask(initialTask);
  }

  function generateForm() {
    return (
      <form onSubmit={onSubmit} data-testid="form-input">
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={onChange}
          data-testid="form-input-text"
        />
        <select name="status" onChange={onChange} data-testid="form-select">
          <option value="pending" data-testid="form-option-pending">
            Pendente
          </option>
          <option value="progress" data-testid="form-option-progress">
            Em Andamento
          </option>
          <option value="completed" data-testid="form-option-completed">
            Concluída
          </option>
        </select>
        <button type="submit" data-testid="btn-task-add">
          Criar
        </button>
        {validateInput && newTask.title === "" ? (
          <span className="empty-title">O campo não pode ser vazio</span>
        ) : (
          ""
        )}
      </form>
    );
  }

  return <div className="task">{generateForm()}</div>;
}

export default Task;
