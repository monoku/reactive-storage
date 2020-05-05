import ReactiveStorage from '../lib';

it('instance should be a function', () => {
  const instance = new ReactiveStorage();
  expect(instance).toBeInstanceOf(ReactiveStorage);
});
