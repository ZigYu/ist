import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    location: state.router.location
  };
}

export default Component => connect(mapStateToProps)(Component);
