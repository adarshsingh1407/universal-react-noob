import {
  REQUEST_PROFILE,
  RECEIVED_PROFILE,
  UPDATE_PROFILE,
  PROFILE_UPDATED
} from '../actions/ProfileActions';

/*
 * Reducer for state.profile
 */
function profileReducer (state = {}, action) {
  switch (action.type) {
    case REQUEST_PROFILE:
      return {
        ...state,
        isBusy: true,
        updateBusy: false,
        collector: {}
      };
    case RECEIVED_PROFILE:
      return {
        ...state,
        isBusy: false,
        updateBusy: false,
        receivedAt: action.receivedAt,
        collector: action.collector
      };
    case RECEIVED_PROFILE:
      return {
        ...state,
        isBusy: false,
        updateBusy: false,
        receivedAt: action.receivedAt
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        updateBusy: true
      }
    case PROFILE_UPDATED:
      return {
        ...state,
        updateBusy: false,
        collector: action.collector,
        receivedAt: action.receivedAt
      }
    default:
      return state;
  }
}

export default profileReducer
