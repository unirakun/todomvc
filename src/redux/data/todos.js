import { keyValue } from 'trampss-redux-factory'
import { mapPayload } from 'trampss-redux-factory/helpers'

/* Todos Reducer  with her mapper */
const todosMapper = todo => ({ id: new Date().getTime(), todo: todo.trim() })
export default keyValue({ pre: [mapPayload(/@trampss\/ADD_TODOS/)(todosMapper)] })({ path: 'data', key: 'id', name: 'todos' })
