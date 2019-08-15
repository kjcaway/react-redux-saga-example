import { combineReducers } from 'redux';
import {reducer as search} from './SearchReducer';


const rootReducer = combineReducers({
  search,
})

export default rootReducer