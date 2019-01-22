import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Button from '../components/ui/Button';

const FormContext = React.createContext();

export default class FormProvider extends Component {
  state = {};

  componentDidMount() {
    const { defaultValues } = this.props;
    if (defaultValues)
      _.each(this.forms, (v, key) => {
        if (defaultValues[key] !== undefined) {
          this.onChange({ name: key, value: defaultValues[key] });
        }
      });
  }

  forms = {};

  onChange = async ({ name, value }) => {
    const { isAutoSubmit } = this.props;
    const field = this.forms[name];

    const { isValid, msg } = field.validate
      ? field.validate(value)
      : { isValid: true };
    if (!_.isBoolean(isValid))
      throw new Error('FormProvider: isValid не boolean');

    const newState = {
      ...this.state,
      [name]: { name, value, isValid, msg }
    };

    if (isValid && field.modify)
      newState[name].value = await field.modify(value);

    this.setState(newState, () => {
      if (isValid && isAutoSubmit && this.isNewState()) this.submit();
    });
  };

  initialize = data => {
    this.forms[data.name] = data;
  };

  serializeValues = data => _.mapValues(data, ({ value }) => value);

  submit = () => {
    const { defaultValues, onSubmit } = this.props;
    onSubmit({ ...defaultValues, ...this.serializeValues(this.state) });
  };

  // определяет отличается ли state от defaultValues
  isNewState = () => {
    const { defaultValues } = this.props;
    if (!defaultValues) return true;

    const values = this.serializeValues(this.state);
    return !_.isEqual(defaultValues, { ...defaultValues, ...values });
  };

  render() {
    const { children } = this.props;
    const { state } = this;
    const isAllValid = _.every(_.map(state, 'isValid'));

    return (
      <FormContext.Provider
        value={{
          onChange: this.onChange,
          initialize: this.initialize,
          submit: this.submit,
          formState: this.state,
          disabledSubmit: !isAllValid || !this.isNewState()
        }}
      >
        {children}
      </FormContext.Provider>
    );
  }
}

FormProvider.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  defaultValues: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  )
};

FormProvider.defaultProps = {
  defaultValues: {}
};

// передает данные формы для children
export class FormConsumer extends Component {
  render() {
    const { children } = this.props;

    return (
      <FormContext.Consumer>
        {({ onChange, initialize, formState }) => {
          const { name } = children.props;
          return React.cloneElement(children, {
            onChange,
            initialize,
            ...formState[name]
          });
        }}
      </FormContext.Consumer>
    );
  }
}

FormConsumer.propTypes = {
  children: PropTypes.element.isRequired
};

// запускает submit формы
export function ButtonSubmitForm({ children }) {
  return (
    <FormContext.Consumer>
      {({ submit, disabledSubmit }) => (
        <Button disabled={disabledSubmit} onClick={submit}>
          {children}
        </Button>
      )}
    </FormContext.Consumer>
  );
}

ButtonSubmitForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired
};
