const headersObj = { 'Content-Type': 'application/json' };

export async function getTodos() {
  return fetch('http://localhost:3000/todo/list', { method: 'GET' })
    .then((result) => result.json())
    .then((data) => data);
}

export async function addTodo(todo, setTodosFromAPI) {
  return fetch('http://localhost:3000/todo/add', {
    headers: headersObj,
    method: 'POST',
    body: JSON.stringify(todo),
  })
    .then((result) => result.json())
    .then(() => setTodosFromAPI())
    .catch((err) => console.error('Error: ', err));
}

export async function updateTodo(todo, setTodosFromAPI) {
  return fetch('http://localhost:3000/todo/update', {
    headers: headersObj,
    method: 'PUT',
    body: JSON.stringify(todo),
  })
    .then(() => setTodosFromAPI())
    .catch((err) => console.error('Error: ', err));
}

export async function deleteTodo(todo, setTodosFromAPI) {
  return fetch('http://localhost:3000/todo/delete', {
    headers: headersObj,
    method: 'DELETE',
    body: JSON.stringify(todo),
  })
    .then(() => setTodosFromAPI())
    .catch((err) => console.error('Error: ', err));
}
