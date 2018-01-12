import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { status } from './reducers/status_reducer';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  status
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
