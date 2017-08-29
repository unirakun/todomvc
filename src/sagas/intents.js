import { takeLatest } from 'redux-saga/effects'
import * as todos from './todos'
import * as ui from './ui'

export default function* () {
  yield takeLatest('ADD_NEW_TODO', action => todos.add(action.payload))
  yield takeLatest('SET_NEW_TODO', action => ui.setNewTodo(action.payload))
}
