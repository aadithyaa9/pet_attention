import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [pet, setPet] = useState(null);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/pet").then((res) => setPet(res.data[0]));
    axios.get("http://localhost:5000/api/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post("http://localhost:5000/api/tasks", { task: newTask }).then((res) => {
      setTasks([...tasks, res.data]);
      setNewTask("");
    });
  };

  return (
    <div>
      <h1>Focus Timer</h1>
      {pet ? <h2>Your Pet: {pet.name} ({pet.type})</h2> : <p>No pet selected</p>}
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>{tasks.map((t) => <li key={t._id}>{t.task}</li>)}</ul>
    </div>
  );
};

export default App;
