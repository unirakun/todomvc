import { connect } from 'react-redux'
import todos from 'redux/data/todos'
import completed from 'redux/ui/completed'
import { onCompleteAll } from './todos.actions'
import Component from './todos'

export const mapStateToProps = (state) => {
  return {
    todos: todos.getKeys(state),
    allCompleted: completed.getLength(state) === todos.getLength(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onCompleteAll: e => dispatch(onCompleteAll(e.target.checked)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
