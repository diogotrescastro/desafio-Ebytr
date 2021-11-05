/* eslint-disable react/jsx-no-bind */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateTodo, deleteTodo } from '../services/todoAPI';
import SelectStatus from './SelectStatus';
import ButtonsEdit from './ButtonsEdit';

function Task({ task, getTodos }) {
  const [editTask, setEditTask] = useState(task);
  const [validateInput, setvalidateInput] = useState(false);
  const [statusNew, setStatusNew] = useState('');
  const { title, status, edit } = task;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function generateStatus() {
    if (status === 'pending') {
      setStatusNew('pendente');
    } if (status === 'progress') {
      setStatusNew('em andamento');
    } if (status === 'completed') {
      return setStatusNew('concluida');
    }
  }

  useEffect(() => {
    generateStatus();
  }, [generateStatus]);

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
      <div className="row">
        <form onSubmit={ onSubmit } data-testid="form-todo-editable" className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="title"
                value={ editTask.title }
                onChange={ onChange }
                data-testid="input-todo-text"
                id="insertTitleUpdate"
              />
              <label htmlFor="insertTitleUpdate">
                {validateInput && newTask.title === '' ? (
                  <span className="empty-title">O campo não pode ser vazio</span>
                ) : (
                  ''
                )}

              </label>
            </div>
            {generateStatus}
            <SelectStatus change={ onChange } value={ editTask.status } />
            <ButtonsEdit handleDelete={ handleDelete } />
            {/* <div className="input-field col s2">
              <button
                type="button"
                data-testid="btn-todo-delete"
                onClick={ handleDelete }
                className="btn-floating btn-small waves-effect waves-light red"
              >
                <i className="material-icons">add</i>
              </button>
              <button
                type="submit"
                data-testid="btn-todo-submit"
                className="waves-effect waves-light btn-small"
              >
                Atualizar
              </button>
            </div> */}
          </div>
          {validateInput && editTask.title === '' ? (
            <span className="empty-title">O campo não pode ser vazio</span>
          ) : (
            ''
          )}
        </form>
      </div>
    );
  }

  function generateTasks() {
    return (
      <>
        <span data-testid="task-title">{title}</span>
        {/* <span data-testid="task-status">{` - ${statusNew}`}</span> */}
        <div className="chip">
          { statusNew }
        </div>
        <span>
          {' '}
          <button
            type="button"
            data-testid="task-btn-edit"
            onClick={ () => handleEdit() }
            className="btn-floating btn-small waves-effect waves-light"
          >
            e
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
