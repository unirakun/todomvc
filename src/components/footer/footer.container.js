import { connect } from 'react-redux'
import { push } from 'redux-little-router'
import todos from 'redux/data/todos'
import action from 'components/actionFactory'
import { getTitle } from 'redux/ui/router'
import completed from 'redux/ui/completed'
import Component from './footer'

export const mapStateToProps = (state) => {
  const todosCompleted = completed.getBy('completed', true)(state).length
  return {
    todos: todos.getLength(state),
    todosLeft: todos.getLength(state) - todosCompleted,
    todosCompleted,
    router: getTitle(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    goTo: href => () => dispatch(push(href)),
    onClearCompleted: () => dispatch(action('CLEAR_COMPLETED_CLICKED')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
