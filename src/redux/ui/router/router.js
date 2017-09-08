import { routerForBrowser } from 'redux-little-router'

export const { reducer, enhancer, middleware } = routerForBrowser({
  routes: {
    '/': { title: 'HOME' },
  },
})

