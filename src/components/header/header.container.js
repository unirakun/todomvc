import { connect } from 'react-redux'
import { newTodo } from 'redux/ui'
import { setNewTodo, addTodo } from './header.actions'
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
    setNewTodo: e => dispatch(setNewTodo(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
