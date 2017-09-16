import xs from 'xstream'
import { setNewTodo } from './model/ui'
import { addTodo } from './model/todos'
import { test, checkEnter, todoIsNotBlank } from './helpers'

export default ({ ACTION }) => {
  const newTodoChange$ = ACTION
    .filter(test(/ON_NEW_TODO_CHANGE/))
    .map(setNewTodo)

  const addTodo$ = ACTION
    .filter(test(/ADD_NEW_TODO/))
    .filter(checkEnter)
    .filter(todoIsNotBlank)
    .map(addTodo)
    .flatten()

  const both$ = xs.merge(newTodoChange$, addTodo$)

  return {
    ACTION: both$,
  }
}
