import { combineReducers } from 'redux'
import data from './data'
import ui from './ui'
import { reducer as router } from './ui/router'

export default combineReducers({
  data,
  router,
  ui,
})
