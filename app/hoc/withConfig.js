import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ConfigActions from '../actions/config';

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ConfigActions, dispatch);
}

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
