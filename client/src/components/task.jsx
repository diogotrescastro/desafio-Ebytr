import { useState } from "react";

// Funções baseadas no repositório do https://github.com/felipegust/to-do-app/blob/main/to-do-list/src/components/item.jsx
function Task({ task, updated, deleted, key }) {
  const [tempTask, setTempTask] = useState("");

  function handleStatus() {
    const tempItem = { ...task, active: !task.active };
    updated(tempItem);
  }

  function handleEdit() {
    const tempItem = { ...task, edit: true };
    updated(tempItem);
  }

  function handleDelete() {
    const tempItem = { ...task };
    deleted(tempItem);
  }

  function handleKeyPress(e) {
    const tempItem = { ...task, title: tempTask, active: true, edit: false };
    if (e.charCode === 13 || e.type === "blur") {
      console.log(tempItem);
      updated(tempItem);
    }
  }

  function generateCheckbox() {
    return (
      <input
        type="checkbox"
        key={key}
        onClick={() => {
          handleStatus();
        }}
        checked={!task.active}
      />
    );
  }

  function generateEmpty() {
    return (
      <input
        type="text"
        value={tempTask}
        onChange={(e) => setTempTask(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        onBlur={(e) => handleKeyPress(e)}
      />
    );
  }

  function generateTasks() {
    return (
      <span
        onClick={() => handleEdit()}
        style={task.active ? {} : { textDecoration: "line-through" }}
      >
        {task.title}
      </span>
    );
  }

  return (
    <div className="task">
      {generateCheckbox()}
      {task.title && !task.edit ? generateTasks() : generateEmpty()}
      <button onClick={handleDelete}>x</button>
    </div>
  );
}

export default Task;
