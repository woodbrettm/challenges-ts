/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
*/

type Todo = {
  title: string;
  description: string;
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'Foobar',
};

// @ts-expect-error : Readonly
todo.title = 'Hello';

// @ts-expect-error : Readonly
todo.description = 'barFoo';
