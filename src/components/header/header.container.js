import { connect } from 'react-redux'
import newTodo from 'redux/ui/newTodo'
import { onNewTodoChange, addTodo } from './header.actions'
import Component from './header'

const ENTER_KEY = 13
const checkEnter = key => key === ENTER_KEY

export const mapStateToProps = (state) => {
  return {
    newTodo: newTodo.get()(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: e => checkEnter(e.keyCode) && dispatch(addTodo(e.target.value)),
    onNewTodoChange: e => dispatch(onNewTodoChange(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
