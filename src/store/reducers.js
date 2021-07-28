import { combineReducers } from 'redux'
import initialReducer from '../containers/initial/store/initial.reducer'
import homeReducer from '../containers/home/store/home.reducer'

const appReducer = combineReducers({
  initial: initialReducer,
  home: homeReducer
})

export default appReducer
