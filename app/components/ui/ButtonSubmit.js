import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSubmitForm } from '../../containers/FormProvider';
import styles from './ButtonSubmit.css';

const ButtonSubmit = ({ children }) => (
  <div className={styles.buttonSubmit}>
    <ButtonSubmitForm>{children}</ButtonSubmitForm>
  </div>
);

ButtonSubmit.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonSubmit;
