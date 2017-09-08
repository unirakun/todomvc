import sagas from './intents'

export default () => function* () {
  function* errorHandlingSagas() {
    try {
      yield sagas()
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.error('saga exception', ex)
    }
  }

  yield errorHandlingSagas()
}
