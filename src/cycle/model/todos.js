import todos from 'redux/data/todos'
import newTodo from 'redux/ui/newTodo'
import editing from 'redux/ui/editing'
import completed from 'redux/ui/completed'

export const add = todo => [
  todos.add(todo.todo),
  newTodo.reset(),
]

export const remove = todoId => [
  todos.remove(todoId),
  editing.remove(todoId),
  completed.remove(todoId),
]

export const update = (todoId, state) => {
  const actions = []
  const todo = editing.get(todoId)(state)
  if (!todo) return actions
  if (!todo.todo || !todo.todo.trim()) actions.push(...remove(todoId))
  else actions.push(todos.update(todo))
  actions.push(editing.remove(todoId))

  return actions
}

export const complete = todo => [
  completed.add(todo),
]

export const completeAll = (check, state) => {
  const allTodos = todos.getAsArray(state)
  return allTodos.map(todo => completed.add({ ...todo, completed: check }))
}

export const clearCompleted = (payload, state) => {
  const completedIds = completed.getBy('completed', true)(state).map(todo => todo.id)
  return remove(completedIds)
}
