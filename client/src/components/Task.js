import { useState } from 'react';
import PropTypes from 'prop-types';
import { updateTodo, deleteTodo } from '../services/todoAPI';

function Task({ task, getTodos }) {
  const [editTask, setEditTask] = useState(task);
  const [validateInput, setvalidateInput] = useState(false);
  const { title, status, edit } = task;

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
    if (editTask.title === '') {
      setvalidateInput(true);
      return;
    }
    updateTodo(tempItem, getTodos);
  }

  function generateEditable() {
    return (
      <form onSubmit={ onSubmit } data-testid="form-todo-editable">
        <input
          type="text"
          name="title"
          value={ editTask.title }
          onChange={ onChange }
          data-testid="input-todo-text"
        />
        <select
          name="status"
          onChange={ onChange }
          value={ editTask.status }
          data-testid="select-text"
        >
          <option value="pending" data-testid="select-option-pending">
            Pendente
          </option>
          <option value="progress" data-testid="select-option-progress">
            Em Andamento
          </option>
          <option value="completed" data-testid="select-option-completed">
            Concluída
          </option>
        </select>
        <button
          type="button"
          data-testid="btn-todo-delete"
          onClick={ handleDelete }
        >
          x
        </button>
        <button type="submit" data-testid="btn-todo-submit">
          Atualizar
        </button>
        {validateInput && editTask.title === '' ? (
          <span className="empty-title">O campo não pode ser vazio</span>
        ) : (
          ''
        )}
      </form>
    );
  }

  function generateTasks() {
    return (
      <>
        <span data-testid="task-title">{title}</span>
        <span data-testid="task-status">{` - ${status}`}</span>
        <span>
          {' '}
          <button
            type="button"
            data-testid="task-btn-edit"
            onClick={ () => handleEdit() }
          >
            editar
          </button>
        </span>
      </>
    );
  }

  return (
    <div className="task">
      {!edit ? generateTasks() : generateEditable()}
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    edit: PropTypes.bool.isRequired,
  }).isRequired,
  getTodos: PropTypes.func.isRequired,
};

export default Task;
