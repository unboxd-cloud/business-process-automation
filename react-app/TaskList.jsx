import { useEffect, useState } from "react";
export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/activiti-app/api/runtime/tasks")
      .then(r => r.json())
      .then(data => setTasks(data.data));
  }, []);

  const completeTask = (id) => {
    fetch(`http://localhost:8080/activiti-app/api/runtime/tasks/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'complete' })
    }).then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  return (
    <ul>
      {tasks.map(t => (
        <li key={t.id}>
          {t.name} <button onClick={() => completeTask(t.id)}>Complete</button>
        </li>
      ))}
    </ul>
  );
}