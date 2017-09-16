import xs from 'xstream'
import todos from 'redux/data/todos'
import newTodo from 'redux/ui/newTodo'

export const addTodo = action => xs.fromArray([
  todos.add(action.payload.todo),
  newTodo.reset(),
])
