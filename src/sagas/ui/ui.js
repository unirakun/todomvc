import { put, select } from 'redux-saga/effects'
import newTodo from 'redux/ui/newTodo'
import editing from 'redux/ui/editing'
import todos from 'redux/data/todos'

export function* setNewTodo(todo) {
  yield put(newTodo.set(todo))
}

export function* edit(todoId) {
  const { todo } = yield select(todos.get(todoId))
  yield put(editing.add({ id: todoId, editing: todo }))
}

export function* setTodo(todo) {
  yield put(editing.update({ ...todo, editing: todo.todo }))
}
