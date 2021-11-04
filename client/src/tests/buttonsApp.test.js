import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("Verifica os botões na aplicação", () => {
  test('testa se o botão "Todas Tarefas" existe', () => {
    const { getByTestId } = render(<App />);

    const btnAll = getByTestId("btn-tasks-all");
    expect(btnAll).toBeInTheDocument();
    expect(btnAll.type).toBe("button");
  });

  test('testa se o botão "Pendentes" existe', () => {
    const { getByTestId } = render(<App />);
    const btnPending = getByTestId("btn-tasks-pending");
    expect(btnPending).toBeInTheDocument();
    expect(btnPending.type).toBe("button");
  });

  test('testa se o botão "Em Andamento" existe', () => {
    const { getByTestId } = render(<App />);
    const btnProgress = getByTestId("btn-tasks-progress");
    expect(btnProgress).toBeInTheDocument();
    expect(btnProgress.type).toBe("button");
  });

  test('testa se o botão "Concluídas" existe', () => {
    const { getByTestId } = render(<App />);
    const btnProgress = getByTestId("btn-tasks-completed");
    expect(btnProgress).toBeInTheDocument();
    expect(btnProgress.type).toBe("button");
  });

  test('testa se o botão de ordenar "Data Crescente" existe', () => {
    const { getByTestId } = render(<App />);
    const btnOrderCrescent = getByTestId("btn-order-date-crescent");
    expect(btnOrderCrescent).toBeInTheDocument();
    expect(btnOrderCrescent.type).toBe("button");
  });

  test('testa se o botão de ordenar "Data Descrescente" existe', () => {
    const { getByTestId } = render(<App />);
    const btnOrderDecrescent = getByTestId("btn-order-date-decrescent");
    expect(btnOrderDecrescent).toBeInTheDocument();
    expect(btnOrderDecrescent.type).toBe("button");
  });

  test('testa se o botão de ordenar "A-Z" existe', () => {
    const { getByTestId } = render(<App />);
    const btnOrderAz = getByTestId("btn-order-az");
    expect(btnOrderAz).toBeInTheDocument();
    expect(btnOrderAz.type).toBe("button");
  });

  test('testa se o botão de ordenar "Z-A" existe', () => {
    const { getByTestId } = render(<App />);
    const btnOrderZa = getByTestId("btn-order-za");
    expect(btnOrderZa).toBeInTheDocument();
    expect(btnOrderZa.type).toBe("button");
  });
});