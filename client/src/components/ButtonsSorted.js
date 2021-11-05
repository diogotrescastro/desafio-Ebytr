import PropTypes from 'prop-types';

function ButtonsSorted({
  setTodosFromAPI,
  setTodosSortRecents,
  setTodosSortAz,
  setTodosSortZa,
}) {
  const buttonDrop = {
    all: 'unset',
    textAlign: 'center',
    fontSize: '16px',
    color: '#26a69a',
    display: 'block',
    lineHeight: '22px',
    padding: '14px 16px',
  };
  return (
    <div
      className="row l2 s2 right right-align"
      style={ { marginRight: 'unset' } }
    >
      <aauto
        href="#menu"
        data-target="dropdown1"
      >
        <i className="material-icons">filter_list</i>

      </aauto>
      <ul id="dropdown1" className="dropdown-content sorted">
        <li>
          <button
            type="button"
            data-testid="btn-order-date-decrescent"
            onClick={ () => setTodosSortRecents() }
            className="waves-effect waves-light btn-small"
            style={ buttonDrop }
          >
            Data
            <i className="material-icons">arrow_drop_up</i>
          </button>
        </li>
        <li className="divider" />
        <li>
          <button
            type="button"
            data-testid="btn-order-date-crescent"
            onClick={ () => setTodosFromAPI() }
            className="waves-effect waves-light btn-small"
            style={ buttonDrop }
          >
            Data
            <i className="material-icons">arrow_drop_down</i>
          </button>
        </li>
        <li className="divider" />
        <li>
          <button
            type="button"
            data-testid="btn-order-za"
            onClick={ () => setTodosSortZa() }
            className="waves-effect waves-light btn-small"
            style={ buttonDrop }
          >
            Z - A
            <i className="material-icons">arrow_drop_up</i>
          </button>
        </li>
        <li className="divider" />
        <li>
          <button
            type="button"
            data-testid="btn-order-az"
            onClick={ () => setTodosSortAz() }
            className="waves-effect waves-light btn-small"
            style={ buttonDrop }
          >
            A - Z
            <i className="material-icons">arrow_drop_down</i>
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
