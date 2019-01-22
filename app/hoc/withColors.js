import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    colors: state.config.colors
  };
}

export default Component => connect(mapStateToProps)(Component);
