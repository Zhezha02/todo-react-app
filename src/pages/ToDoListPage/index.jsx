import React, { useState } from 'react';
import TaskInput from '../../components/TaskInput';
import ToDoList from '../../components/ToDoList';
import styles from './ToDoListPage.module.scss';

const ToDoListPage = props => {
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
  const clearToDoList = () => setTasks(new Map());

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>to-do list</h1>
      <div className={styles.container}>
        <TaskInput onSubmit={addTasks} />
        {[...tasks].length !== 0 && (
          <ToDoList
            toDoInputs={tasks}
            switchIsDone={switchIsDone}
            deleteTask={deleteTask}
            clearToDoList={clearToDoList}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoListPage;
