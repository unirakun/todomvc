import { createStore, compose, applyMiddleware } from 'redux'
import { run } from '@cycle/run'
import { createCycleMiddleware } from 'redux-cycles'
import { initializeCurrentLocation } from 'redux-little-router'
import { enhancer, middleware } from './ui/router'
import reducers from './reducers'
import main from '../cycle'

const cycleMiddleware = createCycleMiddleware()
const { makeActionDriver } = cycleMiddleware

const store = createStore(
  reducers,
  compose(
    enhancer,
    applyMiddleware(cycleMiddleware, middleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

run(main, {
  ACTION: makeActionDriver(),
})

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
