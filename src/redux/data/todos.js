import { keyValue } from 'trampss-redux-factory'
import { mapPayload } from 'trampss-redux-factory/helpers'

/* Todos Reducer  with her mapper */
const todosMapper = todo => ({ id: new Date().getTime(), todo })
export default keyValue({ pre: [mapPayload(/@trampss\/ADD_TODOS/)(todosMapper)] })({ key: 'id', name: 'todos' })
