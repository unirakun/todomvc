import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForPropTypes } from 'recompose'
import classnames from 'classnames'

const Footer = ({ todosLeft, todosCompleted, router, goTo, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLeft}</strong> {`item${todosLeft > 1 ? 's' : ''} left`}
      </span>
      <ul className="filters">
        <li>
          <a onClick={goTo('/')} className={classnames({ selected: router === 'ALL' })} >
            All
          </a>
        </li>
        <li>
          <a onClick={goTo('/active')} className={classnames({ selected: router === 'ACTIVE' })}>
            Active
          </a>
        </li>
        <li>
          <a onClick={goTo('/completed')} className={classnames({ selected: router === 'COMPLETED' })}>
            Completed
          </a>
        </li>
      </ul>
      {todosCompleted > 0 &&
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      }
    </footer>
  )
}

Footer.propTypes = {
  todosLeft: PropTypes.number.isRequired,
  todosCompleted: PropTypes.number.isRequired,
  router: PropTypes.string.isRequired,
  goTo: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
}

Footer.defaultProps = {
  completedLength: 0,
}

export default onlyUpdateForPropTypes(Footer)
