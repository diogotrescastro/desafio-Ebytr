export function getTodos() {
  return fetch(`http://localhost:3000/listar`, {method: 'GET'})
    .then((result) => result.json())
    .then((data) => data);
}


export function addTodo() {
  return fetch(`http://localhost:3000/adicionar`, {
    method: 'POST',
    body: {"title": "teste", "description": "teste", "edit": false, "active": true}
  })
    .then((result) => result.json())
    .then((data) => true);
}