import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { TO_DO_INPUT_SCHEMA } from '../../utils/validationSchemas';
import styles from './taskInput.module.scss';

const initialValues = { toDo: '' };

const TaskInput = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TO_DO_INPUT_SCHEMA}
      onSubmit={props.onSubmit}
    >
      <Form className={styles.container}>
        <label className={styles.inputContainer}>
          <Field className={styles.input} name='toDo' type='text' placeholder='new task' />
        </label>
        <button className={styles.submitBtn} type='submit'>ADD</button>
      </Form>
    </Formik>
  );
};

TaskInput.propTypes = {
  onSubmit: PropTypes.func,
};

export default TaskInput;
