import { keyValue } from 'k-redux-factory'
import { mapPayload } from 'k-redux-factory/helpers'

/* Todos Reducer  with her mapper */
export const todosMapper = todo => ({ id: new Date().getTime(), todo: todo.trim() })
export default keyValue({ pre: [mapPayload(/@@krf\/ADD_TODOS/)(todosMapper)] })({ path: 'data', key: 'id', name: 'todos' })
