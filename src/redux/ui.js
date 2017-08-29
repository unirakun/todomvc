import { combineReducers } from 'redux'
import { simpleObject } from 'trampss-redux-factory'

const path = 'ui'

export const newTodo = simpleObject({ path, name: 'newTodo', defaultData: '' })

export default combineReducers({
  newTodo,
})
