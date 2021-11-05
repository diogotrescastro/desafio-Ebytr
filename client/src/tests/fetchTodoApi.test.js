const { getTodos, addTodo, deleteTodo, updateTodo } = require('../services/todoAPI');

afterEach(() => jest.clearAllMocks());

describe('Verifica se as funções fetch são chamadas', () => {
  it('função getTodos', async () => {
    const todos = [
      {
        _id: '6183f14edd3c0fb70d50566e',
        title: 'a',
        status: 'pending',
        edit: false,
        date: '2021-11-04T14:42:22.113Z',
      },
      {
        _id: '6183f156dd3c0fb70d50566f',
        title: 'b',
        status: 'pending',
        edit: true,
        date: '2021-11-04T14:42:30.343Z',
      },
    ];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(todos),
    }));

    getTodos();
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('http://localhost:3001/todo/list', { method: 'GET' });
  });

  it('função addTodo', async () => {
    const todo = {
      title: 'a',
      status: 'pending',
      edit: false,
    };

    const testFunc = () => {};

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(todo),
    }));

    addTodo(todo, testFunc);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('http://localhost:3001/todo/add', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(todo),
    });
  });

  it('função deleteTodo', async () => {
    const todo = {
      _id: '6183f156dd3c0fb70d50566f',
      title: 'b',
      status: 'pending',
      edit: true,
      date: '2021-11-04T14:42:30.343Z',
    };

    const testFunc = () => {};

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(todo),
    }));

    deleteTodo(todo, testFunc);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('http://localhost:3001/todo/delete', {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify(todo),
    });
  });

  it('função updateTodo', async () => {
    const todo = {
      _id: '6183f156dd3c0fb70d50566f',
      title: 'b',
      status: 'pending',
      edit: true,
      date: '2021-11-04T14:42:30.343Z',
    };

    const testFunc = () => {};

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(todo),
    }));

    updateTodo(todo, testFunc);
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('http://localhost:3001/todo/update', {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(todo),
    });
  });
});
