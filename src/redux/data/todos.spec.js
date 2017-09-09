/* eslint-env jest */
import { todosMapper } from './todos'

describe('redux/todos', () => {
  describe('todosMapper', () => {
    it('should create todo when todo is empty', () => {
      expect(todosMapper('')).toMatchSnapshot()
    })

    it('should create todo when todo is blank', () => {
      expect(todosMapper('  ')).toMatchSnapshot()
    })

    it('should create todo', () => {
      expect(todosMapper('todo')).toMatchSnapshot()
    })
  })
})
