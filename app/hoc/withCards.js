import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CardsActions from '../actions/cards';
import { getFilteredCards } from '../selectors/cards';

function mapStateToProps(state) {
  return {
    cards: getFilteredCards(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CardsActions, dispatch);
}

export default Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);
