import React from 'react';
import PropTypes from 'prop-types';
import { FormConsumer } from '../../containers/FormProvider';
import styles from './Field.css';

const Field = ({ children }) => (
  <div className={styles.field}>
    <FormConsumer>{children}</FormConsumer>
  </div>
);

Field.propTypes = {
  children: PropTypes.element.isRequired
};

export default Field;
