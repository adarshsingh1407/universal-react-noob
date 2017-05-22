import {combineReducers} from 'redux';
import substanceReducer from './SubstanceReducer';
import visibilityFilterReducer from './VisibilityFilterReducer';
import profileReducer from './ProfileReducer';
import ssrReducer from './SSRReducer'

const appReducers = combineReducers({
  substances: substanceReducer,
  visibilityFilter: visibilityFilterReducer,
  profile: profileReducer,
  ssr: ssrReducer
})

export default appReducers
