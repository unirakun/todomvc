import { combineReducers } from 'redux'
import ui from './ui'
import data from './data'

export default combineReducers({
  data,
  ui,
})
