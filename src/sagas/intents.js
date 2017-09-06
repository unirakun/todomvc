import { takeLatest } from 'redux-saga/effects'
import * as todos from './todos'
import * as ui from './ui'

export default function* () {
  yield takeLatest('ADD_NEW_TODO', action => todos.add(action.payload))
  yield takeLatest('ON_REMOVE_TODO', action => todos.remove(action.payload))
  yield takeLatest('ON_NEW_TODO_CHANGE', action => ui.setNewTodo(action.payload))
  yield takeLatest('ON_COMPLETE_TODO', action => todos.complete(action.payload))
  yield takeLatest('ON_EDIT_TODO', action => ui.edit(action.payload))
  yield takeLatest('ON_UPDATE_TODO', action => todos.update(action.payload))
  yield takeLatest('ON_CHANGE_TODO', action => ui.setTodo(action.payload))
}
