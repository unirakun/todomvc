import xs from 'xstream'
import * as ui from './model/ui'
import * as todos from './model/todos'
import { checkEnter, checkEscape, todoIsNotBlank, factory } from './helpers'

export default ({ ACTION, STATE }) => {
  const toAction = factory(ACTION)(STATE)

  const both$ = xs.merge(
    /* todos */
    toAction(/ADD_NEW_TODO/)(todoIsNotBlank, checkEnter)(todos.add),
    toAction(/ON_COMPLETE_TODO/)()(todos.complete),
    toAction(/ON_UPDATE_TODO/)()(todos.update),
    toAction(/ON_KEYDOWN_TODO/)(checkEnter)((p, state) => todos.update(p.id, state)),
    toAction(/ON_REMOVE_TODO/)()(todos.remove),
    toAction(/ON_CLEAR_COMPLETED/)()(todos.clearCompleted),
    toAction(/ON_COMPLETE_ALL/)()(todos.completeAll),
    /* ui */
    toAction(/ON_EDIT_TODO/)()(ui.edit),
    toAction(/ON_NEW_TODO_CHANGE/)()(ui.updateNewTodo),
    toAction(/ON_CHANGE_TODO/)()(ui.updateEditTodo),
    toAction(/ON_KEYDOWN_TODO/)(checkEscape)(ui.cancelEdit),
  )

  return {
    ACTION: both$,
  }
}
