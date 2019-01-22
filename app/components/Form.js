import React from 'react';
import FormProvider from '../containers/FormProvider';
import styles from './Form.css';

const Form = ({ children, ...restProps }) => (
  <div className={styles.form}>
    <FormProvider {...restProps}>{children}</FormProvider>
  </div>
);

export default Form;
