import PropTypes from 'prop-types';

function ButtonsEdit({ handleDelete }) {
  return (
    <div className="input-field col s2">
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
    </div>
  );
}

ButtonsEdit.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};

export default ButtonsEdit;
