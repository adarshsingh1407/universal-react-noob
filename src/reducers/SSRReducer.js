import {
  SET_SSR
} from '../actions/SSRActions';

const DEFAULT_SSR = {
  path:'',
  isDone: false
};

/*
 * Reducer for state.profile
 */
function ssrReducer (state = DEFAULT_SSR, action) {
  switch (action.type) {
    case SET_SSR:
      return {
        ...state,
        path: action.ssrPath,
        isDone: action.isDone
      };
    default:
      return state;
  }
}

export default ssrReducer
