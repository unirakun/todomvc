import { call, put, select } from 'redux-saga/effects'
import store from 'redux/data/todos'
import newTodo from 'redux/ui/newTodo'
import completed from 'redux/ui/completed'
import editing from 'redux/ui/editing'

export function* add(todo) {
  if (!todo || !todo.trim()) return
  yield put(store.add(todo))
  yield put(newTodo.reset())
}

export function* remove(todoId) {
  yield put(store.remove(todoId))
  yield put(editing.remove(todoId))
  yield put(completed.remove(todoId))
}

export function* update(todoId) {
  const todo = yield select(editing.get(todoId))
  if (!todo) return
  if (!todo.todo || !todo.todo.trim()) yield call(remove, todoId)
  else yield put(store.update(todo))
  yield put(editing.remove(todoId))
}

export function* complete(todo) {
  yield put(completed.add(todo))
}

export function* completeAll(check) {
  const todos = yield select(store.getAsArray)
  yield* todos.map(todo => call(complete, { ...todo, completed: check }))
}

export function* clearCompleted() {
  const completeTodos = yield select(completed.getBy('completed', true))
  const completedId = completeTodos.map(todo => todo.id)
  yield call(remove, completedId)
}
