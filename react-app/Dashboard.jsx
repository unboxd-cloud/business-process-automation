import { useEffect, useState } from 'react';
export default function Dashboard() {
  const [metrics, setMetrics] = useState({ running: 0, completed: 0 });

  useEffect(() => {
    fetch('http://localhost:8080/activiti-app/api/runtime/process-instances')
      .then(r => r.json())
      .then(data => {
        setMetrics({ running: data.data.length, completed: data.data.filter(p => p.endTime).length });
      });
  }, []);

  return (
    <div>
      <h3>Process Dashboard</h3>
      <p>Running: {metrics.running}</p>
      <p>Completed: {metrics.completed}</p>
    </div>
  );
}