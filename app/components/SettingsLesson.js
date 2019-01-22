import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import FieldFilterWord from './fields/FieldFilterWord';
import FieldMaxLengthWord from './fields/FieldMaxLengthWord';

export default function SettingsLesson({ onSubmit, parameters }) {
  const { filterWord, filterMaxLengthWord } = parameters;

  const fields = [];
  if (filterWord !== undefined) fields.push(<FieldFilterWord key={1} />);
  if (filterMaxLengthWord !== undefined)
    fields.push(<FieldMaxLengthWord key={2} />);

  if (fields.length === 0) return null;

  return (
    <div>
      <h3>Настройки задания</h3>
      <Form isAutoSubmit onSubmit={onSubmit} defaultValues={parameters}>
        {fields}
      </Form>
    </div>
  );
}

SettingsLesson.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  parameters: PropTypes.shape({
    filterWord: PropTypes.string,
    filterMaxLengthWord: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }).isRequired
};
