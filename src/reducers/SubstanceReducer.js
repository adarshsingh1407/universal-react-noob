import { ADD_SUBSTANCE,
  INCREASE_TEMP,
  DECREASE_TEMP,
  CHANGE_STEP
} from '../actions/SubstanceActions';

/*
 * Helper for substanceReducer
 * This is called reducer composition, and it's the fundamental pattern of building Redux apps
 */
 function substanceActionHelper (state = {}, action) {
  switch (action.type) {
    case ADD_SUBSTANCE:
      return {
        id: action.id,
        name: action.name,
        currentTemp: action.currentTemp,
        step: action.step
      }
    case INCREASE_TEMP:
      if (state.id === action.id) {
        return {
          ...state,
          currentTemp: state.currentTemp + action.increment
        }
      } else {
        return state;
      }
    case DECREASE_TEMP:
    if (state.id === action.id) {
      return {
        ...state,
        currentTemp: state.currentTemp - action.decrement
      }
    } else {
      return state;
    }
    case CHANGE_STEP:
      if (state.id === action.id) {
        return {
          ...state,
          step: action.step
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}

/*
 * Reducer for state.substances
 */
function substanceReducer (state = [], action) {
  switch (action.type) {
    case ADD_SUBSTANCE:
      return [
        ...state,
        substanceActionHelper(undefined, action)
      ]
    case INCREASE_TEMP:
    case DECREASE_TEMP:
    case CHANGE_STEP:
      return state.map(t => substanceActionHelper(t, action));
    default:
      return state;
  }
}

export default substanceReducer
