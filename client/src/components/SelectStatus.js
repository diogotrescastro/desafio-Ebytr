import PropTypes from 'prop-types';
import { useEffect } from 'react';
import M from 'materialize-css';

// eslint-disable-next-line react/prop-types
function SelectStatus({ change, value }) {
  const valueTodo = value || '';

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="input-field col l4 s6">
      <select
        name="status"
        onChange={ change }
        value={ valueTodo }
        data-testid="form-select"
      >
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
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="form-select">Status</label>
    </div>
  );
}

SelectStatus.propTypes = {
  change: PropTypes.func.isRequired,
};

export default SelectStatus;
