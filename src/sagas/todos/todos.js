import { put } from 'redux-saga/effects'
import store from 'redux/todos'
import * as ui from 'redux/ui'

export function* add(todo) {
  yield put(store.add(todo))
  yield put(ui.newTodo.reset())
}
