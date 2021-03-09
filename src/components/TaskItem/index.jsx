import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskItem = props => {
  const {
    id,
    input: { taskValue, isDone },
    switchIsDone,
  } = props;

  return (
    <li >
      <label>
        <input type='checkbox'  onChange={()=>switchIsDone(id)} />
        <span>{taskValue}</span>
      </label>
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
