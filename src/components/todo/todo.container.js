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
    onCompleteTodo: e => dispatch(action('COMPLETE_TODO_CLICKED', { id, completed: e.target.checked })),
    onEditTodo: () => dispatch(action('TODO_DOUBLE_CLICKED', id)),
    onUpdateTodo: () => dispatch(action('TODO_BLURED', id)),
    onKeyDownTodo: e => dispatch(action('TODO_KEYDOWN_PRESSED', { id, keyCode: e.keyCode })),
    onChangeTodo: e => dispatch(action('TODO_CHANGED', { id, todo: e.target.value })),
    onRemoveTodo: () => dispatch(action('REMOVE_TODO_CLICKED', id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
