import { put } from 'redux-saga/effects'
import store from 'redux/data/todos'
import newTodo from 'redux/ui/newTodo'

export function* add(todo) {
  yield put(store.add(todo))
  yield put(newTodo.reset())
}
