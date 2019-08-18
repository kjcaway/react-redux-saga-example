import {
  SEARCH, 
  SEARCH_SUCCESS, 
  SEARCH_FAIL
} from '../actions'

const initialState = {
  data: {}
}

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case SEARCH:
      return {
        ...state,
        payload: action.payload
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case SEARCH_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}