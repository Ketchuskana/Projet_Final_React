import { combineReducers } from 'redux';
import recordingsReducer from './recordingsReducer';

export default combineReducers({
  recordings: recordingsReducer,
});
