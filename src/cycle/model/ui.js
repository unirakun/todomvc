import newTodo from 'redux/ui/newTodo'
import editing from 'redux/ui/editing'
import todos from 'redux/data/todos'

export const updateNewTodo = text => [
  newTodo.set(text),
]

export const edit = (todoId, state) => [
  editing.add(todos.get(todoId)(state)),
]

export const cancelEdit = ({ id }) => [
  editing.remove(id),
]

export const updateEditTodo = todo => [
  editing.update(todo),
]
