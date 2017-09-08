import { connect } from 'react-redux'
import todos from 'redux/data/todos'
import completed from 'redux/ui/completed'
import editing from 'redux/ui/editing'
import action from 'components/actionFactory'
import Component from './todo'

export const mapStateToProps = (state, { id }) => {
  const edit = editing.get(id)(state)
  return {
    ...todos.get(id)(state),
    ...completed.get(id)(state),
    editing: edit && edit.todo,
  }
}

export const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onCompleteTodo: e => dispatch(action('ON_COMPLETE_TODO', { id, completed: e.target.checked })),
    onEditTodo: () => dispatch(action('ON_EDIT_TODO', id)),
    onUpdateTodo: () => dispatch(action('ON_UPDATE_TODO', id)),
    onKeyDownTodo: e => dispatch(action('ON_KEYDOWN_TODO', { id, keyCode: e.keyCode })),
    onChangeTodo: e => dispatch(action('ON_CHANGE_TODO', { id, todo: e.target.value })),
    onRemoveTodo: () => dispatch(action('ON_REMOVE_TODO', id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
