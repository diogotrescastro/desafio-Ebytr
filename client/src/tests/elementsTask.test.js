import { render } from '@testing-library/react';
import Task from '../components/Task';

describe('Verifica os elementos do Task', () => {
  describe('Ao ser renderizada com tarefa fora do modo de edição', () => {
    test('testa se existe o campo titulo a com o data-testid "task-title"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: false,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const title = getByTestId('task-title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('teste');
    });
    test('testa se existe o campo status com o data-testid "task-status"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: false,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const status = getByTestId('task-status');
      expect(status).toBeInTheDocument();
      expect(status).toHaveTextContent('pendente');
    });
    test('testa se existe um botão com o data-testid "task-btn-edit"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: false,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const button = getByTestId('task-btn-edit');
      expect(button).toBeInTheDocument();
      expect(button.type).toBe('button');
    });
  });

  describe('Ao ser renderizada com tarefa no modo de edição', () => {
    test('testa se existe um form com o data-testid ""', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const form = getByTestId('form-todo-editable');
      expect(form).toBeInTheDocument();
    });

    test('testa se existe um input com o titulo com data-testid "task-title"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const inputText = getByTestId('input-todo-text');
      expect(inputText).toBeInTheDocument();
      expect(inputText.value).toBe('teste');
    });
    test('testa se existe um select com a opção selecionada (valor igual ao status anterior a edição) o data-testid "select-text"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const select = getByTestId('form-select');
      expect(select).toBeInTheDocument();
      expect(select.value).toBe('pending');
    });

    test('testa se existe uma opção com o data-testid "select-option-pending" com o valor "pending"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const optionPending = getByTestId('form-option-pending');
      expect(optionPending).toBeInTheDocument();
      expect(optionPending.value).toBe('pending');
    });
    test('testa se existe uma opção com o data-testid "select-option-progress" com o valor "progress"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const optionProgress = getByTestId('form-option-progress');
      expect(optionProgress).toBeInTheDocument();
      expect(optionProgress.value).toBe('progress');
    });
    test('testa se existe uma opção com o data-testid "select-option-completed" com o valor "completed"', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const optionCompleted = getByTestId('form-option-completed');
      expect(optionCompleted).toBeInTheDocument();
      expect(optionCompleted.value).toBe('completed');
    });

    test('testa se o botão de "apagar" tarefa existe e ele é do tipo button', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const btnTodoDelete = getByTestId('btn-todo-delete');
      expect(btnTodoDelete).toBeInTheDocument();
      expect(btnTodoDelete.type).toBe('button');
    });

    test('testa se o botão de "Atualizar" tarefa existe e ele é do tipo submit', () => {
      const todo = {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'teste',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:22.113Z',
      };

      const test = () => {};

      const { getByTestId } = render(<Task task={ todo } getTodos={ test } />);

      const btnTodoUpdate = getByTestId('btn-todo-submit');
      expect(btnTodoUpdate).toBeInTheDocument();
      expect(btnTodoUpdate.type).toBe('submit');
    });
  });
});
