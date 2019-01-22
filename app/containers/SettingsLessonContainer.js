import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SettingsLesson from '../components/SettingsLesson';
import withLesson from '../hoc/withLesson';

class SettingsLessonContainer extends Component {
  onSubmit = _.debounce(parameters => {
    const {
      update,
      lesson: { id }
    } = this.props;
    update({ id, parameters });
  }, 500);

  render() {
    const {
      lesson: { parameters }
    } = this.props;

    if (!parameters) return null;

    return <SettingsLesson onSubmit={this.onSubmit} parameters={parameters} />;
  }
}

SettingsLessonContainer.propTypes = {
  update: PropTypes.func.isRequired,
  lesson: PropTypes.shape({
    id: PropTypes.string,
    parameters: PropTypes.object
  }).isRequired
};

export default withLesson(SettingsLessonContainer);
