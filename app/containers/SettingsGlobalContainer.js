import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsGlobal from '../components/SettingsGlobal';
import withConfig from '../hoc/withConfig';

class SettingsGlobalContainer extends Component {
  render() {
    const { update } = this.props;

    return <SettingsGlobal onSubmit={update} {...this.props} />;
  }
}

SettingsGlobalContainer.propTypes = {
  update: PropTypes.func.isRequired,
  config: PropTypes.shape({
    volumeMusic: PropTypes.string.isRequired,
    volumeSound: PropTypes.string.isRequired,
    baseColor: PropTypes.string.isRequired
  }).isRequired
};

export default withConfig(SettingsGlobalContainer);
