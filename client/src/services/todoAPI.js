export function getTodos() {
  return fetch(`localhost:3000/listar`)
    .then((result) => result.json())
    .then((data) => data);
}
