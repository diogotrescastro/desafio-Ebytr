function task({ task }) {
  return (
    <div className="task">
      <input type="checkbox" />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button>x</button>
    </div>
  );
}

export default task;