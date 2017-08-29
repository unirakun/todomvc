import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router'
import sagas from '../sagas'
import router from './router'
import reducers, { CONTEXT } from './reducers'

const sagaMiddleware = createSagaMiddleware()

const { enhancer, middleware } = routerForBrowser({ routes: router, basename: CONTEXT })

const store = createStore(
  reducers,
  compose(
    enhancer,
    applyMiddleware(sagaMiddleware, middleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

sagaMiddleware.run(sagas(store))

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
