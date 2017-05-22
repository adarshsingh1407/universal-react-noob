import { VISIBILITY_FILTERS, SET_VISIBILITY_FILTER } from '../actions/SubstanceActions';

/*
 * Reducer for state.visibilityFilter
 */
function visibilityFilterReducer (state = VISIBILITY_FILTERS.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;
  }
}

export default visibilityFilterReducer
