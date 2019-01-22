import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import cards from './cards';
import config from './config';
import lessons from './lessons';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    cards,
    config,
    lessons
  });
}
