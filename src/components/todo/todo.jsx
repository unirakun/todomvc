import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'

const Todo = ({
  todo, completed, editing, show,
  onCompleteTodo, onEditTodo, onUpdateTodo, onChangeTodo, onRemoveTodo, onKeyDownTodo,
}) => {
  if ((show === 'ACTIVE' && completed) || (show === 'COMPLETED' && !completed)) return null
  return (
    <li className={classnames({ completed, editing })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={onCompleteTodo}
        />
        <label htmlFor="editField" onDoubleClick={onEditTodo}>
          {todo}
        </label>
        <button className="destroy" onClick={onRemoveTodo} />
      </div>
      <input
        className="edit"
        value={editing}
        onBlur={onUpdateTodo}
        onChange={onChangeTodo}
        onKeyDown={onKeyDownTodo}
      />
    </li>
  )
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  editing: PropTypes.string,
  show: PropTypes.string,
  onCompleteTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onChangeTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onKeyDownTodo: PropTypes.func.isRequired,
}

Todo.defaultProps = {
  editing: '',
  show: 'ALL',
  completed: false,
}

export default onlyUpdateForPropTypes(Todo)
