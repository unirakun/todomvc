import { keyValue } from 'trampss-redux-factory'
import { mapPayload } from 'trampss-redux-factory/helpers'

const mapper = todo => ({ id: new Date().getTime(), todo })

export default keyValue({ pre: [mapPayload(/ADD_TODOS/)(mapper)] })({ key: 'id', name: 'todos' })
