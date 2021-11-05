import PropTypes from 'prop-types';

function ButtonsFilters({ setFilter }) {
  return (
    <div className="filters">
      <span>Status</span>
      <button
        type="button"
        data-testid="btn-tasks-all"
        onClick={ () => setFilter() }
        className="waves-effect waves-light btn-small"
      >
        Todas Tarefas
      </button>
      <button
        type="button"
        data-testid="btn-tasks-pending"
        onClick={ () => setFilter('pending') }
        className="waves-effect waves-light btn-small"
      >
        Pendentes
      </button>
      <button
        type="button"
        data-testid="btn-tasks-progress"
        onClick={ () => setFilter('progress') }
        className="waves-effect waves-light btn-small"
      >
        Em Andamento
      </button>
      <button
        type="button"
        data-testid="btn-tasks-completed"
        onClick={ () => setFilter('completed') }
        className="waves-effect waves-light btn-small"
      >
        Concluídas
      </button>
    </div>
  );
}

ButtonsFilters.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default ButtonsFilters;
