import {combineReducers} from 'redux';
import substanceReducer from './SubstanceReducer';
import visibilityFilterReducer from './VisibilityFilterReducer';
import profileReducer from './ProfileReducer';

const appReducers = combineReducers({
  substances: substanceReducer,
  visibilityFilter: visibilityFilterReducer,
  profile: profileReducer
})

export default appReducers
