import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import trashCan from './trash-can-outline.svg';
import styles from './TaskItem.module.scss';

const TaskItem = props => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    id,
    input: { taskValue, isDone },
    switchIsDone,
    deleteTask,
  } = props;

  const checkboxHandler = () => setIsChecked(!isChecked);

  const taskClasses = cx(styles.taskValue, { [styles.fulfilledTask]: isDone });

  return (
    <li className={styles.wrapper}>
      <label className={styles.taskContainer}>
        <input
          type='checkbox'
          value={isChecked}
          onChange={() => {
            switchIsDone(id);
            checkboxHandler();
          }}
        />
        <span className={taskClasses}>{taskValue}</span>
      </label>
      <button className={styles.deleteBtn} onClick={() => deleteTask(id)}>
        <img src={trashCan} alt='delete icon' />
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  id: PropTypes.number,
  input: PropTypes.shape({
    taskValue: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  switchIsDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskItem;
