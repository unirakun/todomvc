import xs from 'xstream'
import sampleCombine from 'xstream/extra/sampleCombine'

const ESCAPE_KEY = 27
const ENTER_KEY = 13
export const checkEnter = payload => payload.keyCode === ENTER_KEY
export const checkEscape = payload => payload.keyCode === ESCAPE_KEY
export const todoIsNotBlank = ({ todo }) => todo && todo.trim()
export const test = match => ({ type }) => match.test(type)
export const toPayload = action => action.payload

export const factory = ACTION => STATE => regexp => (...filters) => (action) => {
  let payload$ = ACTION
    .filter(test(regexp))
    .map(toPayload)

  /* Add filters to stream$ */
  if (filters.length > 0) {
    payload$ = filters.reduce(
      (o$, filter) => o$.filter(filter),
     payload$,
    )
  }

  return payload$
  .compose(sampleCombine(STATE))
  .map(([p, state]) => xs.fromArray(action(p, state))).flatten()
}
