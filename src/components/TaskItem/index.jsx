import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import trashCan from './trash-can-outline.svg';
import styles from './TaskItem.module.scss';
import cx from 'classnames';

const TaskItem = props => {
  const [isChecked, setIsChecked] = useState('');
console.log(isChecked);
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

// TaskItem.propTypes = {
//   input: PropTypes.shape({
//     id: PropTypes.number,
//     taskValue: PropTypes.string,
//     isDone: PropTypes.bool,
//   }),
// };

export default TaskItem;
