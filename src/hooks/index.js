import { useState } from 'react';

/**
 *
 * @param {Map} initialsValue
 */
export function useToDo (initialsValue) {
  const [tasks, setTasks] = useState(initialsValue);

  return {
    tasks,
    setTasks,

    addTasks: ({ toDo }) => {
      const newTask = {
        taskValue: toDo,
        isDone: false,
      };
      setTasks(new Map([...tasks]).set(Date.now(), newTask));
    },

    switchIsDone: id => {
      const task = tasks.get(id);
      task.isDone = !task.isDone;
    },

    deleteTask: id => {
      const newTasks = new Map([...tasks]);
      newTasks.delete(id);
      setTasks(newTasks);
    },

    clearToDoList: () => setTasks(new Map()),
  };
}
