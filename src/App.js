import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import ToDoList from './components/ToDoList';

const App = props => {
  const [tasks, setTasks] = useState(new Map());

  const addTasks = ({ toDo }) => {
    const newTask = {
      taskValue: toDo,
      isDone: false,
    };

    setTasks(new Map([...tasks]).set(Date.now(), newTask));
  };

  const switchIsDone = id => {
    const task = tasks.get(id);
    task.isDone = !task.isDone;
  };

  const deleteTask = id => {
    const newTasks = new Map([...tasks]);
    newTasks.delete(id);
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskInput onSubmit={addTasks} />
      <ToDoList
        toDoInputs={tasks}
        switchIsDone={switchIsDone}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
