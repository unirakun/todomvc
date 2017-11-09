/* eslint-env jest */
import tester from 'k-redux-saga-tester'
import { add, remove, update, complete, completeAll, clearCompleted } from './todos'

describe('sagas/todos', () => {
  describe('add', () => {
    const test = tester(add)

    it('should not add todo when todo is null', () => {
      expect(test(null)()).toMatchSnapshot()
    })

    it('should not add todo when todo is undefined', () => {
      expect(test(undefined)()).toMatchSnapshot()
    })

    it('should not add todo when todo is empty', () => {
      expect(test('')()).toMatchSnapshot()
    })

    it('should not add todo when todo is blank', () => {
      expect(test('  ')()).toMatchSnapshot()
    })

    it('should add todo when todo is valid', () => {
      expect(test('todo1')()).toMatchSnapshot()
    })
  })

  describe('remove', () => {
    const test = tester(remove)

    it('should remove todo', () => {
      expect(test('todo1')()).toMatchSnapshot()
    })
  })

  describe('update', () => {
    const test = tester(update)

    it('should not update todo when todo does not exist', () => {
      const mocks = {
        select: [() => undefined],
        call: [() => false],
      }
      expect(test('todoDoesNotExist')(mocks)).toMatchSnapshot()
    })

    it('should remove todo when the todo is empty', () => {
      const mocks = {
        select: [() => ({ id: 'todo1', todo: '' })],
        call: [() => false],
      }
      expect(test('todo1')(mocks)).toMatchSnapshot()
    })

    it('should remove todo when the todo is blank', () => {
      const mocks = {
        select: [() => ({ id: 'todo1', todo: '  ' })],
        call: [() => false],
      }
      expect(test('todo1')(mocks)).toMatchSnapshot()
    })

    it('should update todo', () => {
      const mocks = {
        select: [() => ({ id: 'todo1', todo: 'todoOnEdit' })],
        call: [() => false],
      }
      expect(test('todo1')(mocks)).toMatchSnapshot()
    })
  })

  describe('complete', () => {
    const test = tester(complete)

    it('should complete todo', () => {
      expect(test('todo1')()).toMatchSnapshot()
    })
  })

  describe('completeAll', () => {
    const test = tester(completeAll)

    it('should complete one todos', () => {
      const mocks = {
        select: [() => ([{ id: 'todo1', todo: 'todoOnEdit' }])],
        call: [() => true],
      }
      expect(test(true)(mocks)).toMatchSnapshot()
      expect(test(false)(mocks)).toMatchSnapshot()
    })

    it('should complete many todos', () => {
      const mocks = {
        select: [() => [
          { id: 'todo1', todo: 'todo1' },
          { id: 'todo2', todo: 'todo2' },
        ]],
        call: [() => 'todo1', () => 'todo2'],
      }
      expect(test(true)(mocks)).toMatchSnapshot()
      expect(test(false)(mocks)).toMatchSnapshot()
    })
  })

  describe('clearCompleted', () => {
    const test = tester(clearCompleted)

    it('should clear completed todo', () => {
      const mocks = {
        select: [() => [
          { id: 'todo1', todo: 'todo1' },
          { id: 'todo2', todo: 'todo2' },
        ]],
        call: [() => false],
      }

      expect(test('todo1')(mocks)).toMatchSnapshot()
    })
  })
})
