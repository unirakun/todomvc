/* eslint-env jest */
import tester from 'k-redux-saga-tester'
import { setNewTodo, edit, cancelEdit, setEditTodo } from './ui'

describe('sagas/ui', () => {
  describe('setNewTodo', () => {
    const test = tester(setNewTodo)

    it('should set new todo', () => {
      expect(test('todo')()).toMatchSnapshot()
    })
  })

  describe('edit', () => {
    const test = tester(edit)

    it('should edit todo', () => {
      const mocks = {
        select: [() => ({ id: 'todo1', todo: 'todo' })],
      }
      expect(test('todo1')(mocks)).toMatchSnapshot()
    })
  })

  describe('cancelEdit', () => {
    const test = tester(cancelEdit)

    it('should edit todo', () => {
      expect(test('todo1')()).toMatchSnapshot()
    })
  })

  describe('setEditTodo', () => {
    const test = tester(setEditTodo)

    it('should edit todo', () => {
      expect(test('todo1')()).toMatchSnapshot()
    })
  })
})
