export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export function search(data){
  return {
    type: SEARCH,
    payload: data
  }
}

export function searchSuccess(data){
  return {
    type: SEARCH_SUCCESS,
    data
  }
}

export function searchFail(error){
  return {
    type: SEARCH_FAIL,
    error
  }
}