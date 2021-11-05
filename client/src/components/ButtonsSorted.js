import PropTypes from 'prop-types';

function ButtonsSorted({
  setTodosFromAPI,
  setTodosSortRecents,
  setTodosSortAz,
  setTodosSortZa,
}) {
  return (
    <div>
      <a
        className="dropdown-trigger btn"
        href="#menu"
        data-target="dropdown1"
      >
        Ordenar

      </a>
      <ul id="dropdown1" className="dropdown-content sorted">
        <li>
          <button
            type="button"
            data-testid="btn-order-date-crescent"
            onClick={ () => setTodosFromAPI() }
            className="waves-effect waves-light btn-small"
          >
            Data D
          </button>
        </li>
        <li className="divider" />
        <li>
          <button
            type="button"
            data-testid="btn-order-date-decrescent"
            onClick={ () => setTodosSortRecents() }
            className="waves-effect waves-light btn-small"
          >
            Data C
          </button>
        </li>
        <li className="divider" />
        <li>
          <button
            type="button"
            data-testid="btn-order-az"
            onClick={ () => setTodosSortAz() }
            className="waves-effect waves-light btn-small"
          >
            A-Z
          </button>
        </li>
        <li className="divider" />
        <li>
          <button
            type="button"
            data-testid="btn-order-za"
            onClick={ () => setTodosSortZa() }
            className="waves-effect waves-light btn-small"
          >
            Z-A
          </button>
        </li>
      </ul>
    </div>
  );
}

ButtonsSorted.propTypes = {
  setTodosFromAPI: PropTypes.func.isRequired,
  setTodosSortRecents: PropTypes.func.isRequired,
  setTodosSortAz: PropTypes.func.isRequired,
  setTodosSortZa: PropTypes.func.isRequired,
};

export default ButtonsSorted;
