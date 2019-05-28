import { combineReducers } from 'redux';

import customerDataReducer from './customer_data_reducer.js';

export default combineReducers({
  data: customerDataReducer
});
