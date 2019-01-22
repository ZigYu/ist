import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentLesson } from '../selectors/lessons';
import * as LessonActions from '../actions/lessons';

function mapStateToProps(state) {
  return {
    lesson: getCurrentLesson(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LessonActions, dispatch);
}

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
