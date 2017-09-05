import { put } from 'redux-saga/effects'
import newTodo from 'redux/ui/newTodo'

export function* setNewTodo(todo) {
  yield put(newTodo.set(todo))
}
