import PropTypes from 'prop-types';

function ButtonsEdit({ handleDelete }) {
  return (
    <div>
      <div className="input-field col s1">
        <button
          type="button"
          data-testid="btn-todo-delete"
          onClick={ handleDelete }
          className="btn-floating btn-small waves-effect waves-light red"
        >
          <i className="material-icons">delete_forever</i>
        </button>
      </div>
      <div className="input-field col s1">
        <button
          type="submit"
          data-testid="btn-todo-submit"
          className="waves-effect waves-light btn-small"
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}

ButtonsEdit.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default ButtonsEdit;
