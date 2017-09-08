import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Header = ({ newTodo, addTodo, onNewTodoChange }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        name="newTodo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodo}
        onKeyDown={addTodo}
        onChange={onNewTodoChange}
      />
    </header>
  )
}

Header.propTypes = {
  newTodo: PropTypes.string,
  onNewTodoChange: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
}

Header.defaultProps = {
  newTodo: '',
}

export default onlyUpdateForPropTypes(Header)
