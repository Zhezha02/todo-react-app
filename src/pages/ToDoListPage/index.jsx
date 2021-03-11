import React from 'react';
import TaskInput from '../../components/TaskInput';
import ToDoList from '../../components/ToDoList';
import styles from './ToDoListPage.module.scss';
import { useToDo } from '../../hooks';

const ToDoListPage = () => {
  const { tasks, addTasks, switchIsDone, deleteTask, clearToDoList } = useToDo(
    new Map()
  );

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
