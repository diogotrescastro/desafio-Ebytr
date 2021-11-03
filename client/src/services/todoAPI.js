export async function getTodos() {
  return fetch(`http://localhost:3000/todo/list/all`, {method: 'GET'})
    .then((result) => result.json())
    .then((data) => data);
}

export async function getTodosSortedByRecents() {
  return fetch(`http://localhost:3000/todo/list/sortedbyrecents`, {method: 'GET'})
    .then((result) => result.json())
    .then((data) => data);
}

export async function getTodosSortedByAz() {
  return fetch(`http://localhost:3000/todo/list/sortedbyaz`, {method: 'GET'})
    .then((result) => result.json())
    .then((data) => data);
}

export async function getTodosSortedByZa() {
  return fetch(`http://localhost:3000/todo/list/sortedbyza`, {method: 'GET'})
    .then((result) => result.json())
    .then((data) => data);
}

export  async function addTodo(todo, setTodosFromAPI) {
  return fetch(`http://localhost:3000/todo/add`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(todo)
  })
    .then((result) => result.json())
    .then(() => setTodosFromAPI())
    .catch((err) => console.error("Error: ", err));
}

export async function updateTodo(todo, setTodosFromAPI) {
  return fetch(`http://localhost:3000/todo/update`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT',
    body: JSON.stringify(todo)
  })
    .then(() => setTodosFromAPI())
    .catch((err) => console.error("Error: ", err));;
}

export async function deleteTodo(todo, setTodosFromAPI) {
  return fetch(`http://localhost:3000/todo/delete`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
    body: JSON.stringify(todo)
  })
    .then(() => setTodosFromAPI())
    .catch((err) => console.error("Error: ", err));;
}