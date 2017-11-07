import { takeLatest } from 'redux-saga/effects'
import * as todos from './todos'
import * as ui from './ui'

const check = (action, key) => action.payload.keyCode === key
const ENTER_KEY = 13
const checkEnter = action => check(action, ENTER_KEY)
const ESCAPE_KEY = 27
const checkEscape = action => check(action, ESCAPE_KEY)

export default function* () {
  yield takeLatest('CLICK_REMOVE_TODO', action => todos.remove(action.payload))
  yield takeLatest('CHANGE_NEW_TODO', action => ui.setNewTodo(action.payload))
  yield takeLatest('CLICK_COMPLETE_TODO', action => todos.complete(action.payload))
  yield takeLatest('CHANGE_COMPLETE_ALL', action => todos.completeAll(action.payload))
  yield takeLatest('DOUBLECLICK_TODO', action => ui.edit(action.payload))
  yield takeLatest('BLUR_TODO', action => todos.update(action.payload))
  yield takeLatest('CHANGE_TODO', action => ui.setEditTodo(action.payload))
  yield takeLatest('CLICK_CLEAR_COMPLETED', todos.clearCompleted)
  yield takeLatest('KEYDOWN_NEW_TODO', (action) => {
    if (checkEnter(action)) return todos.add(action.payload.todo)
    return null
  })
  yield takeLatest('KEYDOWN_TODO', (action) => {
    if (checkEnter(action)) return todos.update(action.payload.id)
    if (checkEscape(action)) return ui.cancelEdit(action.payload.id)
    return null
  })
}
