import { connect } from 'react-redux'
import todos from 'redux/data/todos'
import completed from 'redux/ui/completed'
import editing from 'redux/ui/editing'
import action from 'components/actionFactory'
import { getTitle } from 'redux/ui/router'
import Component from './todo'

export const mapStateToProps = (state, { id }) => {
  const edit = editing.get(id)(state)
  return {
    ...todos.get(id)(state),
    ...completed.get(id)(state),
    editing: edit && edit.todo,
    show: getTitle(state),
  }
}

export const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onCompleteTodo: e => dispatch(action('CLICK_COMPLETE_TODO', { id, completed: e.target.checked })),
    onEditTodo: () => dispatch(action('DOUBLECLICK_TODO', id)),
    onUpdateTodo: () => dispatch(action('BLUR_TODO', id)),
    onKeyDownTodo: e => dispatch(action('KEYDOWN_TODO', { id, keyCode: e.keyCode })),
    onChangeTodo: e => dispatch(action('CHANGE_TODO', { id, todo: e.target.value })),
    onRemoveTodo: () => dispatch(action('CLICK_REMOVE_TODO', id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
