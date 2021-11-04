import React from 'react';
import { render } from '@testing-library/react';
import Form from '../components/Form';


describe('Verifica os elementos do Form', () => {
  test('testa se existe um form com o data-testid "form-input"', () => {
    const { getByTestId } = render(<Form />);
    const form = getByTestId('form-input');
    expect(form).toBeInTheDocument();
  });
  test('testa se existe um input com o data-testid "form-input-text" e se o tipo é "text"', () => {
    const { getByTestId } = render(<Form />);

    const inputText = getByTestId('form-input-text');
    expect(inputText).toBeInTheDocument();
    expect(inputText.type).toBe('text');
  });
  test('testa se existe um select com o data-testid "form-select"', () => {
    const { getByTestId } = render(<Form />);

    const select = getByTestId('form-select');
    expect(select).toBeInTheDocument();
  });
  test('testa se existe uma opção com o data-testid "form-option-pending" com o valor "pending"', () => {
    const { getByTestId } = render(<Form />);

    const optionPending = getByTestId('form-option-pending');
    expect(optionPending).toBeInTheDocument();
    expect(optionPending.value).toBe('pending');
  });
  test('testa se existe uma opção com o data-testid "form-option-progress" com o valor "progress"', () => {
    const { getByTestId } = render(<Form />);

    const optionProgress = getByTestId('form-option-progress');
    expect(optionProgress).toBeInTheDocument();
    expect(optionProgress.value).toBe('progress');
  });
  test('testa se existe uma opção com o data-testid "form-option-completed" com o valor "completed"', () => {
    const { getByTestId } = render(<Form />);

    const optionCompleted = getByTestId('form-option-completed');
    expect(optionCompleted).toBeInTheDocument();
    expect(optionCompleted.value).toBe('completed');
  });
  test('testa se o botão de "Adicionar" tarefa existe', () => {
    const { getByTestId } = render(<Form />);
    const btnTaskAdd = getByTestId('btn-task-add');
    expect(btnTaskAdd).toBeInTheDocument();
    expect(btnTaskAdd.type).toBe('submit');
  });
});