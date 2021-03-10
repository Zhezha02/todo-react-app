import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
import styles from './toDoList.module.scss';

const ToDoList = props => {
  const { toDoInputs, clearToDoList, ...rest } = props;

  const itemsOfList = () => {
    const result = [];

    for (const [key, value] of toDoInputs.entries()) {
      result.push(<TaskItem input={value} key={key} id={key} {...rest} />);
    }
    return result;
  };
  return (
    <div className={styles.container}>
      <ul>{itemsOfList()}</ul>

      <button className={styles.clearButton} onClick={clearToDoList}>
        Clear
      </button>
    </div>
  );
};

ToDoList.propTypes = {
  toDoInputs: PropTypes.array.isRequired,
  clearToDoList: PropTypes.func,
};

export default ToDoList;
