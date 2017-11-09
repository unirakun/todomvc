import { connect } from 'react-redux'
import todos from 'redux/data/todos'
import completed from 'redux/ui/completed'
import action from 'components/actionFactory'
import Component from './todos'

export const mapStateToProps = (state) => {
  return {
    todos: todos.getKeys(state),
    allCompleted: completed.getBy('completed', true)(state).length === todos.getLength(state),
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onCompleteAll: e => dispatch(action('COMPLETE_ALL_CHANGED', e.target.checked)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
