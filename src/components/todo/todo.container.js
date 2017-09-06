import { connect } from 'react-redux'
import todos from 'redux/data/todos'
import completed from 'redux/ui/completed'
import editing from 'redux/ui/editing'
import { onCompleteTodo, onRemoveTodo, onEditTodo, onUpdateTodo, onChangeTodo } from './todo.actions'
import Component from './todo'

export const mapStateToProps = (state, { id }) => {
  return {
    ...todos.get(id)(state),
    ...completed.get(id)(state),
    ...editing.get(id)(state),
  }
}

export const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onCompleteTodo: e => dispatch(onCompleteTodo(id, e.target.checked)),
    onEditTodo: () => dispatch(onEditTodo(id)),
    onUpdateTodo: e => dispatch(onUpdateTodo(id, e.target.value)),
    onChangeTodo: e => dispatch(onChangeTodo(id, e.target.value)),
    onRemoveTodo: () => dispatch(onRemoveTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
