import { combineReducers } from 'redux'
import { routerForBrowser } from 'redux-little-router'
import router from './router'
import ui from './ui'
import todos from './todos'

export const CONTEXT = process.env.NODE_ENV === 'development' ? '' : '/todomvc'

const { reducer } = routerForBrowser({ routes: router, basename: CONTEXT })

export default combineReducers({
  router: reducer,
  todos,
  ui,
})
