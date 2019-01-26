import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import FieldPickerColor from './fields/FieldPickerColor';
import FieldVolumeMusic from './fields/FieldVolumeMusic';
import FieldVolumeSound from './fields/FieldVolumeSound';

export default function SettingsGlobal({ onSubmit, config }) {
  return (
    <div>
      <h3>Общие настройки</h3>
      <Form isAutoSubmit onSubmit={onSubmit} defaultValues={config}>
        <FieldPickerColor />
        <FieldVolumeMusic />
        <FieldVolumeSound />
      </Form>
    </div>
  );
}

SettingsGlobal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.shape({
    volumeMusic: PropTypes.number.isRequired,
    volumeSound: PropTypes.number.isRequired,
    baseColor: PropTypes.string.isRequired
  }).isRequired
};
