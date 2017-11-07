import { takeLatest } from 'redux-saga/effects'
import * as todos from './todos'
import * as ui from './ui'

const check = (action, key) => action.payload.keyCode === key
const ENTER_KEY = 13
const checkEnter = action => check(action, ENTER_KEY)
const ESCAPE_KEY = 27
const checkEscape = action => check(action, ESCAPE_KEY)

export default function* () {
  yield takeLatest('REMOVE_TODO_CLICKED', action => todos.remove(action.payload))
  yield takeLatest('NEW_TODO_CHANGED', action => ui.setNewTodo(action.payload))
  yield takeLatest('COMPLETE_TODO_CLICKED', action => todos.complete(action.payload))
  yield takeLatest('COMPLETE_ALL_CHANGED', action => todos.completeAll(action.payload))
  yield takeLatest('TODO_DOUBLE_CLICKED', action => ui.edit(action.payload))
  yield takeLatest('TODO_BLURED', action => todos.update(action.payload))
  yield takeLatest('TODO_CHANGED', action => ui.setEditTodo(action.payload))
  yield takeLatest('CLEAR_COMPLETED_CLICKED', todos.clearCompleted)
  yield takeLatest('NEW_TODO_KEYDOWN_PRESSED', (action) => {
    if (checkEnter(action)) return todos.add(action.payload.todo)
    return null
  })
  yield takeLatest('TODO_KEYDOWN_PRESSED', (action) => {
    if (checkEnter(action)) return todos.update(action.payload.id)
    if (checkEscape(action)) return ui.cancelEdit(action.payload.id)
    return null
  })
}
