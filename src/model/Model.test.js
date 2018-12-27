import Model from './Model';
import { createStore } from 'redux';

it('a Model can be created', () => {
  const defaultFields = {
    body: '',
    completed: false
  };
  const Todo = {
    ...Model('TODO', defaultFields)
  };
  const initial = { todo: [] };
  const store = createStore((state = initial, action) => ({
    todo: Todo.reducer(state.todo, action)
  }));
  store.dispatch(Todo.create({ body: 'do this' }));
  expect(store.getState().todo.length).toBe(1);
});
