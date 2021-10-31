export function getTodos() {
  return fetch(`localhost:3000/listar`, {method: 'GET'})
    .then((result) => result.json())
    .then((data) => data);
}
