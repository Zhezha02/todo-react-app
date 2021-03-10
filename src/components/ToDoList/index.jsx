import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';

const ToDoList = props => {
  const { toDoInputs, ...rest } = props;

  const itemsOfList = () => {
    const result = [];

    for (const [key, value] of toDoInputs.entries()) {
      result.push(
        <TaskItem input={value} key={key} id={key} {...rest}/>
      );
    }

    return result;
  };
  return <ul>{itemsOfList()}</ul>;
};

// ToDoList.propTypes = {
//   toDoInputs: PropTypes.array.isRequired,
// };

export default ToDoList;
