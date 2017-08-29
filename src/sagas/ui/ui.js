import { put } from 'redux-saga/effects'
import * as ui from 'redux/ui'

export function* setNewTodo(todo) {
  yield put(ui.newTodo.set(todo))
}
