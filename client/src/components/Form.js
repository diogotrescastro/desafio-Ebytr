/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { addTodo } from '../services/todoAPI';
import SelectStatus from './SelectStatus';

const initialTask = {
  title: '',
  status: 'pending',
  edit: false,
};
// eslint-disable-next-line react/prop-types
function Form({ getTodos }) {
  const [newTask, setNewTask] = useState(initialTask);
  const [validateInput, setvalidateInput] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (newTask.title === '') {
      setvalidateInput(true);
      return;
    }
    addTodo(newTask, getTodos);
    setNewTask(initialTask);
  }

  function generateForm() {
    return (
      <div className="row">
        <form onSubmit={ onSubmit } data-testid="form-input" className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                name="title"
                value={ newTask.title }
                onChange={ onChange }
                data-testid="form-input-text"
                className="validate"
                id="insertTitle"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="insertTitle">
                {validateInput && newTask.title === '' ? (
                  <span className="empty-title">O campo não pode ser vazio</span>
                ) : (
                  'Insira sua Tarefa'
                )}

              </label>
            </div>
            <SelectStatus change={ onChange } />
            <div className="input-field col s2">
              <button
                type="submit"
                data-testid="btn-task-add"
                className="waves-effect waves-light btn-small"
              >
                Criar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  return <div className="task">{generateForm()}</div>;
}

export default Form;
