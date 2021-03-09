import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TO_DO_INPUT_SCHEMA } from '../../utils/validationSchemas';

const initialValues = { toDo: '' };

const TaskInput = (props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TO_DO_INPUT_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form>
        <label>
          <Field name='toDo' type='text' placeholder='new task' />
          <ErrorMessage name='toDo' component='span' />
        </label>
        <button type='submit'>ADD</button>
      </Form>
    </Formik>
  );
};

TaskInput.propTypes = {
  onSubmit: PropTypes.func,
};

export default TaskInput;
