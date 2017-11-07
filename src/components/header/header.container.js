import { connect } from 'react-redux'
import newTodo from 'redux/ui/newTodo'
import action from 'components/actionFactory'
import Component from './header'

export const mapStateToProps = (state) => {
  return {
    newTodo: newTodo.get()(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: e => dispatch(action('NEW_TODO_KEYDOWN_PRESSED', { todo: e.target.value, keyCode: e.keyCode })),
    onNewTodoChange: e => dispatch(action('NEW_TODO_CHANGED', e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
