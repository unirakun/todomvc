import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import Todo from 'components/todo'

const Todos = ({ todos, allCompleted, onCompleteAll }) => {
  return (
    <section className="main">
      {todos.length > 0 &&
        <input
          className="toggle-all"
          type="checkbox"
          onChange={onCompleteAll}
          checked={allCompleted}
        />
      }
      <ul className="todo-list" >
        {todos.map(todo => <Todo key={todo} id={todo} />)}
      </ul>
    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.array,
  allCompleted: PropTypes.bool.isRequired,
  onCompleteAll: PropTypes.func.isRequired,
}

Todos.defaultProps = {
  todos: [],
}

export default onlyUpdateForPropTypes(Todos)
