import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'

const Header = ({ newTodo, addTodo, setNewTodo }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={newTodo}
        onKeyDown={addTodo}
        onChange={setNewTodo}
        autoFocus
      />
    </header>
  )
}

Header.propTypes = {
  newTodo: PropTypes.string,
  setNewTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
}

Header.defaultProps = {
  newTodo: '',
}

export default onlyUpdateForPropTypes(Header)
