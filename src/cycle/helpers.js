const ESCAPE_KEY = 27
const ENTER_KEY = 13
const check = (action, key) => action.payload.keyCode === key
export const checkEnter = action => check(action, ENTER_KEY)
export const checkEscape = action => check(action, ESCAPE_KEY)
export const todoIsNotBlank = ({ payload: { todo } }) => todo && todo.trim()
export const test = match => ({ type }) => match.test(type)
