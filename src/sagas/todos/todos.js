import { put, select } from 'redux-saga/effects'
import store from 'redux/data/todos'
import newTodo from 'redux/ui/newTodo'
import completed from 'redux/ui/completed'
import editing from 'redux/ui/editing'

export function* add(todo) {
  yield put(store.add(todo))
  yield put(newTodo.reset())
}

export function* update(todoId) {
  const todo = yield select(editing.get(todoId))
  if (!todo) return // todo is not editing
  yield put(store.update(todo))
  yield put(editing.remove(todoId))
}

export function* complete(todo) {
  yield put(completed.add(todo))
}

export function* remove(todoId) {
  yield put(store.remove(todoId))
  yield put(completed.remove(todoId))
}
