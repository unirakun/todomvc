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
    addTodo: e => dispatch(action('ADD_NEW_TODO', { todo: e.target.value, keyCode: e.keyCode })),
    onNewTodoChange: e => dispatch(action('ON_NEW_TODO_CHANGE', e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
